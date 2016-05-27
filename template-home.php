<?php
/**
 * Template Name: Home Template
 */

  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
  $args= array(
    'posts_per_page' => -1,
    'paged' => $paged
  );
  query_posts($args);
?>

<div data-start="background-color: rgb(28, 109, 184);" data-300-start="background-color: rgb(0, 0, 0);" class="container-fluid splash" id="splash">
  <a name="top"></a>
  <div class="splashContent">
    <div
    class="circle"
    data-start="top: 170px; background-color: rgb(231, 237, 106); width: 300px; height: 300px; margin-left: -150px; margin-top: -150px;"
    data-300-start="top: 800px; background-color: rgb(133, 18, 18); width: 150px; height: 150px; margin-left: -75px; margin-top: -75px;
    "></div>
    <h1 class="name">ALEX CARLSON</h1>
  </div>
</div>

<div class="container-fluid mission yellow">
  <a name="about"></a>
  <div class="holder">
    <span class="player">

    </span>
    <span
      data-anchor-target=".holder"
      data-start="top: -630px; background-image: url(<?php echo get_template_directory_uri () ?>/dist/images/alex_idle.gif);"
      data-1-start="background-image: url(<?php echo get_template_directory_uri () ?>/dist/images/alex_fall.png);"
      data-100-bottom="top:45px; background-image: url(<?php echo get_template_directory_uri () ?>/dist/images/alex_land.png);"
      class="avatar"></span>
    <div class="content">
      <div class="hold">
        <span class="defaultText">
          <p data-100-bottom="opacity: 0" data--100-bottom="opacity: 1">
            Alex Carlson is a carbon based lifeform who likes to make video games and websites.
          </p>
        </span>
        <span class="skills">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>d3js</li>
            <li>threejs</li>
            <li>node</li>
          </ul>
          <ul>
            <li>Unity</li>
            <li>Unreal Engine</li>
            <li>Oculus Rift</li>
            <li>Google Cardboard</li>
            <li>Android</li>
            <li>iOS</li>
          </ul>
        </span>
        <span class="party">
          <ul>
            <li><a target="-_blank" href="http://mattblizel.com">Matt Blizel</a></li>
            <li><a target="-_blank" href="http://www.benmoren.com/">Ben Moren</a></li>
            <li><a target="-_blank" href="http://clareoneill.me/work">Clare O'Neill</a></li>
            <li><a target="-_blank" href="http://www.amrutabuge.com/">Amruta Buge</a></li>
            <li><a target="-_blank" href="http://www.vedashreebankar.com/">Vedashree Bankar</a></li>
            <li><a target="-_blank" href="http://www.jaafaralnabi.com/">Jaafar Alnabi</a></li>
          </ul>
        </span>
        <span class="quest">
          <p>
            Alex Carlson is a digitally focused creative.  He strives to create unique, custom tailored interactions that are fun and responsive.
          </p>
          <p>
            The beauty of the web as a platform, is that it’s so widely accessible.  Therefore, we have a responsibility to make web based work which is equally as accessible.
          </p>
        </span>
        <span class="diary">
          <ul>
            <li>Work Experience</li>
            <li>Augsburg Fortress</li>
            <li>VON91</li>
            <li>Invisible Friend</li>
            <li>MCAD</li>
            <li>Target</li>
          </ul>
        </span>
      </div>
    </div>
    <div class="actions">
      <ul>
        <li class="skills">Skills</li>
        <li class="quest">Quest</li>
        <li class="diary">Diary</li>
        <li class="party">Party</li>
      </ul>
    </div>
  </div>
</div>

<div class="container-fluid work gray">
  <a name="work"></a>
  <div class="col-md-12">
    <div class="wrapper">
    <?php $i = 0; while(the_flexible_field("featured_work") ){ ?>
        <article>
          <span class="button"></span>
          <span class="modal" style="display: none;">
            <?php the_sub_field('modal_embed') ?>
          </span>
          <img class="lazy" data-dynamic="<?php the_sub_field('image') ?>" data-static="<?php the_sub_field('preview_image') ?>" src="<?php the_sub_field('preview_image') ?>" width="320" height="320"/>
          <h3><?php the_sub_field('title') ?></h3>
          <ul>
            <li class="fa fa-globe"></li>
            <li class="fa fa-windows"></li>
            <li class="fa fa-apple"></li>
          </ul>
          <div class="description">
            <?php the_sub_field('description') ?>
          </div>
        </article>
      <?php if($i % 3) { ?>
        </div>
        <div class="wrapper">
      <?php $i = 0; } ?>
    <?php $i++; }?>
    </div>
  </div>
</div>
<div class="container-fluid gray">
  <div class="col-md-8 email">
    <?php echo do_shortcode( '[contact-form-7 id="34" title="Contact form 1"]' ); ?>
  </div>
</div>
