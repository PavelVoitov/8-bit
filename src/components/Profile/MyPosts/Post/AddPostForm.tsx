import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type FormPostDataType = {
    post: string
}

interface AddPostFormType {
    onSubmit: (values: FormPostDataType) => void
}

export const AddPostForm: React.FC<InjectedFormProps<FormPostDataType, AddPostFormType> & AddPostFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    placeholder={'Enter your post...'}
                    name={'post'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<FormPostDataType, AddPostFormType>({form: 'postAddPostForm'})(AddPostForm)