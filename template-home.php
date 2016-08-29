<?php
/**
 * Template Name: Homepage Template
 */
?>

<?php get_header(); ?>

<header>
  <div class="wrapper">
    <span class="title">
      <h1>ALEX CARLSON</h1>
      <h2>Game / Web Development</h2>
    </span>
    <span class="description">
      <img src="http://acwd.me/wp-content/themes/acwd2016/dist/images/alex_idle.gif" alt="" />
      <p>
        &mdash;A standard Hi-Resolution Human.  Living in Minneapolis, MN. Likes dogs, and pizza, and making cool stuff with other people who make cool stuff.
      </p>
    </span>
  </div>
</header>

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
