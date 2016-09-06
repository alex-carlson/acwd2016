<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
    <script>
     WebFont.load({
        google: {
          families: ['Open Sans:300,500', 'Abel']
        }
      });
    </script>
    <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon'/ >
    <meta name="msapplication-TileColor" content="#777777">
    <meta name="theme-color" content="#777777">
    <title>Alex Carlson</title>
    <script>
      var cb = function() {
      var l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = "<?php echo get_template_directory_uri(); ?>/dist/main.css";
      var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
      };
      var raf = requestAnimationFrame || mozRequestAnimationFrame ||
      webkitRequestAnimationFrame || msRequestAnimationFrame;
      if (raf) raf(cb);
      else window.addEventListener('load', cb);
    </script>

    <?php wp_head(); ?>

  </head>

  <body>
    <!--[if IE]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->
