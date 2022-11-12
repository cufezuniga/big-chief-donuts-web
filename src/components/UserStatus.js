import React, { useContext } from 'react';
import { AppContext, clearState } from '../context/Context';
import LoginForm from './LoginForm';
import { isLoggedIn } from '../utils/FormUtils';
import '../App.css';

const UserStatus = () => {
    const { state, setState } = useContext(AppContext);

    console.log("token: " + state.token );

    return (
        <>
            {(isLoggedIn(state) 
            ? 
                <div className='form' style={{backgroundColor: '#66FF66', width: '15%'}}>
                    <div >You are logged in as:</div>
                    <div style={{ fontWeight: 'normal' }}>
                        {state.name}
                    </div>
                    <br/>
                    <button onClick={() => setState(clearState)} >logout</button>
                </div>
            : <LoginForm />)}
        </>
    )
}

export default UserStatus;