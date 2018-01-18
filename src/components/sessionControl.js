import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const SessionControl = ({isLogin, children, history, path}) => {
    return (
        <React.Fragment>
            {isLogin !== null && (isLogin !== true
                ?
                <Redirect
                    to={history
                        ? LOGIN + "?url=" + history.location.pathname
                        : LOGIN + "?url=" + path}
                />
                :
                children)}
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    isLogin: state.Session
});

export default withRouter(connect(mapStateToProps)(SessionControl));