import pageNotFound from "assets/images/pageNotFound.png";
import React from "react";
import s from './PageNotFound.module.css'

export const PageNotFound = () => {
  return (
		<div className={s.pageNotFound}>
			<img src={pageNotFound} alt="Page Not Found"/>
		</div>
	)
}