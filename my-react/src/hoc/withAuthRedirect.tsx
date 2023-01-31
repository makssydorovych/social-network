import React from 'react';
import {Redirect} from "react-router-dom";

const mapStatetoProps = (state)=>({
    isAuth: state.auth.isAuth
})

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component{
      render(){
          if(!this.props.isAuth)return<Redirect to={"/login"}/>
          return <Component{...this.props/>
      }
  }
};

export default withAuthRedirect;