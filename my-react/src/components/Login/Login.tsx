import React from 'react';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeysType, Input} from "../../common/FormControls/FormControl";
import s from "../../common/FormControls/FormControl.module.css"
import {required} from "../../utils/validator";
import {Navigate} from "react-router-dom";


type LoginFormOwnProps = {
    captchaUrl: string | null;
};
type NewType = React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>;

const LoginForm: NewType = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input, captchaUrl, "")}
            {createField("Password", "password", [required], Input, {
                type: "password",
            })}
            {createField(
                undefined,
                "rememberMe",
                [],
                Input,
                { type: "checkbox" },
                "remember me"
            )}
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl &&
                createField<LoginFormValuesTypeKeys>(
                    "Symbols from image",
                    "captcha",
                    [required],
                    Input,
                    captchaUrl

                )}
            {error && <div className={s.formSummaryError}>{error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: "login",
})(LoginForm);

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({
                                                                 login,
                                                                 isAuth,
                                                                 captchaUrl,
                                                             }) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        );
    };
    if (isAuth) {
        return <Navigate to="/profile" />;
    }
    return (
        <>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </>
    );
};

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);

//types
export type LoginFormValuesType = {
    captcha: string;
    rememberMe: boolean;
    password: string;
    email: string;
};
type LoginFormValuesTypeKeys = GetStringKeysType<LoginFormValuesType>;
type MapStatePropsType = {
    captchaUrl: string | null;
    isAuth: boolean;
};
type MapDispatchPropsType = {
    login: (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string
    ) => void;
};
