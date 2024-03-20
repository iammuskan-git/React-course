import React from 'react';
import { useParams } from 'react-router-dom';

function User() {

    const { userId } = useParams();
  return (
    <div className='bg-gray-800 text-white text-center h-24 pt-9'>
      UserList: {userId}
    </div>
  )
}

export default User
