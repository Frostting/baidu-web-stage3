// JavaScript Document
$(function(){
	//设置弹出框正居中
	var hH=$(window).height();
	var wW=$(window).width();
	var popw=$('.pop-box').width();
	var poph=$('.pop-box').height();
	var cw=parseInt((wW-popw)/2);
	var ch=parseInt((hH-poph)/2);
	$('.pop-box').css({'left':cw,'top':ch});
	
	//弹出框弹出接口
	$('.pop').click(function(){
		$('<div class="blk-bg"></div>').css({'height':hH,'width':wW}).appendTo('body');
		$('.pop-box').appendTo('body').show();
		
	});
	
	//点击罩布关闭弹出框
	$(document).on('click','.blk-bg',function(){
		$('.pop-box').css({'left':cw,'top':ch}).hide();
		$('.blk-bg').detach();
		return false;
		});
	
	//对应按钮关闭弹出框	
	$('.confirm').click(function(){
		alert('suc');
		$('.pop-box').css({'left':cw,'top':ch}).hide();
		$('.blk-bg').detach();
		});
	$('.cancel').click(function(){
		$('.pop-box').css({'left':cw,'top':ch}).hide();
		$('.blk-bg').detach();
		});	
		
	//设置弹出框可拖拽
	var orignX;
	var orignY;
	var endX;
	var endY;
	
	$('.drag').click(function(){
		$('.pop-box').addClass('drag-can');
		});
	//$('.drag-can').on('mousedown',function(e){alert(1);})
	$('body').on('mousedown','.drag-can',function(e){
		orignX=e.clientX;
		orignY=e.clientY;
		$(this).addClass('move');
		//return false;
	});
		
	
      $(document).mousemove(function(e){
        setTimeout(function(){
            endX=e.clientX;
            endY=e.clientY;
            distanceX=endX-orignX;
            distanceY=endY-orignY;
			$(".move").stop(true,true).animate({"left":'+='+distanceX/20});
			$(".move").stop(true,true).animate({"top":'+='+distanceY/20});
			console.log(orignX);
            return false;
        },0);
    });
	
	
	$(document).mouseup(function(e){
		$(".pop-box").removeClass("move");
	});

});
