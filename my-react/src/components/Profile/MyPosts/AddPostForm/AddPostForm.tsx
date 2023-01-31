import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeysType, Input} from "../../../../common/FormControls/FormControl";
import {PropsType} from "../../../Users/UsersContainer";
import {maxLengthCreator, required} from "../../../../utils/validator";
export type AddPostFormValueType = {
    newPostText: string
}
type AddPostFormValuesKeys = GetStringKeysType<AddPostFormValueType>
const maxLength30 = maxLengthCreator(30);
const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesKeys, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            {createField("Your post", 'newPostText', [required], maxLength30, Input)}
        </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

export default reduxForm<{newPostText: string }>({form: 'profile-add-post'})(AddPostForm)