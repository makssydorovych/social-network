import React from 'react';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeysType, Input} from "../../common/FormControls/FormControl";
import style from "../../common/FormControls/FormControl.module.css"
import {required} from "../../utils/validator";
import {useNavigate} from "react-router-dom";
type LoginFormOwnType = {
    captchaUrl: string | null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnType> & LoginFormOwnType> =
    ({handleSubmit, error, captchaUrl
}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypesKey>("Email", "email", [required], Input, {type:"email"})}
            {createField<LoginFormValuesTypesKey>("Password", "password", [required], Input, {type : "password"})}
            {createField<LoginFormValuesTypesKey>(undefined, "rememberMe", [], Input, {type : "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt={""}/>}
            {captchaUrl && createField<LoginFormValuesTypesKey>("Symbols from image", "captcha", [required], Input, {})}

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
type LoginDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
export type LoginFormValuesType = {
    email: string, password: string, rememberMe: boolean, captcha: string
}
type LoginFormValuesTypesKey = GetStringKeysType<LoginFormValuesType>
const Login: React.FC<LoginPropsType & LoginDispatchPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        const navigate = useNavigate()
        return navigate("/profile")
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