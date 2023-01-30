import React from 'react';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {InjectedFormProps, reduxForm} from "redux-form";

type LoginFormOwnType = {
    captchaUrl: string | null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnType> & LoginFormOwnType> = ({
                                                                                            handleSubmit,
                                                                                            error,
                                                                                            captchaUrl
                                                                                        }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type = "password"})}
            {createField(null, rememberMe, [], Input, {type = "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={style.formSummaryError}>{error}

            </div>}
            <div>Login</div>

        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type LoginDispatcPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginFormValuesType = {
    email: string, password: string, rememberMe: boolean, captcha: string
}
const Login: React.FC<LoginPropsType & LoginDispatcPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};
const mapStateToProps = (state: AppRootStateType): LoginPropsType => {
    captchaUrl: state.auth.captchaUrl
    isAuth: state.auth.isAuth
}


export default connect(mapStateToProps, {login})(Login)