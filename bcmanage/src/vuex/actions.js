const getNodeListSingleData = function({commit}, nodeListSingleData){
	commit('NODELISTSINGLEDATA', nodeListSingleData);
}

const setUserInfo = function({commit}, data){
	commit('SETUSERINFO', data);
	let ls = window.sessionStorage;
	if (data.username) {
		ls.setItem('USERINFO', JSON.stringify(data));
	}
}
export {
	getNodeListSingleData,
	setUserInfo
}