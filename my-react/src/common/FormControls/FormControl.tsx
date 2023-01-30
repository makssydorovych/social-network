import React from 'react';
import {FieldValidatorType} from "../../utils/validator";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import styles from "./FormControl.module.css"

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode

}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
}
export default FormControl;

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


export function createField<FormKeysType extends string>(placeholder: string | undefined, name: FormKeysType,
                                          validators: Array<FieldValidatorType>,
                                          component: React.FC<WrappedFieldProps>,
                                          props: any, text = "") {
    return <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        />{text}
    </div>


}