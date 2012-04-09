$(function(){
    //original field values
    var field_values = {
            //id        :  value
            'type'  : 'type',
            'password'  : 'password',
            'cpassword' : 'password',
            'firstname'  : 'first name',
            'lastname'  : 'last name',
            'email'  : 'email address'
    };


    //inputfocus
    $('input#username').inputfocus({ value: field_values['username'] });
    $('input#password').inputfocus({ value: field_values['password'] });
    $('input#cpassword').inputfocus({ value: field_values['cpassword'] }); 
    $('input#lastname').inputfocus({ value: field_values['lastname'] });
    $('input#firstname').inputfocus({ value: field_values['firstname'] });
    $('input#email').inputfocus({ value: field_values['email'] }); 




    //reset progress bar
    $('#progress').css('width','0');
    $('#progress_text').html('0% Complete');

//Обработка выбора типа окна
    $('form').submit(function(){ return false; });
    $('#submit_step1').click(function(){

        //update progress bar
        $('#progress_text').html('33% Complete');
        $('#progress').css('width','113px');
        
        //slide steps
        $('#step1').slideUp('fast');
        $('#step2').slideDown('fast');

        // выводим картинку окна выбраного типа не предыдущем шаге
        type =  $("input[name='wtype']:checked").val();
        //$('.current_window_type').html('<img src="../img/windows/wtype' + type + '_white.png" >');
        $('.current_window_type').html('<div class="wtype' + type + '_white"></div>');
    });

// Обработка выбора размеров и цвета окна
    $('#submit_step2').click(function(){
        //remove classes
        $('#step2 input').removeClass('error').removeClass('valid');

        //ckeck if inputs aren't empty
        var fields = $('#step1 input[type=text], #step1 input[type=password]');
        var error = 0;
        fields.each(function(){
            var value = $(this).val();
            if( value.length<4 || value==field_values[$(this).attr('id')] ) {
                $(this).addClass('error');
                $(this).effect("shake", { times:3 }, 50);
                
                error++;
            } else {
                $(this).addClass('valid');
            }
        });



        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step2').slideUp('fast');
        $('#step3').slideDown('fast');     


    });

// Обработка выбора створок
    $('#submit_step3').click(function(){
        //remove classes
        $('#step3 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step3').slideUp('fast');
        $('#step4').slideDown('fast');     


    });

// Обработка выбора ручек
    $('#submit_step4').click(function(){
        //remove classes
        $('#step4 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step4').slideUp('fast');
        $('#step5').slideDown('fast');     


    });    

// Обработка выбора стеклопакетов
    $('#submit_step5').click(function(){
        //remove classes
        $('#step5 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step5').slideUp('fast');
        $('#step6').slideDown('fast');     


    });

// Обработка выбора подоконника
    $('#submit_step6').click(function(){
        //remove classes
        $('#step6 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step6').slideUp('fast');
        $('#step7').slideDown('fast');     


    });

// Обработка выбора отлива
    $('#submit_step7').click(function(){
        //remove classes
        $('#step7 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step7').slideUp('fast');
        $('#step8').slideDown('fast');     


    });

// Обработка выбора москитки
    $('#submit_step8').click(function(){
        //remove classes
        $('#step8 input').removeClass('error').removeClass('valid');


       $('#progress_text').html('100% Complete');
        $('#progress').css('width','339px');

// Выводим все данные получение с формы
        var fields = new Array(
            $("input[name='wtype']:checked").val(),
            $('#window_width').val() + ' x ' + $('#window_width').val(),
            $("input[name='window_color']:checked").val(),
            $('#firstname').val() + ' ' + $('#lastname').val(),
            $('#age').val(),
            $('#gender').val(),
            $('#country').val()                       
        );
        var tr = $('#step9 tr');
        tr.each(function(){
            //alert( fields[$(this).index()] )
            $(this).children('td:nth-child(2)').html(fields[$(this).index()]);
        });



        //update progress bar
        $('#progress_text').html('100% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step8').slideUp('fast');
        $('#step9').slideDown('fast');     


    });


// 
    $('#submit_step9').click(function(){

  
        //slide steps
        $('#step9').slideUp();
        
    });

    $('.back_step0').click(function(){
        $('#step1').slideUp();
        
    });
    $('.back_step1').click(function(){
        $('#step2').slideUp();
        $('#step1').slideDown();  
        
    });
    $('.back_step2').click(function(){
        $('#step3').slideUp();
        $('#step2').slideDown();  
        
    });
    $('.back_step3').click(function(){
        $('#step4').slideUp();
        $('#step3').slideDown();  
        
    });
    $('.back_step4').click(function(){
        $('#step5').slideUp();
        $('#step4').slideDown();  
        
    });
    $('.back_step5').click(function(){
        $('#step6').slideUp();
        $('#step5').slideDown();  
        
    });
    $('.back_step6').click(function(){
        $('#step7').slideUp();
        $('#step6').slideDown();  
        
    });
    $('.back_step7').click(function(){
        $('#step8').slideUp();
        $('#step7').slideDown();  
        
    });
    $('.back_step8').click(function(){
        $('#step9').slideUp();
        $('#step8').slideDown();  
        
    });

    var stworka = 1;

    $(".current_window_type").click(function(e) {        
        var offset = $(this).offset();
        var clickX = (e.pageX - offset.left);
        var clickY = (e.pageY - offset.top);
        //alert("X: " + relativeX + "  Y: " + relativeY + "-" + $(this).width());

        if ( $('.current_window_type div').hasClass('wtype1_white') ) {
            switch (stworka) {
            case 0:
                $('.current_window_type').html('<div class="wtype' + type + '_white"></div>');
                stworka++;
                break;
            case 1:
                $('.current_window_type').html('<div class="wtype' + type + '_white"><img class="over" src="../img/windows/wtype'+type+'_white_l.png" ></div>');
                stworka++;
                break;
            case 2:
                $('.current_window_type').html('<div class="wtype' + type + '_white"><img class="over" src="../img/windows/wtype'+type+'_white_r.png" ></div>');
                stworka = 0;
                break;
            default:
                $('.current_window_type').html('<div class="wtype' + type + '_white"></div>');
                stworka = 1;
                break;
            }
        } else if ( $('.current_window_type div').hasClass('wtype1_brown') ) {
            switch (stworka) {
            case 0:
                $('.current_window_type').html('<div class="wtype' + type + '_brown"></div>');
                stworka++;
                break;
            case 1:
                $('.current_window_type').html('<div class="wtype' + type + '_brown"><img class="over" src="../img/windows/wtype'+type+'_brown_l.png" ></div>');
                stworka++;
                break;
            case 2:
                $('.current_window_type').html('<div class="wtype' + type + '_brown"><img class="over" src="../img/windows/wtype'+type+'_brown_r.png" ></div>');
                stworka = 0;
                break;
            default:
                $('.current_window_type').html('<div class="wtype' + type + '_white"></div>');
                stworka = 1;
                break;
            }
        } else if ( $('.current_window_type div').hasClass('wtype2_white') ) {
            a = Math.floor(clickX/180)+1;
            alert(a);
        } else if ( $('.current_window_type div').hasClass('wtype2_brown') ) {
            alert('2 brown');
        } else if ( $('.current_window_type div').hasClass('wtype3_white') ) {
            alert('3 white');
        } else if ( $('.current_window_type div').hasClass('wtype3_brown') ) {
            alert('3 brown');
        } else if ( $('.current_window_type div').hasClass('wtype4_white') ) {
            alert('4 white');
        } else if ( $('.current_window_type div').hasClass('wtype4_brown') ) {
            alert('4 brown');
        } else if ( $('.current_window_type div').hasClass('wtype5_white') ) {
            alert('5 white');
        } else if ( $('.current_window_type div').hasClass('wtype5_brown') ) {
            alert('5 brown');
        } else if ( $('.current_window_type div').hasClass('wtype6_white') ) {
            alert('6 white');
        } else if ( $('.current_window_type div').hasClass('wtype6_brown') ) {
            alert('6 brown');
        } else if ( $('.current_window_type div').hasClass('wtype7_white') ) {
            alert('7 white');
        } else if ( $('.current_window_type div').hasClass('wtype7_brown') ) {
            alert('7 brown');
        } else if ( $('.current_window_type div').hasClass('wtype8_white') ) {
            alert('8 white');
        } else if ( $('.current_window_type div').hasClass('wtype8_brown') ) {
            alert('8 brown');
        }   
           


    });


});