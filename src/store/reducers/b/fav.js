const defaultStatus = {
    data:[],
    loading:true
}
// b 收藏数据
export default function BFav (state = {
    ...defaultStatus
},action) {
    switch (action.type) {
        case 'BFAV':
            state = {
                data:action.data || state.data,
                loading:action.loading || state.loading
            };
            return state;
        default:
            return state
    }
} 