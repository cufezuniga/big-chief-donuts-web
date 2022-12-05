import React from 'react';
import {
   BrowserRouter as Router,
   Link
} from "react-router-dom";
import ApplicationManager from './ApplicationManager';

const Menu = () => {
   return (
      <>
         <div className='menu full-height'>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/assign">Assign Reward Points</Link></li>
               <li><Link to="/redeem">Redeem Reward Points</Link></li>
               <li>Customer Summary</li>
            </ul>
         </div>
         <ApplicationManager />
      </>
   );
}

export default Menu;