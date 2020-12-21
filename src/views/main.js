import React from 'react'
import Router from '../router';
import { withRouter } from 'react-router-dom';
import './main.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ImageAspectRatioIcon from '@material-ui/icons/ImageAspectRatio';
import InstagramIcon from '@material-ui/icons/Instagram';
import GroupIcon from '@material-ui/icons/Group';
class Main extends React.Component {
    state = {
        value:'b'
    }
    componentDidMount() {
        let url = this.props.history.location.pathname.substr(1,this.props.history.location.pathname.length);
        this.setState({value:url})
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <Router></Router>
                <BottomNavigation
                    style={{position:'fixed',bottom:0,width:'100%',background:'rgba(0,0,0,.3)'}}
                    value={this.state.value}
                    onChange={(event, newValue) => {
                        window.location.href = '/' + newValue
                        this.setState({value:newValue})
                    }}
                    showLabels
                >
                    <BottomNavigationAction style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',fontSize:'18px',fontWeight:'700',color:'#000'}} label="instagram" value="instagram" icon={<InstagramIcon />} />
                    <BottomNavigationAction style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',fontSize:'18px',fontWeight:'700',color:'#000'}} label="哔哩哔哩" value="b" icon={<ImageAspectRatioIcon />} />
                    <BottomNavigationAction style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',fontSize:'18px',fontWeight:'700',color:'#000'}} label="微信群" value="wechat" icon={<GroupIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}

export default withRouter(Main);