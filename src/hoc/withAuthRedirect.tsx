import React, {ComponentType} from "react";
import {ReducerPropsType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


type mapStateToPropsForRedirect = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: ReducerPropsType): mapStateToPropsForRedirect => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsForRedirect) => {
    let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>
        return  <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}