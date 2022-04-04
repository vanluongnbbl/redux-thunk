import React, {useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, addUser, deleteUser, editUser } from '../redux/user/userActions'

function UserContainer() {
    const [userName, setUserName] = useState('')
    const [userEdit, setUserEdit] = useState()
    const [indexEditUser, setIndexEditUser] = useState()
    const users = useSelector(state => state.user.users)
    const loading = useSelector(state => state.user.loading)
    const inputRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const handleSubmit = () => {
        if(indexEditUser) {
            let newUser = {
                ...userEdit,
                name: userName
            }
            dispatch(editUser(newUser, indexEditUser))
            setIndexEditUser()
        } else {
            let newUser = {
                id: Math.trunc(Math.random() * 1000000),
                name: userName,
            }
            dispatch(addUser(newUser))
        }
        setUserName('')
        inputRef.current.focus()
    }

    const handleEdit = (user, index) => {
        setIndexEditUser(index)
        setUserEdit({...user})
        setUserName(user.name)
    }

  return (
    loading ? <h1>Loading</h1> :
    <div>
        <h1>List Users</h1>
        <input 
            placeholder="Enter a user..."

            ref={inputRef}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>{indexEditUser ? 'EDIT' : 'ADD'}</button>
        <ol>
            {users.map((user, index) => (
                <li key={user.id}>
                    {user.name} - 
                    {!indexEditUser && <button onClick={() => dispatch(deleteUser(index))}>DELETE</button>}
                    <button onClick={() => handleEdit(user, index)}>EDIT</button>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default UserContainer