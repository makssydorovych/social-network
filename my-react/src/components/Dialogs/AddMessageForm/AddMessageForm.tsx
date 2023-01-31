import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator";
import {createField, TextArea} from "../../../common/FormControls/FormControl";
import {NewMessageFormType} from "../Dialogs";
type NewMessageFormValueKeysType = Extract<keyof NewMessageFormType, string>
type PropsType={}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType>> = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
            {createField<NewMessageFormValueKeysType>("Enter your message", "New message body", [required, maxLength50], TextArea)}
        </div>
          <div>
              <button>Send</button>
          </div>
      </form>
    );
};



export default reduxForm<NewMessageFormType>({form:"dialog-add-message-form"})(AddMessageForm)