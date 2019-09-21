import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Home,Login,Signup,Shop} from './../../Containers'

export default class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}