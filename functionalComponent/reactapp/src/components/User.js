import React, { useState, useEffect } from 'react'

function UsersData() {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h2>Users list:</h2>
      <ul style={{listStyle: "none"}}>
        {Users.map((item, i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
    </>
  )
}

export default UsersData;