import { TableCell, TableRow, TableBody, TextField, Select } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/Context';
import { isLoggedIn } from '../utils/FormUtils';

const CustomerSearch = () => {
   const { state, setState } = useContext(AppContext);
   const [searchby, setSearchby] = useState();
   const [search, setSearch] = useState();

   let userInfo = [
      { value: 'name', label: 'Name' },
      { value: 'username', label: 'User name' },
      { value: 'uid', label: 'User Id' }
   ];

   let items = userInfo.map((item, i) => {
      return (
         <option key={i} value={item.id}>{item.label}</option>
      )
   });

   return (
      <>
         {(isLoggedIn(state)
            ?
            <div className="form border-black">Search by user id, user name, first name, or last name:
               <TableBody>
                  <TableRow>
                     <TableCell >
                        <label htmlFor="search">Search by: </label>
                     </TableCell>
                     <TableCell>
                        <Select id="searchb" label="search by" onChange={e => setSearchby(e.target.value)}>
                           {items}
                        </Select>
                     </TableCell>
                     <TableCell>
                        <TextField id="searchc" variant="standard" className='' />
                     </TableCell>
                  </TableRow>
               </TableBody>
            </div>
            : <div />)}
      </>
   );
}

export default CustomerSearch;