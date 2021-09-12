import React from 'react';
import { fetchWechatGroup } from '../../store/actions/c';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AdSense from 'react-adsense';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// 微信群展示
class WechatGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    static async fetch(store,params) {
        return await store.dispatch(fetchWechatGroup(params));
    }

    render() {
        const { data } = this.state;
        const html = data.map((item,index)=>(
            <Grid item xs={12} sm={3} key={index} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img style={{borderRadius:'10px'}} src={item.src} alt={item.alt} width={'80%'} title={item.alt} referrerPolicy="no-referrer"></img>
            </Grid>
        ))
        return (
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <AdSense.Google
                        client='ca-pub-8220679826017146'
                        slot='1681331575'
                        style={{ display: 'block' }}
                        format='auto'
                        responsive='true'
                    />
                    <Grid item xs={12}>
                        <Alert severity="info">
                            <ul style={{marginLeft:'20px'}}>
                                <li>1. 本站的微信群二维码的来源网络发布；</li>
                                <li>2. 本站微信群组质量多数高质量，不能保证所有群组；</li>
                                <li>3. 因为群组很快就可能会加满200人，所以大家可以隔几个小时来看一下，避免群组失效或是群组开验证；</li>
                                <li>4. 即便是满人的群，大家也可以尝试隔几个小时扫一下看看，有可能会群主踢人了然后不满200人的情况；</li>
                                <li>5. 微信群组各行各业都有，没有的话过一段时间在来看；</li>
                            </ul>
                        </Alert>
                    </Grid>
                    <Grid container spacing={3}>
                        {html}
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    data:state.WechatGroup.data,
    loading:state.WechatGroup.loading
});
const mapDispatchToProps = {
    fetchWechatGroup:fetchWechatGroup
}
// 校验数据
WechatGroup.propTypes = {
    data:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(WechatGroup);