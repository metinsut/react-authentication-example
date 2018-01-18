import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Private1 = ({session}) => {
    let {name, surname, email} = session;
    return (
        <main>
            {session ?
                <div className="private">
                    <h1>User Information</h1>
                    <ul>
                        <li>Name: {name}</li>
                        <li>Surname: {surname}</li>
                        <li>E-mail: {email}</li>
                    </ul>
                </div>
                :
                <Redirect to="/login"/>
            }
        </main>
    )
};

const mapStateToProp = (state) => {
    return ({
        session: state.Session
    })
};

export default connect(mapStateToProp)(Private1);