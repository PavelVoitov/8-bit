import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfilePropsType, setUserProfile} from "../../redux/profile-reducer";
import {ReducerPropsType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";



type MapStateToPropsType = {
    profile: ProfilePropsType
}

export type ProfileContainerPropsType = MapStateToPropsType & {
    setUserProfile: (profile: ProfilePropsType) => void
    getUserProfile: (userId: string) => void
}

type PathParamsProps = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsProps> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (<>
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
        </>
        )
    }
}



let mapStateToProps = (state: ReducerPropsType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withRouter,
    )(ProfileContainer)