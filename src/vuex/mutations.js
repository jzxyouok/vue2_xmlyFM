export default {
    // 展现loding
    SHOWLODING(state){
        state.loading = true;
    },
    // 隐藏logding
    HIDELODING(state){
        state.loading = false;
    },
    // 设置用户信息
    SETUSER(state,userobj){
        for (var key in userobj) {
            state.user[key] = userobj[key];
        }
    },
    // 删除用户信息
    DELUSER(state){
        state.user = {};
    },
    //设置token值
    SETTOKEN(state,tokenval){
        state.token = tokenval;
    },
    //改变音频的播放链接地址
    CHANGEAUDIOSRC(state,newsrc){
        state.audiosrc = newsrc;
    },
    //改变音频的播放与暂停状态
    CHANGEPLAY(state){
        state.play =  !state.play;
    }
}