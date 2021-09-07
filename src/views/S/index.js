import React from 'react';
import { createSUrl } from '../../api/index';
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
            data:{},
            loading:true,
        }
    }
    async onClick() {
        this.setState({loading:true});
        let url = document.getElementById('url');
        if (url.value.length === 0) {
            return alert('请输入链接，再点确认');
        }
        const params = {
            original_url:url.value
        };
        let res = await createSUrl(params);
        console.log(res)
        this.setState({data:res.data,loading:false})
    }

    fuzhi(url) {
        var oInput = document.createElement("input");
        oInput.value = url;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = "oInput";
        oInput.style.display = "none";
        alert("复制成功");
    }


    componentDidMount() {
        // document.get
    }

    render() {
        return (
            <div style={styles.bg}>
                <div>
                    <Alert severity="info">这是一款可现在生成短链(短网址)的工具，可根据用户提交的网址生成相对应的短连接地址，做到有效的隐藏真实地址，方便实用，感兴趣的朋友快来试试吧！</Alert>
                    <h1 style={{margin:'30px 0'}}>短链(短网址)在线生成工具</h1>
                    <Input style={{width:'35vw',color:'#fff'}} id="url" placeholder="请输入链接" inputProps={{ 'aria-label': 'description' }} />
                    <div style={{margin:'30px 0'}}>
                        <Button variant="contained" color="primary" onClick={this.onClick.bind(this)}>确认</Button>
                    </div>
                    {!this.state.loading ? 
                    <>
                        <div style={{color:'#fff'}}>短链接: {this.state.data.short_url} <Button variant="contained" color="primary" onClick={this.fuzhi.bind(this,this.state.data.short_url)}>复制</Button></div>
                        <div style={{color:'#fff',width:'52vw',overflowX:'auto',overflowY:'hidden'}}>原链接: {this.state.data.original_url}</div>
                    </> : <></>}
                    
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
    }
}
export default Instagram;