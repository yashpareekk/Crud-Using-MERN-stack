import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users,setUsers]=useState([])
    const [abc,setAbc]=useState(0)

    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(result=>setUsers(result.data))
      .catch(err=>console.error(err))
    },[abc])

    const handelDelete=(id)=>{
      axios.delete('http://localhost:3001/deleteUser/'+id)
      .then(res=>{
        console.log(res)
        setUsers(users.filter(user => user._id !== id));
    })
      .catch(err=>console.error(err))
     
    }
    const details=[
      "Name","Email","Age","Action","Delete"
    ]
 
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/createUser" className='btn btn-success'>Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                  {details.map((item,index)=>(<th key={index}>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                       return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                            <Link to={`/updateUser/${user._id}`} className='btn btn-success'>Update</Link>
                              
                            </td>
                            <td>
                              <button className='btn btn-danger' onClick={(e)=>handelDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        {/* <a href="/" style={{textDecoration:none}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt est eius nam, cum corporis laboriosam molestiae repellat voluptatem dolorum itaque facere sequi reprehenderit odit labore aperiam dolores dignissimos debitis asperiores illo. Asperiores, vitae.</a> */}
      </div>
    </div>
  )
}

export default Users


