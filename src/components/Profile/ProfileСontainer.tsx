import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfilePropsType, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {ReducerPropsType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";



type MapStateToPropsType = {
    profile: ProfilePropsType
    status: string
    authorizedUserId: string
    isAuth: boolean
}

export type ProfileContainerPropsType = MapStateToPropsType & {
    setUserProfile: (profile: ProfilePropsType) => void
    getUserProfile: (userId: string) => void
    getStatus: (status: string) => void
    updateStatus: (status: string) => void
}

type PathParamsProps = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsProps> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (<>
                <div>
                    <Profile {...this.props}
                             profile={this.props.profile}
                             status={this.props.status}
                             updateStatus={this.props.updateStatus}
                    />
                </div>
        </>
        )
    }
}



let mapStateToProps = (state: ReducerPropsType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,
        {
            setUserProfile,
            getUserProfile,
            getStatus,
            updateStatus,
        }),
    withRouter,
    )(ProfileContainer)