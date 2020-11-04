import { getFav } from "../../api/b"
// 获取文章
export const fetchBFav = (params) => {
    return async (dispatch, getState) => {
        let res = await getFav(params);
        dispatch({
            type:'BFAV',
            data:res.data,
            loading:false
        })
    }
}