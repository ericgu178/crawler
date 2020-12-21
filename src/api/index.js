import { getRequest , postRequest } from '../libs/axios';

// 获取收藏
export const getIns = params => {
    return postRequest('/insGet',params);
}

export const getWechatGroup = params => {
    return getRequest('/crawler/c_index/showPreQrcode',params);
}