import React from 'react';
import {connect} from 'react-redux';


const Footer = ({footer}) => {
    return (
        footer ?
            <footer>
                <h1>{footer.title}</h1>
                <p>{new Date().getFullYear()}</p>
            </footer>
            :
            <div></div>
    )
};

const mapStateToProps = (state) => {
    return ({
        footer: state.Site.footer
    })
};

export default connect(mapStateToProps)(Footer);