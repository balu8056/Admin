import React from "react";
import GoogleButton from "react-google-button";
import GoogleLogin from 'react-google-login';
import { Redirect } from "react-router-dom";



const Login = (props) => {
  const clientId =
    "1001737473162-qvj0eelcku68uqjf7lne1mgj50tbgqa7.apps.googleusercontent.com";
  const secret = "99NGaGh-rzET_HNBhNHXop10";

  React.useEffect((props) => {
    console.log(props)
  }, [])

  const route = () => {
    props.history.push('/admin/data')
  }

  return (
    <div className="login">
      <div className="jumbotron pt-3 text-center" style={{ height: "50px" }}>
        <h3 className="">Admin Page</h3>
      </div>
      <div className="form">
        <img
          className="mb-5"
          src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3"
          alt=""
        />
        <GoogleLogin
      clientId={clientId}
      buttonText="Login with google"
      onSuccess={props.response}
      onFailure={props.response}
      cookiePolicy={'single_host_origin'}
    />

        {/* <GoogleButton onClick={googleClick} className="m-auto" /> */}
      </div>
    </div>
  );
};


export default Login;
