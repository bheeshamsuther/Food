import React from 'react'
import Login from '../Login/login'
import Register from '../Register/register'
import User from '../User/user'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                {/* <Login/> */}
                {/* <Register/> */}
                <User/>
            </div>
        )
    }
}

export default Home;