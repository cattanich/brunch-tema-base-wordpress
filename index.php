<?php
// $prefix = 'gg_'; //NO HACE FALTA
$titulosec1 = get_post_meta(get_the_ID(), 'gg_homepage_fold_h1', true);
$subtitulosec1 = get_post_meta(get_the_ID(), 'gg_homepage_fold_subtitle', true);
$imagenfondosec1 = get_post_meta(get_the_id(), 'gg_homepage_fold_backgropund_image', true);
//seccion special offers
$special_items = get_post_meta($post->ID, 'gg_front_page_special_offers', false);
array_shift($special_items);
$specialArgs = [
'post_type' => 'ggspecialoffer',
'posts_per_page' => -1,
'post__in' => $special_items,
];
$special = get_posts($specialArgs);
// Recuperar los ultimos 4 posts del blog
$args = [
'post_type' => 'post',
'posts_per_page' => 4,
];
$blogPosts = get_posts($args);
$args = [
'post_type' => 'ggships',
'posts_per_page' => 2,
];
$barcos = get_posts($args);
$rate = get_post_meta($comment->ID, $prefix . 'testimonial_rate', true);
get_header();
// IMPORTANTE: DUMPEAR TODOS LOS POST-META
// var_dump($barcos);
// var_dump($special);
// var_dump($blogPosts);
// $meta_values = get_post_meta( get_the_ID() ); var_dump( $meta_values );
// echo var_export($GLOBALS['post'], TRUE);
// echo get_posts();
?>
<body class="text-center">
  <!--[if IE]>
  <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <div class="container-fluid px-0">
    <?php get_template_part('nav'); ?>
    <div id="fullpage">
      
      <div id="section1" class="section" style="background-image: url(<?php echo $imagenfondosec1; ?>);">
        <div class="row no-gutters jumbotron h-100 border-bottom-0 pt-5">
          <div class="container my-auto">
            <h1 class="display-3 secondfont titu"><?php echo $titulosec1; ?></h1>
            <p class="lead my-3"><?php echo $subtitulosec1; ?></p>
            <div class="mt-5">
              <span id="moveDown" class="position-sticky">
                <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                  <path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none;stroke:#fff;stroke-width:20px;" />
                  <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style="fill:none;stroke:#fff;stroke-width:20px;" />
                </svg></span>
                <p class="small pt-2">Scroll down</p>
              </div>
            </div>
            
          </div>
        </div>
        <div class="section">
          <div class="shr"></div>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <!-- Slide One - Set the background image for this slide in the line below -->
              <div class="carousel-item active" style="background-image: url('<?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_slide_background_image1', true); ?>')">
                <div class="carousel-caption">
                  <h1 class="display-5 secondfont"><?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_h11', true); ?></h1>
                  <p class="lead"><?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_subtitle1', true); ?></p>
                  <hr class="my-3">
                  <a class="btn btn-primary btn-sm" href="#" role="button">Learn more</a>
                </div>
              </div>
              <!-- Slide Two - Set the background image for this slide in the line below -->
              <div class="carousel-item" style="background-image: url('<?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_slide_background_image2', true); ?>')">
                <div class="carousel-caption">
                  <h1 class="display-5 secondfont"><?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_h12', true); ?></h1>
                  <p class="lead"><?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_subtitle2', true); ?></p>
                  <hr class="my-3">
                  <a class="btn btn-primary btn-sm" href="#" role="button">Learn more</a>
                </div>
              </div>
              <!-- Slide Three - Set the background image for this slide in the line below -->
              <div class="carousel-item" style="background-image: url('<?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_slide_background_image3', true); ?>')">
                <div class="carousel-caption">
                  <h1 class="display-5 secondfont"><?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_h13', true); ?></h1>
                  <p class="lead"><?php echo get_post_meta(get_the_ID(), 'gg_homepage_fold_subtitle3', true); ?></p>
                  <hr class="my-3">
                  <a class="btn btn-primary btn-sm" href="#" role="button">Learn more</a>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class=" fas fa-chevron-circle-left fa-2x" aria-hidden="true"></span>
              <!-- <i class="fas fa-chevron-left"></i> -->
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class=" fas fa-chevron-circle-right fa-2x" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="section2">
          
          <div class="row no-gutters">
            <?php foreach ($barcos as $barco) {
            ?>
            <div class="col-12 col-lg-6 shr">
              <img class="img-fluid w-100" src="<?php echo get_post_meta($barco->ID, 'gg_ship_home_image', true); ?>">
              
              <div class="car-caption">
                <h1 class="display-5 secondfont"><?php echo $barco->post_title; ?> </h1>
                <p class="lead"><?php echo esc_html(get_post_meta($barco->ID, $prefix.'ship_slogan', true)); ?></p>
                <hr class="my-3">
                <?php $excerpt = get_the_excerpt($barco->ID); ?>
                <p class="h6"><?php echo esc_html__(wp_trim_words( $excerpt, '15' , '...' )); ?></p>
                <a class="btn btn-primary " href="<?php echo home_url($barco->post_name); ?>" role="button">Learn more</a>
              </div>
            </div>
            <?php
            } ?>
          </div>
        </div>
        <div class="section2 -mt-1">
          <div class="shr"></div>
          <div class="row no-gutters">
            <div class="col-lg-12 col-xl-6 no-gutters">
              
              <div class="slickcarousel">
                
                <?php
                $specialCounter = 0;
                foreach ($special as $offer ) {
                ?>
                
                <div>
                  <div id="ribbon-naranja" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"> Offers </div>
                  <img class="img-fluid" src="<?= get_the_post_thumbnail_url($offer->ID, 'full'); ?>" alt="<?= $offer->post_title; ?>">
                  <div class="car-caption">
                    <h1 class="display-5 secondfont"><?= $offer->post_title; ?></h1>
                    <p class="lead"><?= esc_html(get_the_excerpt($offer->ID)); ?></p>
                    <hr class="my-3">
                    <a class="btn btn-primary btn-sm" href="#" role="button">Learn more</a>
                  </div>
                  
                </div>
                
                <?php ++$specialCounter;
                } ?>
              </div>
              
            </div>
            <div class="col-lg-12 col-xl-6 no-gutters">
              <div id="ribbon-info" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"> Our Blog </div>
              <div class="row no-gutters">
                <div class="col-md-6 col-sm-12  no-gutters"> <img class="img-fluid" src="<?= get_the_post_thumbnail_url($blogPosts[0]->ID, 'medium_large'); ?>" alt="<?= $blogPosts[0]->post_title; ?>">
                  <div class="carousel-caption">
                    <h5 class="display-x secondfont"><?= $blogPosts[0]->post_title; ?></h5>
                    <!-- <p class="h6 ">The Top 7 Most Interesting Species Found Only in The Galapagos</p> -->
                    <hr class="my-3">
                    <a class="btn btn-warning " href="<?= get_permalink($blogPosts[0]->ID); ?>" title="<?= $blogPosts[0]->post_title; ?>" role="button">Read more</a>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12  no-gutters"> <img class="img-fluid" src="<?= get_the_post_thumbnail_url($blogPosts[1]->ID, 'medium_large'); ?>" alt="<?= $blogPosts[1]->post_title; ?>">
                  <div class="carousel-caption">
                    <h5 class="display-x secondfont"><?= $blogPosts[1]->post_title; ?></h5>
                    <!-- <p class="h6 ">The Top 7 Most Interesting Species Found Only in The Galapagos</p> -->
                    <hr class="my-3">
                    <a class="btn btn-warning " href="<?= get_permalink($blogPosts[1]->ID); ?>" title="<?= $blogPosts[1]->post_title; ?>" role="button">Read more</a>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12  no-gutters"> <img class="img-fluid" src="<?= get_the_post_thumbnail_url($blogPosts[2]->ID, 'medium_large'); ?>" alt="<?= $blogPosts[2]->post_title; ?>">
                  <div class="carousel-caption">
                    <h5 class="display-x secondfont"><?= $blogPosts[2]->post_title; ?></h5>
                    <!-- <p class="h6 ">The Top 7 Most Interesting Species Found Only in The Galapagos</p> -->
                    <hr class="my-3">
                    <a class="btn btn-warning " href="<?= get_permalink($blogPosts[2]->ID); ?>" title="<?= $blogPosts[2]->post_title; ?>" role="button">Read more</a>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12  no-gutters"> <img class="img-fluid" src="<?= get_the_post_thumbnail_url($blogPosts[3]->ID, 'medium_large'); ?>" alt="<?= $blogPosts[3]->post_title; ?>">
                  <div class="carousel-caption">
                    <h5 class="display-x secondfont"><?= $blogPosts[3]->post_title; ?></h5>
                    <!-- <p class="h6 ">The Top 7 Most Interesting Species Found Only in The Galapagos</p> -->
                    <hr class="my-3">
                    <a class="btn btn-warning " href="<?= get_permalink($blogPosts[3]->ID); ?>" title="<?= $blogPosts[3]->post_title; ?>" role="button">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section2">
          
          <?php
          $args = array(
          'post_type' => 'ggtestimonial',
          'posts_per_page' => 5,
          );
          $comments = get_posts($args);
          //var_dump($comments);
          $commentsCount = 0;
          
          ?>
          <div class="row no-gutters">
            
            <div class="col-12 py-3">
              <div class="h2 secondfont">Our customers say</div>
              <div class="comments d-flex">
                <?php
                foreach($comments as $comment){
                $rate = get_post_meta($comment->ID, $prefix . 'testimonial_rate', true);
                if ($commentsCount == 0){
                ?>
                
                <div>
                  <div class="my-3 text-warning">
                    
                    <?php echo draw_stars($rate) ?>
                    
                  </div>
                  <div class="container">
                    
                    <p class="customer-section-comment"><?= esc_html(get_the_excerpt($comment->ID)); ?></p>
                    
                  </div>
                  <div class="">
                    
                    <span class="lead secondary"><?= esc_html(get_the_title($comment->ID)); ?></span>
                    
                  </div>
                </div>
                <?php
                }else{
                ?>
                <div>
                  <div class="my-3 text-danger">
                    
                    <?php echo draw_stars($rate) ?>
                    
                  </div>
                  <div class="container">
                    
                    <p class="customer-section-comment"><?= esc_html(get_the_excerpt($comment->ID)); ?></p>
                    
                  </div>
                  <div class="">
                    
                    <span class="lead secondary"><?= esc_html(get_the_title($comment->ID)); ?></span>
                    
                  </div>
                </div>
                
                <?php
                }
                $commentsCount++;
                } ?>
              </div>
            </div>
          </div>
          
          
          
          <div class="counters" style="background-image: url(<?= get_template_directory_uri() ?>/images/estadisticas-fondo.jpg); ">
            <div class="counter-mask"></div>
            <div class="container statistics">
              <div class="row my-5">
                <div class="col-sm-4 text-center p-3">
                  <span class="fa fa-4x fa-ship"></span>
                  <h4 id="depart" class="mt-3 statistic-value text-center">7632</h4>
                  <span class="counter-name">Ship's Departures</span>
                </div>
                <div class="col-sm-4 text-center p-3">
                  <div id="progress" class="mx-auto">

                  </div>
                  <br />
                  <span class="counter-name">Satisfied Customers</span>
                </div>
                <div class="col-sm-4 text-center p-3">
                  <span class="fa fa-4x fa-calendar"></span>
                  <h4 id="years-old" class="mt-3 statistic-value text-center">35</h4>
                  <span class="counter-name">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <?php get_footer(); ?>