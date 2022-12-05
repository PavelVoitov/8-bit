import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfilePropsType, setUserProfile} from "../../redux/profile-reducer";
import {ReducerPropsType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";



type MapStateToPropsType = {
    profile: ProfilePropsType
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to='/login'/>
        return (<>
                {/*{this.props.profile === null ? <Preloader/> : ''}*/}
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
        </>
        )
    }
}

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
    getUserProfile
})(WithUrlDataContainerComponent)