import React, { useContext } from 'react';
import { AppContext } from '../context/Context';
import { isLoggedIn } from '../utils/FormUtils';

const CustomerSearch = () => {
    const { state, setState } = useContext(AppContext);

    return (
        <>
            {(isLoggedIn(state) 
            ? 
                <div className='form'>
                    <form >
                <label htmlFor='id' className='row'>user id: </label>
                <input type="text" id="id" style={{ margin: 2 }}/>
                <label htmlFor="userName" className='row'>User name: </label>
                <input type="password" id="password" style={{ margin: 2 }}/>
                <input type="submit" value="Login"  className='row'  style={{ margin: 3 }}/> 
            </form>
                </div>
            : <div />)}
        </>
    );
}

export default CustomerSearch;