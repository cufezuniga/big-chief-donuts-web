import { Button, MenuItem, Input, Select, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/Context';
import { isLoggedIn, validateRequired } from '../utils/FormUtils';

const CustomerSearch = () => {
   const { state, setState } = useContext(AppContext);
   const [values, setValues] = useState({ 'topic': '', 'search': '' });

   let userInfo = [
      { value: 'name', label: 'Name' },
      { value: 'uname', label: 'User name' },
      { value: 'uid', label: 'User Id' }
   ];

   let items = userInfo.map((item, i) => {
      return (
         <MenuItem key={i} value={item.value} size="small">{item.label}</MenuItem>
      )
   });

   const setTopic = (t) => {
      let vals = newValues();
      vals.topic = t;
      setValues(vals);
   }

   const setSearch = (s) => {
      let vals = newValues();
      vals.search = s;
      setValues(vals);
   }

   const handleSubmit = (e) => {
      e.preventDefault();

   }

   function newValues() {
      return {
         'topic': values.topic,
         'search': values.search
      };
   }

   return (
      <>
         {(isLoggedIn(state)
            ?
            <div className='form border-black'>
               <form onSubmit={e => handleSubmit(e)}>
                  <label className='row' style={{ paddingBottom: 25 }}>Search by user id, user name, first name, or last name:</label>
                  <Select
                     required
                     id="topic"
                     name="topic"
                     value={values.topic}
                     label="Topic"
                     onChange={(e) => { setTopic(e.target.value) }}
                     variant="outlined" size="small">
                     <MenuItem key="-1" value=""></MenuItem>
                     {items}
                  </Select>
                  <TextField id="search" onChange={(e) => { setSearch(e.target.value) }} required label={values.topic} size="small"
                     style={{ paddingRight: 10, paddingLeft: 10 }} />
                  <Button id="submit" type="submit" variant="contained" size="small">Search</Button>
               </form>
            </div>
            : <div />)}
      </>
   );
}

export default CustomerSearch;