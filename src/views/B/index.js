import React from 'react';
import './index.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StarsIcon from '@material-ui/icons/Stars';
import CommentIcon from '@material-ui/icons/Comment';
import Tooltip from '@material-ui/core/Tooltip';
import { fetchBFav } from '../../store/actions/b';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// 哔哩哔哩收藏排行
class B extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    static async fetch(store,params) {
        return await store.dispatch(fetchBFav(params));
    }

    render() {
        const { data,loading } = this.state;
        const html = data.map((item,index)=>(
                <div className="bblock" key={index}>
                    <div className="left">
                        <a href={`https://bilibili.com/av${item.aid}`}>
                            <div className="leftPos">{item.title}</div>
                            <div className="leftBiao">{index+1}</div>
                            <img draggable={false} src={`https:${item.pic}`} referrerPolicy="no-referrer" alt={item.title}/>
                        </a>
                    </div>
                    <div className="right">
                        <h3><a href={`https://bilibili.com/av${item.aid}`}>{item.title}</a></h3>
                        <h3 style={{marginTop:'20px'}}>up主： <a href={`https://space.bilibili.com/${item.mid}`} style={{fontSize:'24px',fontStyle:'italic'}}>{item.name}</a></h3>
                        <h3 style={{marginTop:'20px'}}>视频日期：<a href={`https://bilibili.com/av${item.aid}`} style={{fontSize:'30px',fontStyle:'italic'}}>{item.created}</a></h3>
                        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-end', position:'absolute',bottom:'0'}}>
                            <Tooltip title="收藏数">
                                <div><StarsIcon /> <span style={{fontSize:'30px',fontStyle:'italic',fontWeight:'900'}}>{item.favoritesTotal = item.favoritesTotal > 10000 ? parseInt(item.favoritesTotal / 10000) + '万' : item.favoritesTotal}</span></div>
                            </Tooltip>
                            <Tooltip title="播放数">
                                <div style={{marginLeft:'15px'}}><PlayCircleOutlineIcon /> <span style={{fontSize:'30px',fontStyle:'italic',fontWeight:'900'}}>{item.playTotal = item.playTotal > 10000 ? parseInt(item.playTotal / 10000) + '万' : item.playTotal}</span></div>
                            </Tooltip>
                            <Tooltip title="评论数">
                                <div style={{marginLeft:'15px'}}><CommentIcon /> <span style={{fontSize:'30px',fontStyle:'italic',fontWeight:'900'}}>{item.reviewTotal = item.reviewTotal > 10000 ? parseInt(item.reviewTotal / 10000) + '万' : item.reviewTotal}</span></div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
        ))
        return (
            <div className="bili">
                <div className="bilititle">哔哩哔哩收藏排行榜单</div>
                <div className="bilimain">
                    {html}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data:state.BFav.data,
    loading:state.BFav.loading
});
const mapDispatchToProps = {
    fetchBFav:fetchBFav
}
// 校验数据
B.propTypes = {
    data:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(B);