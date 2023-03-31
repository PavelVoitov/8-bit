import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import s from './AddPostForm.module.css'

export type FormPostDataType = {
    post: string
}

interface AddPostFormType {
    onSubmit: (values: FormPostDataType) => void
}

const maxLength100 = maxLengthCreator(100)

export const AddPostForm: React.FC<InjectedFormProps<FormPostDataType, AddPostFormType> & AddPostFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postForm}>
            <div>
                <Field
                    component={Textarea}
                    placeholder={'Enter your post...'}
                    name={'post'}
                    validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<FormPostDataType, AddPostFormType>({form: 'postAddPostForm'})(AddPostForm)