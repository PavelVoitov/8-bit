
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormMessageDataType = {
    message: string
}

interface AddMessageFormType {
    onSubmit: (values: FormMessageDataType) => void
}


export const AddMessageForm: React.FC<InjectedFormProps<FormMessageDataType, AddMessageFormType> & AddMessageFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                placeholder={'Enter your message...'}
                name={'message'}
            ></Field>
            <button>Send</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormMessageDataType, AddMessageFormType>({ form: 'dialogAddMessageForm' })(AddMessageForm)