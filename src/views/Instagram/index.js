import React from 'react';
import { getIns } from '../../api/index';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// 哔哩哔哩收藏排行
class Instagram extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            img:''
        }
    }
    async onClick() {
        let url = document.getElementById('url');
        if (url.value.length === 0) {
            return alert('请输入链接，再点确认');
        }
        const params = {
            url:url.value
        };
        let res = await getIns(params);
        this.setState({img:res.data})
    }

    componentDidMount() {
        // document.get
    }

    render() {
        return (
            <div style={styles.bg}>
                <div style={styles.div2}>
                    <Alert severity="info">输入instagram帖子链接即可点击确认后拖抓图片下载</Alert>
                    <h1 style={{margin:'30px 0',color:'#000'}}>instagram 图片下载</h1>
                    <Input style={{width:'35vw'}} id="url" placeholder="请输入链接" inputProps={{ 'aria-label': 'description' }} />
                    <Button style={{margin:'30px 0'}} variant="contained" color="primary" onClick={this.onClick.bind(this)}>
                        确认
                    </Button>
                    {this.state.img.length === 0 ? <></> : <img src={this.state.img} style={{width:'400px',height:'600px'}} alt="123"></img>}
                    
                </div>
                
            </div>
        )
    }
}

const styles = {
    bg: {
        background:'#fff',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    div2: {
        height:'400px',
        width:'80%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    }
}
export default Instagram;