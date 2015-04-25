    $(document).ready(function() {
    i = 0;
    var t = setInterval("addNum()",20);
    });
    function addNum() {
    var t;
    if(i<90){
    i++;
    $('canvas.process').html(i+"<b>%</b>");
    drawProcess();
    }else{
    clearInterval(t);
    }
    }

    function drawProcess() {  
        $('canvas.process').each(function() {
            var text = $(this).text();
            var process = text.substring(0, text.length-1);   
            var canvas = this;  
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, 0, 0);  

            context.beginPath();  
            context.moveTo(90, 90);  
            context.arc(90, 90, 90, 0, Math.PI * 2, false);  
            context.closePath();  
            context.fillStyle = '#efeff4';  
            context.fill();  
            context.beginPath();  
            context.moveTo(90, 90);    
            context.arc(90, 90, 90, 0, Math.PI * 2 * process / 100, false);  
            context.closePath();  
            context.fillStyle = '#ff5d5d';  
            context.fill();

            context.beginPath();  
            context.moveTo(90, 90);  
            context.arc(90, 90, 80, 0, Math.PI * 2, true);  
            context.closePath();  
            context.fillStyle = '#fff';  
            context.fill();

            context.beginPath();  
            context.arc(90, 90, 75, 0, Math.PI * 2, true);  
            context.closePath();
            context.strokeStyle = '#ddd';  
            context.stroke();
            context.font = "40px Arial";  
            context.fillStyle = '#ff2727';

            context.textAlign = 'center';
            context.textBaseline = 'middle';  
            context.moveTo(90, 90);  
            context.fillText(text, 90, 90);
           
        });
    }