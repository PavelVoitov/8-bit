import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePropsType, setUserProfile} from "../../redux/profile-reducer";
import {ReducerPropsType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapStateToPropsType = {
    profile: ProfilePropsType
}

export type ProfileContainerPropsType = MapStateToPropsType & {
    setUserProfile: (profile: ProfilePropsType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (<>
                {this.props.profile === null ? <Preloader/> : ''}
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
        </>
        )
    }
}

const mapStateToProps = (state: ReducerPropsType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent)