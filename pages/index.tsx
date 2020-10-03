import Link from 'next/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import useStyles from '../hooks/styled';

const IndexPage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            ChatBox
          </Typography>
          <Button color="inherit">
            <Link href="/register">Register</Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-in">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.banner}>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Modern AI Chat Box
        </Typography>
      </Container>
    </>
  );
};

export default IndexPage;
