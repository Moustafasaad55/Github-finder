import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types'

const Users = (props) => {
 
        return (
            props.loading ? (<Spinner />) : (<div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridGap: '1rem' }}>
            {props.users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>)
            
        )
    }
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users
