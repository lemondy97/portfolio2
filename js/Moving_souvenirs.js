            $(document).ready(function(){
            
                var pixelToMove = 50;
                $(".souvenir_box1").mousemove(function(e){
                    var width = $(this).innerWidth();
                    var height = $(this).innerHeight();
                    var newValueX = (e.pageX/width)*pixelToMove;
                    var newValueY = (e.pageY/height)*pixelToMove;
                    $(this).css('background-position', newValueX+'%'+''+newValueY+'%');
                });
                $(".souvenir_box2").mousemove(function(e){
                    var width = $(this).innerWidth();
                    var height = $(this).innerHeight();
                    var newValueX = (e.pageX/width)*pixelToMove;
                    var newValueY = (e.pageY/height)*pixelToMove;
                    $(this).css('background-position', newValueX+'%'+''+newValueY+'%');
                });
                $(".souvenir_box3").mousemove(function(e){
                    var width = $(this).innerWidth();
                    var height = $(this).innerHeight();
                    var newValueX = (e.pageX/width)*pixelToMove;
                    var newValueY = (e.pageY/height)*pixelToMove;
                    $(this).css('background-position', newValueX+'%'+''+newValueY+'%');
                });
            });