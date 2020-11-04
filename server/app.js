import Koa from 'koa';
import React from 'react';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import fs from 'fs';
import koaStatic from 'koa-static';
import path from 'path';
import { Provider } from 'react-redux';
import { StaticRouter,Switch,Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { routes } from "../src/router/index"
import getCreateStore from './store';
import { B }  from '../src/store/reducers';
import index from "../src/views/main"

const Logger = require('koa-logger');

// 配置文件
const config = {
    port: 3040,
    title:'数据'
};

// 实例化 koa
const app = new Koa();
// 静态资源
app.use(
    koaStatic(path.join(__dirname, '../build'), {
        maxage: 365 * 24 * 60 * 1000,
        index: 'root'
    })
);
app.use(bodyParser());
app.use(cors());
app.use(Logger());

// 设置路由
app.use(
    new Router()
        .get('/b' , async (ctx, next) => {
            const {store} = await searchTemplate(ctx,B,'/b',ctx.params)

            await renderFullHtml(ctx,store,ctx.req.url,'哔哩哔哩收藏排行榜')
            await next()
        })
    .routes()
);

app.listen(config.port, function() {
  console.log('服务器启动，监听 端口号： ' + config.port + '  running');
});


/**
 * 找寻路由匹配
 * 
 * @param {*} ctx 上下文
 * @param {*} reducer redux
 * @param {*} url 地址
 * @param {*} query 查询参数
 */
async function searchTemplate(ctx,reducer,url,query) {
    const branch = matchRoutes(routes, url);
    const { store } = getCreateStore(ctx,reducer)
    const promises = branch.map(({route}) => {
        const fetch = route.component.fetch;
        return fetch instanceof Function ? fetch(store,query) : Promise.resolve(null)
    });
    await Promise.all(promises).catch((err)=>{
        console.log(err);
    });
    return { store }
}

/**
 * 生成模板源代码
 * 
 * @param {*} ctx 上下文
 * @param {*} store 状态管理
 * @param {*} url 地址
 */
async function renderFullHtml(ctx,store,url,title = undefined) {
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={url} context={{}}>
                <Switch>
                    <Route path="/" component={index} />
                </Switch>
            </StaticRouter> 
        </Provider>
    );
    ctx.response.type = 'html'; //指定content type
    let shtml = '';
    await new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../build/index.html'), 'utf8', function(err, data) {
            if (err) {
                reject();
                return console.log(err);
            }
            shtml = data;
            resolve();
        });
    });
    let initState = store.getState();

    ctx.response.body = shtml.replace('{{title}}', (title !== undefined ? title + ' | ' : '') + config.title);
    ctx.response.body = ctx.response.body.replace('{{script}}', `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initState)}</script>`);
    ctx.response.body = ctx.response.body.replace('{{root}}', html);
}