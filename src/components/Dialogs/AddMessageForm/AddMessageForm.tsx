import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";

import {Input} from "../../common/FormControls/FormControl";
type NewMessageFormType={
    message: string
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType>> = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={"New Message"}
                component={Input}
                name={"newMessageBody"}
                validator={[required, maxLength50]}

            />
        </div>
          <div>
              <button>Send</button>
          </div>
      </form>
    );
};



export default reduxForm<NewMessageFormType>({form:"dialog-add-message-form"})(AddMessageForm)