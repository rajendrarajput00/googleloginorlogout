import React from 'react'
import GoogleLogin from 'react-google-login';
import { selectSignedIn,setSignedIn,setUserData } from '../../features/userSlice';
import {useSelector,useDispatch} from 'react-redux';
///import NavBar from '../component/NavBar'


function HomePage() {
   const dispatch = useDispatch();
    const isSignedIn = useSelector(selectSignedIn);
    const login = (response) =>{
        console.log('respones',response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj))
    }
    return (
        <div>
            { !isSignedIn && (
                <>
                    <div>
                        <p>A Reader Favirout Place</p>
                    </div>
                    <GoogleLogin
                        clientId='725759536945-ku4fv6k2ksus98drecuh43eg7d5jr2lm.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login_button"
                            >
                                Login with Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}

                    ></GoogleLogin>
                </>
            ) 
            }
        </div>
    )
}

export default HomePage
