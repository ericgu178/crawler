import React from 'react';
import { getIns } from '../../api/index';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import AdSense from 'react-adsense';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// 哔哩哔哩收藏排行
class Instagram extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            img:'',
            loading:false,
        }
    }
    async onClick() {
        this.setState({loading:true});
        let url = document.getElementById('url');
        if (url.value.length === 0) {
            return alert('请输入链接，再点确认');
        }
        const params = {
            url:url.value
        };
        let res = await getIns(params);
        this.setState({img:res.data,loading:false})
    }

    // 下载图片
    download() {
        this.state.img.forEach(v => {
            var x=new XMLHttpRequest();
            x.open("GET", v, true);
            x.responseType = 'blob';
            x.onload=function(e){
                var url = window.URL.createObjectURL(x.response)
                var a = document.createElement('a');
                a.href = url
                a.download = ''
                a.click()
            }
            x.send();
        })
    }

    componentDidMount() {
        // document.get
    }

    render() {
        return (
            <div style={styles.bg}>
                <div style={styles.div2}>
                    <div style={{width:'100%',margin:'30px 0'}}>
                        <AdSense.Google
                            client='ca-pub-8220679826017146'
                            slot='8640974674'
                            style={{ width: '100%', height: 60, float: 'left' }}
                            format=''
                            responsive='true'
                        />
                    </div>
                    <Alert severity="info">输入instagram帖子链接即可点击确认后拖抓图片下载</Alert>
                    <h1 style={{margin:'30px 0'}}>instagram 图片下载</h1>
                    <Input style={{width:'35vw',color:'#fff'}} id="url" placeholder="请输入链接" inputProps={{ 'aria-label': 'description' }} />
                    <div style={{margin:'30px 0'}}>
                        <Button variant="contained" color="primary" onClick={this.onClick.bind(this)}>确认</Button>
                        <Button style={{marginLeft:'20px'}} variant="contained" color="primary" onClick={this.download.bind(this)} disabled={this.state.img.length === 0 || this.state.loading}>下载</Button>
                    </div>
                </div>
                <div style={{maxHeight:'28.5vw',overflowY: 'auto',width:'calc(80% - 40px)',margin:'20px',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',}}>
                    { this.state.loading === true ? <CircularProgress /> : 
                    this.state.img.length === 0 ? <></>  : 
                        this.state.img.map(v=>{
                            return <img style={{width:'calc(100%/2 - 10px )',maxHeight:'100vw',marginLeft:'10px',marginTop:'10px'}} src={v} alt={v}></img>
                        })
                    }
                </div>
            </div>
        )
    }
}

const styles = {
    bg: {
        background:'transparent',
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