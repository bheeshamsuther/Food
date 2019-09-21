import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import './user.css'

class User extends React.Component {
    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={11} sm={10} md={6} lg={4}>
                        <Paper>
                            <br/>
                        <TextField
        id="outlined-dense"
        label="Full Name"
        type="text"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Email"
        type="email"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Gender"
        type="text"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Age"
        type="date"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Country"
        type="text"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="City"
        type="text"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Password"
        type="password"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Re-Password"
        type="password"
        className='email'
        margin="dense"
        variant="outlined"
      />
      <Button variant="contained" color="primary" className="loginBtn" style={{backgroundColor:'darkcyan'}} >
        Signup
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
      </Button>
      <p className="font-small grey-text d-flex justify-content-end">
      Already have Account? &nbsp;
                <span className="blue-text ml-1">
                        Login
                </span>
              </p>
              <br/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default User