import { getRequest , postRequest } from '../libs/axios';

// 获取收藏
export const getIns = params => {
    return postRequest('/insGet',params);
}