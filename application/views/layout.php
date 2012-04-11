<?php header("Content-Type: text/html; charset=UTF-8"); ?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Simple Window Calc</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link href="<?php echo base_url('/css/bootstrap.min.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('/css/style.css'); ?>" rel="stylesheet">

    <link rel="shortcut icon" href="<?php echo base_url('/img/favicon.ico'); ?>">
    <link rel="apple-touch-icon" href="<?php echo base_url('img/apple-touch-icon.png'); ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url('img/apple-touch-icon-72x72.png'); ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url('img/apple-touch-icon-114x114.png'); ?>">
  </head>

  <body>

    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">Оконный калькулятор</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li class="active"><a href="/">Заказы</a></li>
              <li><a href="#"><i class="icon-cog icon-white"></i>Настройки</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
    <?php $this->load->view($part_name); ?>
    </div>

    <!-- Placed at the end of the document so the pages load faster -->
    <script type="text/javascript" src="<?php echo base_url('/js/jquery-1.7.1.min.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('/js/bootstrap.min.js'); ?>"></script>

    <script type="text/javascript" src="<?php echo base_url('/js/jquery.window_type_checkbox.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('/js/jquery.window_color_checkbox.js'); ?>"></script>

    <script type="text/javascript" src="<?php echo base_url('/js/jquery.main.js'); ?>"></script>

  </body>
</html>