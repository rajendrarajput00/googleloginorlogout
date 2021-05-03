import React from 'react'
import {selectSignedIn,setSignedIn,setUserData} from '../../features/userSlice'
import {useSelector,useDispatch} from 'react-redux'
import { GoogleLogout } from 'react-google-login';
function NavBar() {
     const isSignedIn = useSelector(selectSignedIn);
      const dispatch = useDispatch();
     const logout = () =>{
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
     }
    return (
        <div>
            { isSignedIn &&
                <GoogleLogout
                clientId='725759536945-ku4fv6k2ksus98drecuh43eg7d5jr2lm.apps.googleusercontent.com'
                render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="logout_button"
                    >
                        Logout
                    </button>
                )}
                onLogoutSuccess={logout}
                //onFailure={login}
               // isSignedIn={true}
                cookiePolicy={'single_host_origin'}

            ></GoogleLogout>
                
            }
        </div>
    )
}
export default NavBar
