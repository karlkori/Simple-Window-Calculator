(function($){
  $.fn.window_type_checkbox = function(){

    return this.each(function(){
      var originalCheckBox = $(this);

      // Creating the new checkbox markup:
      var checkBox = $('<span>',{
        class : originalCheckBox.attr('id')+' type '+(this.checked?'checked':''),
        html: ''
      });

      // Inserting the new checkbox, and hiding the original:
      checkBox.insertAfter(originalCheckBox.hide());
      checkBox.click(function(){
        $("#type1").attr("checked",false);
        $(".type1").removeClass("checked");
        
        $("#type2").attr("checked",false);
        $(".type2").removeClass("checked");
        
        $("#type3").attr("checked",false);
        $(".type3").removeClass("checked");
        
        $("#type4").attr("checked",false);
        $(".type4").removeClass("checked");
        
        $("#type5").attr("checked",false);
        $(".type5").removeClass("checked");
        
        $("#type6").attr("checked",false);
        $(".type6").removeClass("checked");
        
        $("#type7").attr("checked",false);
        $(".type7").removeClass("checked");
        
        $("#type8").attr("checked",false);
        $(".type8").removeClass("checked");
        
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

$(document).ready(function(){
  $('.wtype').window_type_checkbox();
});