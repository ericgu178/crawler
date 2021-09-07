import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" style={{color:"yellow"}} align="center">
      {'Copyright © '}
      <Link style={{color:"#fff"}} href="https://ericgu178.com/">
        EricGU178个人博客 All Rights Reserved.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer(props) {
  const { description, title } = props;

  return (
    <footer style={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" style={{color:"#fff"}} component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

const classes = {
    footer: {
        marginTop:"10px",
        padding: "48px 0px",
        backgroundColor: "#424242",
        color:'#fff'
    }
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};