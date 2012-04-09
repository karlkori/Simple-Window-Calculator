(function($){
  $.fn.window_type_checkbox = function(){

    return this.each(function(){
      var originalCheckBox = $(this);

      // Creating the new checkbox markup:
      var checkBox = $('<span>',{
        class : originalCheckBox.attr('id')+' wtype '+(this.checked?'checked':''),
        html: ''
      });

      // Inserting the new checkbox, and hiding the original:
      checkBox.insertAfter(originalCheckBox.hide());
      

      checkBox.click(function(){
        $('input[name="wtype"]').attr("checked",false);
        $('.wtype').removeClass("checked");
        
        checkBox.toggleClass('checked');
        
        var isChecked = checkBox.hasClass('checked');
        
        // Synchronizing the original checkbox:
        originalCheckBox.attr('checked',isChecked);
      });
      
      // Listening for changes on the original and affecting the new one:
      originalCheckBox.bind('change',function(){
        checkBox.click();
      });
    });
  };
})(jQuery);


// меняем чекбокмы на превюшки окон
$(document).ready(function(){
  $('input[name="wtype"]').window_type_checkbox();
});