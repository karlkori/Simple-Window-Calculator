/**
 * Строим окно по параметрам объекта window
 *
 */
function render(){
    console.log(win.stw);

    // размер под створку для кажного типа окна
    var delta = new Array();
        delta[1] = 188;
        delta[2] = (280/2);
        delta[3] = (415/3);
        delta[4] = (550/4);
        delta[5] = (415/3);
        delta[6] = (550/4);
        delta[7] = 107;
        delta[8] = 107;


    var lr = new Array();
    lr[0] = ""; // no need now
    lr[1] = "_l";
    lr[2] = "_r";


    var htm = '';
    // рама
    htm += '<div class="wtype' + win.type + '_' + win.color + '">';
    // створки
    if (win.stw[0] != 0)
        htm += '<img style="margin-left: ' + delta[win.type]*0 + 'px;" class="over1" src="../img/windows/wtype' + win.type + '_' + win.color + lr[win.stw[0]] +'.png" >';
    if (win.stw[1] != 0)
        htm += '<img style="margin-left: ' + delta[win.type]*1 + 'px;" class="over2" src="../img/windows/wtype' + win.type + '_' + win.color + lr[win.stw[1]] +'.png" >';
    if (win.stw[2] != 0)
        htm += '<img style="margin-left: ' + delta[win.type]*2 + 'px;" class="over3" src="../img/windows/wtype' + win.type + '_' + win.color + lr[win.stw[2]] +'.png" >';
    if (win.stw[3] != 0)
        htm += '<img style="margin-left: ' + delta[win.type]*3 + 'px;" class="over4" src="../img/windows/wtype' + win.type + '_' + win.color + lr[win.stw[3]] +'.png" >';

    htm += '</div>';

    $('.current_window_type').html(htm);
}




$(function(){

   
    // объект с параметрами нашего окна по умолчанию
    win = {
        'type'          : 1,               // тип окна
        'width'         : 100,             // ширина окна
        'height'        : 100,             // высота окна
        'color'         : 'white',         // цвет окна
        'glass'         : '2-x кам',       // тип стеклопакетов
        'stw'           : [0,0,0,0],       // наличие створок
        'handle'        : 1,               // тип ручки
        'sill-type'     : 1,               // тип подоконного профиля
        'sill-length'   : 1000,            // длинна подоконника
        'tide-type'     : 1,               // тип подоконного профиля
        'tide-length'   : 1000,            // длинна подоконника        
    };




//Обработка выбора типа окна
    $('form').submit(function(){ return false; });
    $('#submit_step1').click(function(){

        // сохраняем выбраный тип окна
        win.type =  $("input[name='wtype']:checked").val();
        // рисуем окно по параметрам
        render();
       
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
        render();

        

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



    $("#step3 .current_window_type").click(function(e) {        
        var offset = $(this).offset();
        var clickX = (e.pageX - offset.left);
        var clickY = (e.pageY - offset.top);

        // получаем ширину окна, для определения выбраной створки
        var cwidth = $('.current_window_type div').width();
        

        if (win.type == 1){
                // проем один, значение хранится в win.stw[0]
                switch (win.stw[0]) {
                    case 0:
                        render();
                        win.stw[0]++;
                        break;
                    case 1:
                        render();
                        win.stw[0]++;
                        break;
                    case 2:
                        render();
                        win.stw[0] = 0;
                        break;
                    default:
                        render();
                        win.stw[0] = 1;
                        break;
                }
        } else if (win.type == 2){
                // получаем номер проема [0..3] ширину делим на 2 - к-тво проемов в этом типе окна
                var stw_num = Math.floor(clickX/(cwidth/2));
                
                switch (win.stw[stw_num]) {
                    case 0:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 1:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 2:
                        win.stw[stw_num] = 0;
                        render();
                        break;
                    default:
                        win.stw[stw_num] = 1;
                        render();
                        break;
                }

        } else if (win.type == 3){
                // получаем номер проема [0..3] ширину делим на 3 - к-тво проемов в этом типе окна
                var stw_num = Math.floor(clickX/(cwidth/3));
                
                switch (win.stw[stw_num]) {
                    case 0:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 1:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 2:
                        win.stw[stw_num] = 0;
                        render();
                        break;
                    default:
                        win.stw[stw_num] = 1;
                        render();
                        break;
                }
        } else if (win.type == 4){
                // получаем номер проема [0..3] ширину делим на 4 - к-тво проемов в этом типе окна
                var stw_num = Math.floor(clickX/(cwidth/4));
                
                switch (win.stw[stw_num]) {
                    case 0:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 1:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 2:
                        win.stw[stw_num] = 0;
                        render();
                        break;
                    default:
                        win.stw[stw_num] = 1;
                        render();
                        break;
                }
        } else if (win.type == 5){
                // получаем номер проема [0..3] ширину делим на 3 - к-тво проемов в этом типе окна
                var stw_num = Math.floor(clickX/(cwidth/3));
                
                switch (win.stw[stw_num]) {
                    case 0:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 1:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 2:
                        win.stw[stw_num] = 0;
                        render();
                        break;
                    default:
                        win.stw[stw_num] = 1;
                        render();
                        break;
                }
        } else if (win.type == 6){
                // получаем номер проема [0..3] ширину делим на 4 - к-тво проемов в этом типе окна
                var stw_num = Math.floor(clickX/(cwidth/4));
                
                switch (win.stw[stw_num]) {
                    case 0:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 1:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 2:
                        win.stw[stw_num] = 0;
                        render();
                        break;
                    default:
                        win.stw[stw_num] = 1;
                        render();
                        break;
                }
        } else if (win.type == 7){
                // получаем номер проема [0..3] ширину делим на 1 - к-тво проемов в этом типе окна
                var stw_num = Math.floor(clickX/(cwidth/1));
                
                switch (win.stw[stw_num]) {
                    case 0:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 1:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 2:
                        win.stw[stw_num] = 0;
                        render();
                        break;
                    default:
                        win.stw[stw_num] = 1;
                        render();
                        break;
                }
        } else if (win.type == 8){
                // получаем номер проема [0..3] ширину делим на 1 - к-тво проемов в этом типе окна
                var stw_num = Math.floor(clickX/(cwidth/1));
                
                switch (win.stw[stw_num]) {
                    case 0:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 1:
                        win.stw[stw_num]++;
                        render();
                        break;
                    case 2:
                        win.stw[stw_num] = 0;
                        render();
                        break;
                    default:
                        win.stw[stw_num] = 1;
                        render();
                        break;
                }
        }


    });

});