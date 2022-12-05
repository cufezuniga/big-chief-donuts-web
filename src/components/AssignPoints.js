import React from 'react';
import CustomerSearch from './CustomerSearch';
import ToggleVisibility from './ToggleVisibility';

const AssignPoints = () => {
   return (
      <>
         <div style={{ width: '85%' }}>
            <ToggleVisibility>
               <CustomerSearch />
            </ToggleVisibility>
         </div>
      </>
   )
}

export default AssignPoints;