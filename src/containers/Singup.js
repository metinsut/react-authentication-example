import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import {signUpUser} from "../actions/index";


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
        <React.Fragment>
            <input type={type} {...input} placeholder={placeholder}/>
            {touched &&
            ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
            }
        </React.Fragment>
    )
};


const signUp = ({handleSubmit,submitHandler,singUpResult,props}) => {
    return (
        <main>
            <div className="container">
                <form className="form" onSubmit={handleSubmit(submitHandler)}>
                    <h2>Sing Up</h2>
                    <hr/>
                    <h2>Email Adresi</h2>

                    <Field
                        name="email"
                        component={renderField}
                        type="text"
                        placeholder="User Name"
                    />

                    <h2>Şifre</h2>

                    <Field
                        name="pass"
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
    )
};

const mapStateToProps = (state) => {
    return {
        signUpResult: state.signUpResult && state.signUpResult
    }
};

const mapDispatchToProps = (dispatch, ownprops) => (
    {
        submitHandler: values => {
            dispatch(signUpUser(values))
                .then(result => {
                    console.log(result)
                });
            ownprops.props.history.push("/login")
        }
    }
);

const SignUpExport = connect(
    mapStateToProps,
    mapDispatchToProps
)(signUp);

export default reduxForm({
    form: "signUp",
    validate,
    warn
})(SignUpExport);