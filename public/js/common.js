!function(){
	var js = {};
	var css = {};
	window.addEventListener('DOMContentLoaded', function(){
		var jss = document.querySecectorAll('script');
		for(i=0;i<jss.length;i++){
			if(js.src){
				js[jss[i].src] = true;
			}
		}
	});

	 window.addEventListener('push', function () {  
                var list = document.querySelector('js').innerHTML.split(';');
                var i =0;  
                for (var i = 0; i < scriptsList.length; ++i) {
                	var s = document.createElement('script');
                	s.src = scriptsList[i];
                	s.addEventListener('load',)
                    eval(scriptsList[i]);  
                }  
                function loadRes(isJs){
                	var s;
                	if (i< list.length){
	                	if (isJs){
	                		s = document.createElement('script');
	                		s.src = list[i];
	                	}else{
	                		s = document.createElement('link');
	                		s.rel = 'stylesheet';
	                		s.href = list[i];
	                	}
	                	document.head.appendChild(s);
	                	s.addEventListener('load', function(){
	                		i++;
	                		loadRes(isJs);
	                	});
                	}
                }
            });  
}();