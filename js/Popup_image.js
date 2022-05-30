            $(function(){
                $('.sns_image1').click(function(){
                    $('.popup_box1').fadeIn();
                });
                $('.sns_image2').click(function(){
                    $('.popup_box2').fadeIn();
                });
                $('.sns_image3').click(function(){
                    $('.popup_box3').fadeIn();
                });
                $('.sns_image4').click(function(){
                    $('.popup_box4').fadeIn();
                });
                $('.sns_image5').click(function(){
                    $('.popup_box5').fadeIn();
                });


                $('.popup_box1').not().click(function(){
                    $(this).fadeOut();
                });

                $('.popup_box2').not().click(function(){
                    $(this).fadeOut();
                });
                $('.popup_box3').not().click(function(){
                    $(this).fadeOut();
                });
                $('.popup_box4').not().click(function(){
                    $(this).fadeOut();
                });
                $('.popup_box5').not().click(function(){
                    $(this).fadeOut();
                });
            });