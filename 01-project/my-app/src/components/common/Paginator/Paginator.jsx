import React from 'react';
import styles from './Paginator.module.css'


const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map(p => {
                    return <span onClick={() => {
                        onPageChanged(p)
                    }} key={p} className={currentPage === p ? styles.selectedPage : ''}>{p}</span>
                })
            }
        </div>
    )
}

export default Paginator;