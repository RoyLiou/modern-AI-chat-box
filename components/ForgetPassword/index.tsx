import React from 'react';
import NextLink from 'next/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from '../../hooks/styled';

const SignIn = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" gutterBottom align="center">
          Forget Password ?
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <Typography variant="body1">
            Please enter the email account you first used to register. We will
            send a verification email to your inbox.
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link variant="body2">
                <NextLink href="/sign-in">
                  Already have an account? Sign in
                </NextLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
