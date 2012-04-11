function render(window){
        $('.current_window_type').html('<div class="wtype' + win.type + '_' + win.color + '"></div>');
}




$(function(){


    
    // обект с параметрами нашего окна
    win = {
            'type'  : 1,
            'width'  : 100,
            'height' : 100,
            'color'  : 'white',
            'glass'  : '2-x кам',
            'stv'  : [0,0,0,0]
    };




//Обработка выбора типа окна
    $('form').submit(function(){ return false; });
    $('#submit_step1').click(function(){

        // сохраняем выбраный тип окна
        win.type =  $("input[name='wtype']:checked").val();
        // рисуем окно по параметрам
        render(win);
       
        // переходим на шаг 2
        $('#step1').slideUp('fast');
        $('#step2').slideDown('fast');
    });

// Обработка выбора размеров и цвета окна
    $('#submit_step2').click(function(){
        //remove classes
        $('#step2 input').removeClass('error').removeClass('valid');


        // сохраняем выбраный тип окна
        win.color =  $("input[name='window_color']:checked").val();
        // рисуем окно по параметрам
        render(win);

        

        $('#step2').slideUp('fast');
        $('#step3').slideDown('fast');     
    });

// Обработка выбора створок
    $('#submit_step3').click(function(){
        //remove classes
        $('#step3 input').removeClass('error').removeClass('valid');


        
        //slide steps
        $('#step3').slideUp('fast');
        $('#step4').slideDown('fast');     


    });

// Обработка выбора ручек
    $('#submit_step4').click(function(){
        //remove classes
        $('#step4 input').removeClass('error').removeClass('valid');




        
        //slide steps
        $('#step4').slideUp('fast');
        $('#step5').slideDown('fast');     


    });    

// Обработка выбора стеклопакетов
    $('#submit_step5').click(function(){
        //remove classes
        $('#step5 input').removeClass('error').removeClass('valid');


        
        //slide steps
        $('#step5').slideUp('fast');
        $('#step6').slideDown('fast');     


    });

// Обработка выбора подоконника
    $('#submit_step6').click(function(){
        //remove classes
        $('#step6 input').removeClass('error').removeClass('valid');


        
        //slide steps
        $('#step6').slideUp('fast');
        $('#step7').slideDown('fast');     


    });

// Обработка выбора отлива
    $('#submit_step7').click(function(){
        //remove classes
        $('#step7 input').removeClass('error').removeClass('valid');



        
        //slide steps
        $('#step7').slideUp('fast');
        $('#step8').slideDown('fast');     


    });

// Обработка выбора москитки
    $('#submit_step8').click(function(){
        //remove classes
        $('#step8 input').removeClass('error').removeClass('valid');



// Выводим все данные получение с формы
        var fields = new Array(
            $("input[name='wtype']:checked").val(),
            $('#window_width').val() + ' x ' + $('#window_height').val(),
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


    $("#step3 .current_window_type").click(function(e) {        
        var offset = $(this).offset();
        var clickX = (e.pageX - offset.left);
        var clickY = (e.pageY - offset.top);

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
        } else if ( win.type == 2 ) {
            var w = $('.current_window_type div').width();
            w = w/2;
            var a = Math.floor(clickX/w)+1;
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