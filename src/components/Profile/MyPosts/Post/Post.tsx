import React from "react";
import c from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

export class Post extends React.Component<PostPropsType> {
    render() {
        return (
            <div className={c.item}>
                <div>
                    <img
                        src="https://ih1.redbubble.net/image.455464050.9428/flat,750x,075,f-pad,750x1000,f8f8f8.u10.jpg"
                        alt="user"/>
                    {this.props.message}
                </div>
                <div>
                    <span>{this.props.likesCount} like</span>
                </div>
            </div>

        )
    }
}