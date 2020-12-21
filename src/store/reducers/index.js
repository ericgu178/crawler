import { combineReducers } from 'redux';

import BFav from './b/fav';
import WechatGroup from './c/wechatGroup'
const appReducer = combineReducers({
    BFav,
    WechatGroup
})

// b数据
export const B = combineReducers({
    BFav
})

// b数据
export const C = combineReducers({
    WechatGroup
})


// 统一返回数据
export default appReducer