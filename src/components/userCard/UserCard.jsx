import React, { useState } from 'react';
import './userCard.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { MdDelete, MdEdit } from 'react-icons/md';

const UserCard = (props) => {

  const [showDetails, setshowDetails] = useState(false);
  // const [isEditable, setIsEditable] = useState(false);

  const { name, openDelete, id, user, dob, pic, gender, country, desc } = props;

  const calculateAge = (dob) => {
    let today = new Date();
    let birthDate = new Date(dob);

    let age_today = today.getFullYear() - birthDate.getFullYear();

    return age_today;
  };

  const toggleDetails = () => {
    setshowDetails(!showDetails);
  };



  return (
    <div className='user_card'>
      <div className="user-info">

        <div className="user_profile-picture">
          <img className='profile-pic' src={pic} alt="" />
          <h2>{name}</h2>
        </div>

        <div onClick={toggleDetails} >
          {showDetails ? <FiChevronUp size='40px' cursor='pointer' /> : <FiChevronDown size='40px' cursor='pointer' />}
        </div>
      </div>

      {showDetails &&
        <div div className="user-extraInfo">
          <div className="user-moreInfo">
            <div className="user_details">
              <div className="user-age">
                <h3>Age</h3>
                <p>{calculateAge(dob)}</p>
              </div>
              <div className="user-gender">
                <h3>Gender</h3>
                <p>{gender}</p>
              </div>
              <div className="user-country">
                <h3>Country</h3>
                <p>{country}</p>
              </div>
            </div>
          </div>

          <div className="user-description">
            <h3>Description</h3>
            {desc}
          </div>

          <div className="icons">
            <MdDelete onClick={() => openDelete(user)} className='cursor' size='25px' />
            <MdEdit className='cursor'
              size='25px' />
          </div>
        </div>
      }
    </div>
  );
};

export default UserCard;