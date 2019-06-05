const state = {
	nodeListSingleData: {},
	USERINFO: {
        userName: '',
        userId: ''
    }
}









let ls = window.sessionStorage;
let USERINFO = JSON.parse(ls.getItem('USERINFO') || '{}');
if (USERINFO.username) {
	state.USERINFO = USERINFO;
}
export {
	state
}