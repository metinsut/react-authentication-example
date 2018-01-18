import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {withRouter} from 'react-router';
import * as ROUTES from '../constants/routePaths';
import Home from '../pages/home';
import Header from '../components/header';
import Footer from '../components/footer';
import About from '../containers/About';
import Private from './Private';
import Login from '../containers/Login';
import Singup from '../containers/Singup';
import {connect} from "react-redux";
import Blog from "./Blog";


const RoutesComponent = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Header/>
            </Switch>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
                <Route path={ROUTES.ABOUT} component={About}/>
                <PrivateRoute path={ROUTES.PRIVATE} component={Private} session={props.session}/>
                <Route path={ROUTES.LOGIN}  render={(props)=>{
                    return <Login props={props}/>
                }}/>
                <Route exact path={ROUTES.BLOG} component={Blog}/>
                <Route path={ROUTES.SINGUP} component={Singup}/>
            </Switch>
            <Switch>
                <Footer/>
            </Switch>
        </React.Fragment>
    )
};

const PrivateRoute = ({component: Component, ...rest}) =>
    <Route {...rest} render={props => (
        rest.session.isLogin === true
            ?
            (<Component/>)
            :
            (<Redirect to={{pathname: '/login/private'}}/>)
    )
    }/>;


const mapStateToProp = (state) => {
    return ({
        session: state.Session
    })
};

export default withRouter(connect(mapStateToProp)(RoutesComponent));