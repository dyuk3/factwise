import React, { useState } from 'react';
import './listview.css';
import data from '../../data/celebrities.json';
import UserCard from '../userCard/UserCard';
import ConfirmBox from '../confirmBox/ConfirmBox';

const Listview = () => {

  const [users, setUsers] = useState(data);
  const [open, setOpen] = useState(false);
  const [deleteData, setDeleteData] = useState({});

  const deleteUser = (id) => {

    const updatedUser = users.filter((user) => {
      return user.id !== deleteData?.id;
    });

    console.log(deleteData);

    setUsers(updatedUser);

    setOpen(false);

  };

  const openDelete = (data) => {
    setOpen(true);
    setDeleteData(data);
  };
  return (
    <div className='list_view'>
      <h1 style={{ marginBottom: '10px' }}>List View</h1>
      <input className='user-search' type="text" placeholder='Search user' />
      {users.map((celeb) => (
        <UserCard name={celeb.first + ' ' + celeb.last} dob={celeb.dob} pic={celeb.picture} openDelete={openDelete} user={celeb}
          deleteUser={deleteUser} users={users} key={celeb.id} id={celeb.id} gender={celeb.gender} country={celeb.country} desc={celeb.description} />
      ))}

      <ConfirmBox open={open} closeDialog={() => setOpen(false)}
        user={deleteData?.first}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default Listview; 