import React from 'react';
import { fetchWechatGroup } from '../../store/actions/c';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiAlert from '@material-ui/lab/Alert';

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
        const { data,loading } = this.state;
        const html = data.map((item,index)=>(
                <div key={index} style={{width:'calc(100% / 4 - 20px)',margin:'10px'}}>
                    <img src={item.src} alt={item.alt} width={'100%'} title={item.alt} referrerPolicy="no-referrer"></img>
                </div>
        ))
        return (
            <div className="bili">
                <div className="bilititle">微信群采集</div>
                <Alert severity="info" style={{marginTop:'20px'}}>
                    <ul style={{marginLeft:'20px'}}>
                        <li>1. 本站的微信群二维码是采集而来的；</li>
                        <li>2. 每天可能会有 10 个以上新群采集进来；</li>
                        <li>3. 因为群很快就可能会加满100人，所以大家可以隔几个小时来看一下；</li>
                    </ul>
                </Alert>
                <div style={{display:'flex',alignItems:'center',flexWrap:'wrap'}}>
                    {html}
                </div>
            </div>
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