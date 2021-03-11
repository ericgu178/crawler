import { getRequest , postRequest } from '../libs/axios';

// 获取ins帖子
export const getIns = params => {
    return postRequest('/insGet',params);
}

// 创建短链接
export const createSUrl = params => {
    return getRequest('/s/createSUrl',params);
}

// 获取微信群组
export const getWechatGroup = params => {
    return getRequest('/crawler/c_index/showPreQrcode',params);
}