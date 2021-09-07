import React from 'react'
import Router from '../router';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Common/header';
import Footer from './Common/footer';
import './main.css';

class Main extends React.Component {
    state = {
        value:'b'
    }
    componentDidMount() {
        let url = this.props.history.location.pathname.substr(1,this.props.history.location.pathname.length);
        this.setState({value:url})
    }
    render() {
        const sections = [
            { title: '短链接生成', url: '/shorturl' },
            // { title: 'instagram图片下载', url: '/instagram' },
            { title: '哔哩哔哩', url: '/b' },
            { title: '微信群采集', url: '/wechat' },
          ];
          const useStyles = makeStyles((theme) => ({
            mainGrid: {
              marginTop: theme.spacing(3),
            },
          }));
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                  <Header title="自用工具站" sections={sections} />
                  <main style={{margin:"20px auto 40px"}}>
                    <Grid container className={useStyles.mainGrid}>
                        <Router></Router>
                    </Grid>
                  </main>
                </Container>
                <Footer title="Living in the moment" description="此站属于工具类站" />
            </React.Fragment>
        )
    }
}

export default withRouter(Main);