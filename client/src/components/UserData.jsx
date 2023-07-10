import React from 'react'

const UserData = ({userlist}) => {
  return (
    <>
        {
            userlist.map((currUser) => {
                const {id,username,email,status} = currUser;
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{status}</td>
                    </tr>
                )
            })
        }
    </>
  )
}

export default UserData