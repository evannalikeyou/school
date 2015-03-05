(function(){
  var show = document.getElementById("camera_show").getElementsByTagName("ul")[0];
  var num = show.getElementsByTagName("li").length;
  var ul_width = 190 * num;
  show.style.width = ul_width + "px";
  var number = 0;
    $("#turnleft").click(function(){
      if(number == 0){

      }else{
        $("#layout_ul").animate({
          left: '+=184px',
        },"slow");
        number--;
      }
    });
    $("#turnright").click(function(){
      if(number == num - 5){

      }else{
        $("#layout_ul").animate({
          left: '-=184px'
        },"slow");
        number++;
      }
    });
})();
window.onload = function(){
	var pictures = ["../images/swipe1.png","../images/swipe2.png","../images/swipe3.png"];
 	var spans = document.getElementById("swipe").getElementsByTagName("span");
	function Event(eventname,callfunction,justfity){
	    if(document.addEventListener){
	        this.addEventListener(eventname,callfunction,justfity)
	    }else{
	        this.attachEvent("on"+eventname,callfunction)
	    }
	};
	function change(i){
		return function(){
	    	var swipe_img = document.getElementById("swipe_pic");
	    	swipe_img.src = pictures[i];
	    	for (var n = pictures.length - 1; n >= 0; n--) {
	    		spans[n].className = "";
	    	};
	    	spans[i].className = "on";
		}
    }
 	for (var i = spans.length - 1; i >= 0; i--) {
 		Event.call(spans[i],"click",change(i),false);
 	};

}
