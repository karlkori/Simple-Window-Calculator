(function($){
  $.fn.window_color_checkbox = function(){

    return this.each(function(){
      var originalColorCheckBox = $(this);

      // Creating the new checkbox markup:
      var checkBox = $('<span>',{
        class : originalColorCheckBox.attr('id')+' color '+(this.checked?'checked':''),
        html: ''
      });

      // Inserting the new checkbox, and hiding the original:
      checkBox.insertAfter(originalColorCheckBox.hide());
      checkBox.click(function(){
        $("#white").attr("checked",false);
        $(".color").removeClass("checked");
        
        $("#brown").attr("checked",false);
        $(".color").removeClass("checked");

        
        checkBox.toggleClass('checked');
        
        var isChecked = checkBox.hasClass('checked');
        
        // Synchronizing the original checkbox:
        originalColorCheckBox.attr('checked',isChecked);
      });
      
      // Listening for changes on the original and affecting the new one:
      originalColorCheckBox.bind('change',function(){
        checkBox.click();
      });
    });
  };
})(jQuery);

$(document).ready(function(){
  $('.window_color').window_color_checkbox();
});