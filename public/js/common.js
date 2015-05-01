;(function(){
	 window.addEventListener('push', function () {  
        var scriptsList = document.querySelectorAll('script.init');  
        console.log("scriptsList",scriptsList,scriptsList.length);
        
        for (var i = 0; i < scriptsList.length; ++i) {  
            if(scriptsList[i].src){
                $.ajax({
                    url : scriptsList[i].src,
                    dataType : "script",
                    cache : true
                });
            }else if(scriptsList[i].innerHTML){
                eval(scriptsList[i].innerHTML);      
            }

            // 保证只执行一次
            $(scriptsList[i]).removeClass("init");
        }  
    });  
})();