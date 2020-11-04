// b站

import { getRequest } from '../libs/axios';

// 获取收藏
export const getFav = params => {
    return getRequest('/b/getFav',params);
}