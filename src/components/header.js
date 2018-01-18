import React from 'react';
import {connect} from 'react-redux';
import * as ROUTES from '../constants/routePaths';
import {Link, withRouter} from "react-router-dom";
import {sessionUser, signOutUser, signOutUserSuccess} from "../actions/index";

const Header = ({header, session, signOut}) => {
    return (
        header ?
            <header>
                <div className="leftBlock">
                    <h1>Header</h1>
                    <ul>
                        <li><Link to={ROUTES.HOME}>Anasayfa</Link></li>
                        <li><Link to={ROUTES.ABOUT}>About</Link></li>
                        <li><Link to={ROUTES.PRIVATE}>Private</Link></li>
                        <li><Link to={ROUTES.BLOG}>Blog</Link></li>
                        <li><Link to={ROUTES.LOGIN}>Login</Link></li>
                        <li><Link to={ROUTES.SINGUP}>Singup</Link></li>
                    </ul>
                </div>

                <div className="rightBlock">
                    <h3 className={session.isLogin === true ? "isLogin" : ""}>IsLogin</h3>
                    {session.isLogin === true && <span className="yes">&#10003;</span>}
                    {session.isLogin === false && <span className="no">&#10007;</span>}
                    {session.isLogin === true && <p className="userName">{session.name}</p>}
                    {session.isLogin === true
                        ?
                        <div className="signOut" onClick={signOut}>
                            <div className="signOutDetail">Sign Out <span className="signOutIcon">&#9932;</span></div>
                        </div>
                        :
                        <Link to={ROUTES.LOGIN}>
                            <div className="signIn">
                                <div className="signInDetail">Sign In <span className="signInIcon">&#8486;</span></div>
                            </div>
                        </Link>
                    }
                </div>
            </header>
            : <div></div>
    )
};


const mapStateToProp = state => {
    return ({
        header: state.Site.header,
        session: state.Session
    })
};

const mapDispatchToProps = (dispatch, ownprops) => (
    {
        signOut: () => {
            dispatch(signOutUser()).then(result => {
                if (result.data.success) {
                    dispatch(sessionUser());
                    dispatch(signOutUserSuccess(result.data));
                    ownprops.history.push("/");
                }
            })
        }
    }
);

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Header));