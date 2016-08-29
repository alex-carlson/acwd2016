<?php
/**
 * Template Name: Homepage Template
 */
?>

<?php get_header(); ?>

<header>
  <div class="wrapper">
    <div class="title">
      <h1>ALEX CARLSON</h1>
      <h2>Game / Web Development</h2>
    </div>
    <div class="avatar">
      <img src="http://acwd.me/wp-content/themes/acwd2016/dist/images/alex_idle.gif"/>
    </div>
    <div class="description">
      <p>
        —A standard Hi-Resolution Human. Living in Minneapolis, MN. Likes 🐶, 🍕, and making cool stuff with other people who make cool stuff.
      </p>
      <span class="social">
        <ul>
          <li><a href="//twitter.com/alexcarlson__" target="_blank">Twitter</a></li>
          <li><a href="//github.com/alex-carlson/" target="_blank">Github</a></li>
          <li><a href="//vividredemption.itch.io/" target="_blank">itch.io</a></li>
          <li><a href="mailto:alex@acwd.me">Email</a></li>
        </ul>
      </span>
    </div>
  </div>
</header>

<div class="work">
  <?php while(the_flexible_field("featured_work") ){ ?>
    <article>
      <div class="wrapper">
        <span class="left">
          <img src="<?php the_sub_field('image') ?>"/>
        </span>
        <div class="right">
          <h3><?php the_sub_field('title') ?></h3>
          <?php the_sub_field('description') ?>
          <?php the_sub_field('modal_embed') ?>
        </div>
      </div>
    </article>
  <?php }?>
</div>
<?php get_footer(); ?>
