import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "utils/validators/validators";
import s from './AddMessageForm.module.css'

export type FormMessageDataType = {
    message: string
}

interface AddMessageFormType {
    onSubmit: (values: FormMessageDataType) => void
}

const maxLength300 = maxLengthCreator(300)

export const AddMessageForm: React.FC<InjectedFormProps<FormMessageDataType, AddMessageFormType> & AddMessageFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field
                component={Textarea}
                validate={[required, maxLength300]}
                placeholder={'Enter your message...'}
                name={'message'}
            ></Field>
            <button>Send</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormMessageDataType, AddMessageFormType>({ form: 'dialogAddMessageForm' })(AddMessageForm)