import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {GetStringKeysType, Input} from "../../../../common/FormControls/FormControl";
import {maxLengthCreator, required} from "../../../../utils/validator";
export type AddPostFormValueType = {
    newPostText: string
}
type PropsType={}
type AddPostFormValuesKeys = GetStringKeysType<AddPostFormValueType>
const maxLength30 = maxLengthCreator(30);
const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesKeys, PropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={"Your post"}
                component={Input}
                name={"newPostText"}
                validator={[required, maxLength30]}

            />
        </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

export default reduxForm<{newPostText: string }>({form: 'profile-add-post'})(AddPostForm)