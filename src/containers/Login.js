import React, {Fragment} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import {sendLoginRequest, receiveSession, signInUserResult} from "../actions/index";

const validate = values => {
    const errors = {};
    let hasErrors = false;
    if (!values.email || values.email.trim() === '') {
        errors.email = "E-posta adresini giriniz";
    }
    if (!/^([a-zA-Z0-9!#$%&'*-`{|}~_.]{1}[a-zA-Z0-9!#$%&'*-`{|}~_.]*)(@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})$/i.test(values.email)) {
        errors.email = 'E-posta adresi hatalı';
        hasErrors = true;
    }
    return hasErrors && errors;
};

const warn = values => {
    const warnings = {};
    if (values.username && values.username.length < 4) {
        warnings.username = "UFAK SAYI"
    }
    return warnings;
};

const renderField = ({placeholder, input, type, meta: {touched, error, warning}}) => {
    return (
        <Fragment>
            <input type={type} {...input} placeholder={placeholder}/>
            {touched &&
            ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
            }
        </Fragment>
    )
};

const Login = ({handleSubmit, submitHandler, loginResult, props}) => (
    <main>
        <div className="container">
            <form className="form" onSubmit={handleSubmit(submitHandler)}>
                <h2>Log In</h2>
                <hr/>
                <h2>Email Adresi</h2>
                <p>
                    {loginResult && loginResult.fail}
                </p>
                <Field
                    name="email"
                    component={renderField}
                    type="text"
                    placeholder="User Email"
                />

                <h2>Şifre</h2>

                <Field
                    name="password"
                    component={renderField}
                    type="password"
                    placeholder="Password"
                />

                <button type="submit">
                    Submit
                </button>

            </form>
        </div>
    </main>
);


const mapStateToProps = (state) => {
    return {
        loginResult: state.loginResult && state.loginResult
    }
};

const mapDispatchToProps = (dispatch, ownprops) => (
    {
        submitHandler: values => {
            dispatch(sendLoginRequest(values))
                .then(result => {
                    dispatch(receiveSession(result.data.success));
                    dispatch(signInUserResult(result.data));
                    console.log(ownprops.props.match.params.returnTo);
                    console.log(ownprops.props);
                    if (ownprops.props.match.params.returnTo !== ":returnTo") {
                        ownprops.props.history.push(`/${ownprops.props.match.params.returnTo}`)
                    }
                    else {
                        ownprops.props.history.push("/");
                    }
                })
        }
    }
);

const LoginExport = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default reduxForm({
    form: "login",
    validate,
    warn
})(LoginExport);