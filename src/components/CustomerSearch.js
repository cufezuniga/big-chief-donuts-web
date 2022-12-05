import { TableCell, TableRow, TableBody } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/Context';
import { isLoggedIn } from '../utils/FormUtils';

const CustomerSearch = () => {
   const { state, setState } = useContext(AppContext);
   const [search, setSearch] = useState();

   let userInfo = [
      { id: 'name', name: 'Name' },
      { id: 'username', name: 'User name' },
      { id: 'uid', name: 'User Id' }
   ];

   let items = userInfo.map((item, i) => {
      return (
         <option key={i} value={item.id}>{item.name}</option>
      )
   });

   return (
      <>
         {(isLoggedIn(state)
            ?
            <div className='form border-black'>Search by user id, user name, first name, or last name:
               <TableBody>
                  <TableRow>
                     <TableCell >
                        <label htmlFor='search'>Search by: </label>
                     </TableCell>
                     <TableCell>
                        <select id="search" onChange={setSearch}>
                           {items}
                        </select>
                     </TableCell>
                     <TableCell>

                     </TableCell>
                  </TableRow>
               </TableBody>
            </div>
            : <div />)}
      </>
   );
}

export default CustomerSearch;