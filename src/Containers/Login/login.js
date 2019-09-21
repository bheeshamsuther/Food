import React from "react"
import './login.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';




// const useStyles = makeStyles(theme => ({

// textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
//   dense: {
//     marginTop: theme.spacing(2),
//   },
// }))
class Login extends React.Component {
    
    render(){
        return(
            <div>
                <Grid container justify="center">
                <Grid item xs={11} sm={10} md={6} lg={4}>
                <Paper >
            <h1>Login</h1>
            <TextField
        id="outlined-dense"
        label="Email"
        type="email"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <br/>
         <TextField
        id="outlined-dense"
        label="Password"
        type="password"
        className='password'
        margin="dense"
        variant="outlined"
      />
      <br/>

      <Button variant="contained" color="primary" className="loginBtn" style={{backgroundColor:'darkcyan'}} >
        Login
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
      </Button>
      <p className="font-small grey-text d-flex justify-content-end">
                Not a member? &nbsp;
                <span className="blue-text ml-1">
                        Sign Up
                </span>
              </p>
      <br/>
      <br/>
      </Paper>
      </Grid>
      </Grid>
      </div>
        )
    }
}

export default Login;