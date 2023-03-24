import React from "react";
import {Pagination} from "@mui/material";

type PaginatorPropsType = {
	totalItemsCount: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
	currentPage: number
}

export const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage}: PaginatorPropsType) => {
	const pagesCount = Math.ceil(totalItemsCount / pageSize)

	return <Pagination
		count={pagesCount}
		onChange={(e, p) => onPageChanged(p)}
		variant="outlined"
		shape="rounded"
		color="primary"
		page={currentPage}
		size={"small"}
	/>

}