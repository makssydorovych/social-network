import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator";
import {TextArea} from "../../../common/FormControls/FormControl";
const maxLenth50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
            <Field
            component={TextArea}
            validate={[required, maxLenth50]}
            placeholder='Enter your message' name="newMessageBody"
            />
        </div>
      </form>
    );
};



export default reduxForm({form:"dialog-add-message-form"})(AddMessageForm)