import React from 'react';
import { getIns } from '../../api/index';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

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
        var img = new Image()
        img.onload = function() {
            var canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            var ctx = canvas.getContext('2d')
            // 将img中的内容画到画布上
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            // 将画布内容转换为base64
            var base64 = canvas.toDataURL()
            // 创建a链接
            var a = document.createElement('a')
            a.href = base64
            a.download = new Date().getTime();
            // 触发a链接点击事件，浏览器开始下载文件
            a.click();
        }
        img.src = this.state.img
        // 必须设置，否则canvas中的内容无法转换为base64
        img.setAttribute('crossOrigin', 'anonymous')
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
                    <div style={{margin:'30px 0'}}>
                        <Button variant="contained" color="primary" onClick={this.onClick.bind(this)}>确认</Button>
                        <Button style={{marginLeft:'20px'}} variant="contained" color="primary" onClick={this.download.bind(this)} disabled={this.state.img.length === 0 || this.state.loading}>下载</Button>
                    </div>
                    
                </div>
                <div style={{height:'calc(100% - 40px)',overflowY: 'scroll',width:'calc(80% - 40px)',margin:'20px',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',}}>
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