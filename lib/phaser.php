<?php

/**
 * Phaser Setup
 */

/**
 * Theme assets
 */
function assets() {

  wp_enqueue_script('phaser', get_template_directory_uri() . '/dist/scripts/phaser/phaser.min.js', array(), '1', true);
  wp_enqueue_script('gt', get_template_directory_uri() . '/dist/scripts/phaser/gamecontroller.js', array(), '1', true);
  wp_enqueue_script('boot', get_template_directory_uri() . '/dist/scripts/phaser/Boot.js', array(), '1', true);
  wp_enqueue_script('preload', get_template_directory_uri() . '/dist/scripts/phaser/Preload.js', array(), '1', true);
  wp_enqueue_script('game', get_template_directory_uri() . '/dist/scripts/phaser/Game.js', array(), '1', true);
  wp_enqueue_script('custom', get_template_directory_uri() . '/dist/scripts/phaser/main.js', array(), '1', true);
  wp_localize_script('preload', 'mylocalizedscript', array('myurl' => get_template_directory_uri()));
  wp_localize_script('boot', 'mylocalizedscript', array('myurl' => get_template_directory_uri()));


}
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\assets', 100);
