import { getWechatGroup } from "../../api/index"

// 获取微信群
export const fetchWechatGroup = (params) => {
    return async (dispatch, getState) => {
        let res = await getWechatGroup(params);
        res.data.splice(80, 0, {
            src:'123',
            alt:'123'
        });
        res.data.splice(4, 0, {
            src:'123',
            alt:'123'
        });
        res.data.splice(16, 0, {
            src:'123',
            alt:'123'
        });
        res.data.splice(21, 0, {
            src:'123',
            alt:'123'
        });
        res.data.splice(53, 0, {
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