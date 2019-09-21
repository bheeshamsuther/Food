import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'



class Register extends React.Component {
    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={11} sm={10} md={6} lg={4}>
                        <Paper>
                            <br/>
                        <Button variant="contained" color="primary" className="loginBtn" style={{ backgroundColor: 'darkcyan' }} >
                            Resturant
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                        </Button>
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" className="loginBtn" style={{ backgroundColor: 'darkcyan' }} >
                            User
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                        </Button>
                        <br/>
                        <br/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Register