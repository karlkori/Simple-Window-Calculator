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
        //remove classes
        $('#step1 input').removeClass('error').removeClass('valid');

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
        
        if(!error) {
            if( $('#password').val() != $('#cpassword').val() ) {
                    $('#step1 input[type=password]').each(function(){
                        $(this).removeClass('valid').addClass('error');
                        $(this).effect("shake", { times:3 }, 50);
                    });
                    
                    return false;
            } else {   
                //update progress bar
                $('#progress_text').html('33% Complete');
                $('#progress').css('width','113px');
                
                //slide steps
                $('#step1').slideUp();
                $('#step2').slideDown(); 
                // выводим картинку окна выбраного типа не предыдущем шаге
                win =  $("input[name='type']:checked").val();
                $('.current_window_type').html('<img src="../img/types/'+win+'.jpg" >');    
            }               
        } else return false;
    });

// Обработка выбора размеров и цвета окна
    $('#submit_step2').click(function(){
        //remove classes
        $('#step2 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step2').slideUp();
        $('#step3').slideDown();     


    });

// Обработка выбора створок
    $('#submit_step3').click(function(){
        //remove classes
        $('#step3 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step3').slideUp();
        $('#step4').slideDown();     


    });

// Обработка выбора ручек
    $('#submit_step4').click(function(){
        //remove classes
        $('#step4 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step4').slideUp();
        $('#step5').slideDown();     


    });    

// Обработка выбора стеклопакетов
    $('#submit_step5').click(function(){
        //remove classes
        $('#step5 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step5').slideUp();
        $('#step6').slideDown();     


    });

// Обработка выбора подоконника
    $('#submit_step6').click(function(){
        //remove classes
        $('#step6 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step6').slideUp();
        $('#step7').slideDown();     


    });

// Обработка выбора отлива
    $('#submit_step7').click(function(){
        //remove classes
        $('#step7 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step7').slideUp();
        $('#step8').slideDown();     


    });

// Обработка выбора москитки
    $('#submit_step8').click(function(){
        //remove classes
        $('#step8 input').removeClass('error').removeClass('valid');




        //update progress bar
        $('#progress_text').html('66% Complete');
        $('#progress').css('width','226px');
        
        //slide steps
        $('#step8').slideUp();
        $('#step9').slideDown();     


    });


// 
    $('#submit_step9').click(function(){
        //update progress bar
        $('#progress_text').html('100% Complete');
        $('#progress').css('width','339px');

        //prepare the fourth step
        var fields = new Array(
            $("input[name='type']:checked").val(),
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
                
        //slide steps
        $('#step9').slideUp();
        $('#step10').slideDown();            
    });


    $('#submit_step10').click(function(){
        //send information to server
        //slide steps
        $('#step10').slideUp();

    });

});