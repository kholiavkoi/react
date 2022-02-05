import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
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
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props
        requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize, requestUsers} = this.props
        requestUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <>  {this.props.isFetching ?
                <Preloader/>
                :
                null
            }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
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

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        requestUsers
    }),
)(UsersContainer)