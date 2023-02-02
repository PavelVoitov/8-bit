import React from "react";
import {Pagination} from "@mui/material";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, onPageChanged}: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    // const pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //    pages.push(i);
    // }
    return <Pagination count={pagesCount} onChange={(e, p) => onPageChanged(p)}
                        variant="outlined" shape="rounded" color="primary"/>

}