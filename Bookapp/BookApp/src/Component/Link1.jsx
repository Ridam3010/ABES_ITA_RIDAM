import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';

function Login(){
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
function Home(){
    return <h2>Home Page</h2>
}

function About(){
    return <h2>About Page</h2>
}

function Link1() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  )
}


export default Link1