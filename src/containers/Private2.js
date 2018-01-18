import React from 'react';
import {connect} from "react-redux";

const Private2 = ({session}) => {
    let {name, surname, email} = session;
    return (
        <main>
            <div className="private">
                <h1>User Information</h1>
                <ul>
                    <li>Name: {name}</li>
                    <li>Surname: {surname}</li>
                    <li>E-mail: {email}</li>
                </ul>
            </div>
        </main>
    )
};

const mapStateToProp = (state) => {
    return ({
        session: state.Session
    })
};

export default connect(mapStateToProp)(Private2);