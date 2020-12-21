import { getWechatGroup } from "../../api/index"

// 获取微信群
export const fetchWechatGroup = (params) => {
    return async (dispatch, getState) => {
        let res = await getWechatGroup(params);
        dispatch({
            type:'WECHATGROUP',
            data:res.data,
            loading:false
        })
    }
}