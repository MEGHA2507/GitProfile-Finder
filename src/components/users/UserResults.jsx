import React, { useContext, useEffect } from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GitContext from '../../context/githubContext'

function UserResults() {
    const {users, loading, fetchUsers} = useContext(GitContext);
   
    useEffect(() => {
        fetchUsers()
    }, []);
   
    if(!loading){
        return (
            <div className='grid grid-cols-1 gap8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
               
                {
                    users.map((user) => (
                     
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </div>
          )
    }else{
        return <Spinner />
    }
  
}

export default UserResults