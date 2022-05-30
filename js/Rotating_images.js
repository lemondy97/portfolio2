            function Left(){
                $('.slide li:last').prependTo('.slide');
                $('.slide').css({marginLeft: -450});
                $('.slide').stop().animate({marginLeft: 0});
            }

            function Right(){
                $('.slide').stop().animate({marginLeft: -450}, function(){
                    $('.slide li:first').appendTo('.slide');
                        $('.slide').css({marginLeft: 0});
                });            
            }

            function Rotating(){
                $('.slide').stop().animate({marginLeft: -450}, function(){
                    $('.slide li:first').appendTo('.slide');
                        $('.slide').css({marginLeft:0});
                });
            }

            setInterval(Rotating, 5000);

            $('.left').click(function(){
                Left();
            });

            $('.right').click(function(){
                Right();
            });