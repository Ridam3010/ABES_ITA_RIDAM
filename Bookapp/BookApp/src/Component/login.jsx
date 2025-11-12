import React from 'react'

export const login = () => {
  return (
    <div>
        <h2>Login Page</h2>
        <form>
            <label>Username:</label>
            <input type="text" name="username"/>
            <label>Password:</label>
            <input type="password" name="password"/>
            <button>Login</button>
        </form>
    </div>
  )
}
