
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

export type FormMessageDataType = {
    message: string
}

interface AddMessageFormType {
    onSubmit: (values: FormMessageDataType) => void
}

const maxLength100 = maxLengthCreator(100)

export const AddMessageForm: React.FC<InjectedFormProps<FormMessageDataType, AddMessageFormType> & AddMessageFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                validate={[required, maxLength100]}
                placeholder={'Enter your message...'}
                name={'message'}
            ></Field>
            <button>Send</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormMessageDataType, AddMessageFormType>({ form: 'dialogAddMessageForm' })(AddMessageForm)