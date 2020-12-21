const defaultStatus = {
    data:[],
    loading:true
}
// b 收藏数据
export default function WechatGroup (state = {
    ...defaultStatus
},action) {
    switch (action.type) {
        case 'WECHATGROUP':
            state = {
                data:action.data || state.data,
                loading:action.loading || state.loading
            };
            return state;
        default:
            return state
    }
} 