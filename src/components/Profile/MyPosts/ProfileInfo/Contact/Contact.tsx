import React from "react";

type ContactPropsType = {
	contactTitle: string
	contactValue: string
}

export const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
	return (
		<div>
			<div><b>{contactTitle}:</b> {contactValue}</div>
		</div>
	)
}