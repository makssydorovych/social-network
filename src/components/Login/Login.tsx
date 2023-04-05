import React, { FC } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validatos";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import s from "./Login.module.css";
import {
    createField,
    GetStringKeys,
    Input,
} from "../common/FormControls/FormControl";
import { AppRootStateType } from "../../redux/redux-store";
type LoginFormOwnProps = {
    captchaUrl: string | null;
};
type NewType = FC<
    InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
    >;

const LoginForm: NewType = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
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
                    Input
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

const Login: FC<MapStatePropsType & MapDispatchPropsType> = ({
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
            <h1>LOGIN</h1>
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
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;
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
