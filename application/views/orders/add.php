<div class="span10">
<div class="content">
<fieldset xmlns="http://www.w3.org/1999/xhtml">
<legend><span class="span2" >Заказ №   </span>
<a class="btn" data-toggle="modal" href="#form-position" ><i class="icon-plus"></i> Добавить позицию</a>

    <div id="form-position" class="modal hide fade">
    <div class="modal-body">
 
	<div id="step-form">
        <form action="#" method="post">
            <div id="step1">    
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
				<legend>Выберите тип изделия</legend>
                <div class="form">
					<input type="radio" id="type1" name="type" value="1" class="wtype" checked />
					<input type="radio" id="type2" name="type" value="2" class="wtype" />
					<input type="radio" id="type3" name="type" value="3" class="wtype" />
					<input type="radio" id="type4" name="type" value="4" class="wtype" />
					<br />
					<input type="radio" id="type5" name="type" value="5" class="wtype" />
					<input type="radio" id="type6" name="type" value="6" class="wtype" />
					<input type="radio" id="type7" name="type" value="7" class="wtype" />
					<input type="radio" id="type8" name="type" value="8" class="wtype" />
                </div>
                <div class="clear"></div>
            </fieldset>
            <hr />
            <input class="btn btn-primary" type="submit" name="submit_step1" id="submit_step1" value="Далее" />
            </div>

            <div id="step2">
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
				<legend>Укажите размеры и цвет изделия</legend>
                <div class="form">
                	<table>
                	<tr>
                	<td><input type="text" name="window_height" id="window_height" /></td>
                	<td><div class="current_window_type"></div></td>
                	<td>
                		<input type="radio" id="white" name="window_color" value="white" class="window_color" checked />
                		<input type="radio" id="brown" name="window_color" value="brown" class="window_color" />
                	</td>
                	</tr>
                	<tr>
                	<td></td>
                	<td style="text-align: center;"><input type="text" name="window_width" id="window_width" /></td>
                	<td></td>
                	</tr>
                </table>
				</div>
                <div class="clear"></div>
            </fieldset>
            <hr />
            <input class="btn btn-primary" type="submit" name="submit_step2" id="submit_step2" value="Далее" />
            </div>

            <div id="step3">
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
				<legend>Укажите где будут створки</legend>
                <div class="form">
				
				</div>
                <div class="clear"></div>
            </fieldset>
            <hr />                
                <input class="btn btn-primary" type="submit" name="submit_step3" id="submit_step3" value="Далее" />
            </div>

            <div id="step4">
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
                <legend>Выберите тип ручки</legend>
                <div class="form">
                
                </div>
                <div class="clear"></div>
            </fieldset>
            <hr />                
                <input class="btn btn-primary" type="submit" name="submit_step4" id="submit_step4" value="Далее" />
            </div>  

            <div id="step5">
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
                <legend>Выберите стеклопакет</legend>
                <div class="form">
                
                </div>
                <div class="clear"></div>
            </fieldset>
            <hr />                
                <input class="btn btn-primary" type="submit" name="submit_step5" id="submit_step5" value="Далее" />
            </div>                       

            <div id="step6">
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
                <legend>Выберите подоконник</legend>
                <div class="form">
                
                </div>
                <div class="clear"></div>
            </fieldset>
            <hr />                
                <input class="btn btn-primary" type="submit" name="submit_step6" id="submit_step6" value="Далее" />
            </div> 

            <div id="step7">
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
                <legend>Выберите отлив</legend>
                <div class="form">
                
                </div>
                <div class="clear"></div>
            </fieldset>
            <hr />                
                <input class="btn btn-primary" type="submit" name="submit_step7" id="submit_step7" value="Далее" />
            </div>

            <div id="step8">
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
                <legend>Выберите москитки</legend>
                <div class="form">
                
                </div>
                <div class="clear"></div>
            </fieldset>
            <hr />                
                <input class="btn btn-primary" type="submit" name="submit_step8" id="submit_step8" value="Далее" />
            </div>
            
            <!-- #fourth_step -->
            <div id="step9">
            <fieldset xmlns="http://www.w3.org/1999/xhtml">
                <legend>Стоимость конструкции</legend>
                <div class="form">
                    <div class="current_window_type" style="float: left;"></div>
                   
                    <table>
                        <tr><td>Type</td><td></td></tr>
                        <tr><td>Размеры</td><td></td></tr>
                        <tr><td>Цвет</td><td></td></tr>
                        <tr><td>Стеклопакеты</td><td></td></tr>
                        <tr><td>Количество</td><td></td></tr>
                        <tr><td>Цена</td><td></td></tr>
                    </table>
                </div>
                <div class="clear"></div>
                </fieldset>
                <input class="btn-primary send submit" type="submit" name="submit_step9" id="submit_step9" value="Финиш" data-dismiss="modal" />            
            </div>
            
        </form>
	</div>

    </div>
    </div>

</fieldset>
</div>
</div>
