import { combineReducers } from 'redux';

import BFav from './b/fav';

const appReducer = combineReducers({
    BFav
})

// b数据
export const B = combineReducers({
    BFav
})


// 统一返回数据
export default appReducer