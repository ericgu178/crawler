import React from 'react'
import { Switch, withRouter, Redirect } from 'react-router-dom'
import RenderRoutes from './router';

import BIndex from '../views/B/index'; //B站
import Instagram from '../views/Instagram/index'; //instagram
import WechatGroup from '../views/C/index'; //instagram
import ShortUrl from '../views/S/index'; // 短链接

class index extends React.Component {
    render() {
        return (
            // 我们将这个key绑定在 路由顶层元素上就能精确定位路由了 解决的是路由变了 但是页面没有刷新
            <div key={this.props.location.key} style={{height:'100%',width:'100%'}}>
                <Switch>
                    <RenderRoutes path="/b" component={BIndex}/>
                    <RenderRoutes path="/instagram" component={Instagram}/>
                    <RenderRoutes path="/wechat" component={WechatGroup}/>
                    <RenderRoutes path="/shorturl" component={ShortUrl}/>
                    <Redirect from="/" to="/wechat" />
                </Switch>
            </div>
        )
    }
}

export default withRouter(index)

export const routes = [
    { path:'/b', component:BIndex },
    { path:'/instagram', component:Instagram },
    { path:'/wechat', component:WechatGroup },
    { path:'/shorturl', component:ShortUrl }
]