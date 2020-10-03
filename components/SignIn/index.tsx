import React from 'react';
import NextLink from 'next/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from '../../hooks/styled';

const SignIn = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" gutterBottom align="center">
          Sign In
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                <NextLink href="/forget-password">Forgot password?</NextLink>
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2">
                <NextLink href="/register">
                  {"Don't have an account? Register"}
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
