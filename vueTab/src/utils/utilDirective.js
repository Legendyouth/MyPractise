import Vue from 'vue';
Vue.directive('tab',{
	bind(el){
		if(el.children.length>0){
			var lis = el.children[0].children,dArr=[];
			for(let l = 0;l<el.children.length;l++){
				if(el.children[l].nodeName == 'DIV'){
					dArr.push(el.children[l]);
				}
			}
			for(let j = 0;j<lis.length;j++){
				lis[j].onclick = function(){
					this.index = j;
					for(let i = 0;i<lis.length;i++){
						lis[i].className = '';
						dArr[i].className = '';
					}
					this.className = 'liActive';
					dArr[this.index].className = 'divActive'; 
				}
			}
		}
	}
})