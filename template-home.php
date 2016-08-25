<?php
/**
 * Template Name: Homepage Template
 */
?>

<?php get_header(); ?>

<h1>ALEX CARLSON</h1>
<h2>Game / Web Development</h2>

<div class="work">
  <div class="wrapper">
  <?php while(the_flexible_field("featured_work") ){ ?>
      <article>
        <span class="left">
          <img class="lazy" data-dynamic="<?php the_sub_field('image') ?>" data-static="<?php the_sub_field('preview_image') ?>" src="<?php the_sub_field('preview_image') ?>"/>
        </span>
        <div class="right">
          <h3><?php the_sub_field('title') ?></h3>
          <?php the_sub_field('description') ?>
          <?php the_sub_field('modal_embed') ?>
        </div>
      </article>
  <?php }?>
  </div>
</div>
<?php get_footer(); ?>
