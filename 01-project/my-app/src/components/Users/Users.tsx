import React, {FC} from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    currentPage: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}

const Users: FC<PropsType> = ({currentPage, totalItemsCount, onPageChanged, pageSize, users, ...props}) => {

    return (
        <div>

            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalItemsCount}
                pageSize={pageSize}
            />
            <div>
                {
                    users.map(u =>
                        <User user={u}
                              followingInProgress={props.followingInProgress}
                              unfollow={props.unfollow}
                              follow={props.follow}
                              key={u.id}/>
                    )
                }
            </div>

        </div>
    )
}

export default Users;