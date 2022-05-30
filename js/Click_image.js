                var Richelieu_wing = [ 'url("img/main/richelieu_wing1.jpg")', 'url("img/main/richelieu_wing2.jpg")', 'url("img/main/richelieu_wing3.jpg")' ];
                var Denon_wing = [ 'url("img/main/denon_wing1.jpeg")', 'url("img/main/denon_wing2.jpg")', 'url("img/main/denon_wing3.jpg")' ];
                var Sully_wing = [ 'url("img/main/sully_wing1.jpg")', 'url("img/main/sully_wing2.jpg")', 'url("img/main/sully_wing3.jpg")' ];

                var Images = 0;

                $('#wing_image1').click(function(){
                    $(this).css('background-image',Richelieu_wing[Images]);
                    Images++;
                    if(Images>=Richelieu_wing.length){
                        Images=0;
                    }
                });

                $('#wing_image2').click(function(){
                    $(this).css('background-image',Denon_wing[Images]);
                    Images++;
                    if(Images>=Denon_wing.length){
                        Images=0;
                    }
                });

                $('#wing_image3').click(function(){
                    $(this).css('background-image',Sully_wing[Images]);
                    Images++;
                    if(Images>=Sully_wing.length){
                        Images=0;
                    }
                });
