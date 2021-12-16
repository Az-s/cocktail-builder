import React from 'react';
import {useDispatch} from "react-redux";
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import {Button} from "@mui/material";
import {FacebookIcon} from '@mui/icons-material';
// import {facebookLogin} from "../../../store/actions/usersActions";
import {facebookAppId} from "../../../config";

const FaceBookLogin = () => {
    const dispatch = useDispatch();

    const responseFacebook = response => {
        console.log(response);
        //   dispatch(facebookLogin(response));
    };

    return (
        <FacebookLoginButton
            appId={facebookAppId}
            fields="name,email,picture"
            render={props => (
                <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    startIcon={<FacebookIcon />}
                    onClick={props.onClick}
                >
                    Login with facebook
                </Button>
            )}
            callback={responseFacebook} />
    )
}

export default FaceBookLogin;
