import React, { useState } from 'react'

const signup = () => {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  return (
    <div>

      <h1>Create a user</h1>
      <form>
        <input type="text" placeholder='name' value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />

        <button type='submit'>Create a User</button>
      </form>
    </div>
  )
}

export default signup