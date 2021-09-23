import { getWechatGroup } from "../../api/index"

// 获取微信群
export const fetchWechatGroup = (params) => {
    return async (dispatch, getState) => {
        let res = await getWechatGroup(params);
        res.data.splice(4, 0, {
            src:'123',
            alt:'123'
        });
        res.data.splice(9, 0, {
            src:'123',
            alt:'123'
        });
        res.data.splice(18, 0, {
            src:'123',
            alt:'123'
        });
        res.data.splice(26, 0, {
            src:'123',
            alt:'123'
        });
        dispatch({
            type:'WECHATGROUP',
            data:res.data,
            loading:false
        })
    }
}