import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalItemsCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalItemsCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
    pageTitle: string
}


type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props
        requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, requestUsers} = this.props
        requestUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                <h2>{this.props.pageTitle}</h2>
                {this.props.isFetching ?
                    <Preloader/>
                    :
                    null
                }
                <Users
                    totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                />

            </>
        )


    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.Component>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        requestUsers
    }),
)(UsersContainer)