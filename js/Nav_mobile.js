                    $(document).ready(function(){
                        $('.menu_icon').click(function(){
                            $('#reveal_menu').css('opacity', '1');
                            $('#reveal_menu').css('width', '100%');
                            $('body').not('#reveal_menu').addClass('hide')
                        });
                        $('.disappear_menu').click(function(){
                            $('#reveal_menu').css('opacity', '0');
                            $('#reveal_menu').css('width', '0%');
                            $('body').removeClass('hide');
                        });
                    });