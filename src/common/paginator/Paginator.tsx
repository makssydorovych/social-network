import React, {useState} from "react";
import styles from "./Paginator.module.css"
import cn from "classnames"


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({
                                                   totalUsersCount,
                                                   pageSize,
                                                   currentPage,
                                                   onPageChanged,
                                                   portionSize = 10
                                               }) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages: number[] = []
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div className={cn(styles.paginator)}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
        {
            pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                }))}
        {portionCount > portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT </button>
        }
    </div>
}