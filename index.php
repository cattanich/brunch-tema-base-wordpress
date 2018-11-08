<?php get_header(); ?>
<body class="text-center">
  <!--[if IE]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
  <!-- Image and text -->
  <div class="container-fluid px-0">
      <!-- MENÚ NAVEGACIÓN -->
  <div class="navbar fixed-top navbar-expand-md parabg p-5">
  </div>
  <div class="collapse" id="collapseExample">
    <div class="container fixed-top pt-3 mt-0 animated bounceInLeft d-none d-lg-block">
      <div class="row">
        <div class="col">
          <img src="../images/logogo.png" alt="Kitten" />
        </div>
        <div class="col-6 pt-3">
          <input class="form-control form-control-lg " type="search" placeholder="Search...">
        </div>
        <div class="col pt-3 ">
          <button class="btn btn-lg btn-secondary" type="submit">Search</button>
        </div>
        <div class="col pt-4">
          <a id="diss" class="hvr-underline-reveal" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-undo fa-lg text-light"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="container fixed-top pt-1 mt-0 animated bounceInLeft d-lg-none">
      <div class="row">
        <div class="col">
          <img src="../images/logogo.png" alt="Kitten" />
        </div>
      </div>
      <div class="row bg-dark pb-2">
        <div class="col-6 pt-2">
          <input class="form-control " type="search" placeholder="Search...">
        </div>
        <div class="col pt-2 ">
          <button class="btn btn-secondary" type="submit">Search</button>
          <a id="diss2" class="px-3" type="" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-undo fa-lg text-light"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <nav id="mimenu" class="navbar fixed-top navbar-expand-md navbar-dark esconder animated fadeInDown fast">
    <a class="navbar-brand d-md-none" href="#"><img src="../images/logogowhite.png"></a>
    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-md-flex d-block w-100 bg-nav">
      <div class="collapse navbar-collapse mx-auto w-auto justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li class="nav-item dropdown"> <a class="hvr-underline-from-center nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ABOUT GALAPAGOS </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Islands</a></li>
              <li><a class="dropdown-item" href="#">Animals</a></li>
              <div class="dropdown-divider"></div>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">More Information</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">The Galapagos Experience</a></li>
                  <li><a class="dropdown-item" href="#">Weather</a></li>
                  <li><a class="dropdown-item" href="#">Darwin</a></li>
                  <li><a class="dropdown-item" href="#">Human History</a></li>
                  <li><a class="dropdown-item" href="#">Related Blogs</a></li>
                  <li><a class="dropdown-item" href="#">110 Fun Facts</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown"> <a class="hvr-underline-from-center nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> GALAPAGOS CRUISES </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Why Cruise with US</a></li>
              <li><a class="dropdown-item" href="#">Activities</a></li>
              <li><a class="dropdown-item" href="#">Guides</a></li>
              <div class="dropdown-divider"></div>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Legend</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">On board amenities</a></li>
                  <li><a class="dropdown-item" href="#">Cabins</a></li>
                  <li><a class="dropdown-item" href="#">Itineraries</a></li>
                  <li><a class="dropdown-item" href="#">Deck Plan</a></li>
                  <li><a class="dropdown-item" href="#">Specs</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Coral Yatchs</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">On board amenities</a></li>
                  <li><a class="dropdown-item" href="#">Cabins</a></li>
                  <li><a class="dropdown-item" href="#">Itineraries</a></li>
                  <li><a class="dropdown-item" href="#">Deck Plan</a></li>
                  <li><a class="dropdown-item" href="#">Specs</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <!-- <a data-menuanchor="about-galapagos" class="hvr-underline-from-center nav-item nav-link" href="#about-galapagos">ABOUT GALAPAGOS<span class="sr-only">(current)</span></a> -->
          <!--     <a data-menuanchor="galapagos-cruises" class="hvr-underline-from-center nav-item nav-link" href="#galapagos-cruises">GALAPAGOS CRUISES</a> -->
          <a class="animated fadeInDown  navbar-brand mx-2 d-none d-md-inline active" href="#">
            <div id="scrlfade" style="background-image: url(../images/logogowhite.png);">
              <img src="../images/logogo.png" alt="Kitten" />
            </div>
          </a>
          <!-- <a data-menuanchor="ecuador&south-américa" class="hvr-underline-from-center nav-item nav-link" href="#ecuador&south-américa">ECUADOR & SOUTH AMERICA</a> -->
          <li class="nav-item dropdown"> <a class="hvr-underline-from-center nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ECUADOR & SOUTH AMERICA </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">About Ecuador</a></li>
              <li><a class="dropdown-item" href="#">Special Interest</a></li>
              <li><a class="dropdown-item" href="#">Paquetes Best Seller</a></li>
              <li><a class="dropdown-item" href="#">South America</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown"> <a  class="hvr-underline-from-center nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT US</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Contact Us</a></li>
              <li><a class="dropdown-item" href="#">FAQ</a></li>
              <li><a class="dropdown-item" href="#">Blog</a></li>
            </ul>
          </li>
          <!--               <a class="hvr-icon-down hvr-underline-from-center nav-item nav-link" href="#"><i class="fa fa-search fa-lg hvr-icon"></i>
</a> -->
          <a class="nav-item nav-link pt-4" type="" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-search fa-lg"></i>
          </a>
          <!-- <a data-menuanchor="home" class="nav-item nav-link" href="#">Pricing</a> -->
          <!--   <a data-menuanchor="home" class="nav-item nav-link disabled" href="#">Disabled</a> -->
        </div>
      </div>
    </div>
  </nav>
  <!-- MENÚ NAVEGACIÓN -->
    <div id="fullpage">
 
      <div id="section1" class="section" style="background-image: url(../images/bckfold2.jpg);">
        <!--      <div class="container-fluid"> -->
        <!--             <div class="jumbotron-fluid">
  <h1 class="display-4"style="font-family: Yeseva One" >Galapagos Cruises</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">

  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div> -->
        <div class="row no-gutters jumbotron h-100 border-bottom-0 pt-5">
          <div class="container my-auto">
            <h1 class="display-3 secondfont titu">Galapagos Cruises</h1>
            <p class="lead my-3">Join us in an unforgettable adventure.</p>
            <div class="mt-5">
              <span id="moveDown" class="position-sticky">
                <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                  <path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none;stroke:#fff;stroke-width:20px;" />
                  <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style="fill:none;stroke:#fff;stroke-width:20px;" />
                </svg></span>
              <p class="small pt-2">Scroll down</p>
            </div>
          </div>
          <!-- <i class="fas fa-chevron-circle-down fa-lg"></i> -->
        </div>
      </div>
      <div class="section">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <!-- Slide One - Set the background image for this slide in the line below -->
            <div class="carousel-item active" style="background-image: url('../images/get-in-love-default-background.jpg')">
              <div class="carousel-caption">
                <h1 class="display-5 secondfont">The Go Galapagos Experience</h1>
                <p class="lead">Together, we will cruise through crystal clear waters, to explore untouched settings among fearless wildlife in a sunny place where natural beauty overflows inland and underwater.</p>
                <hr class="my-3">
                <a class="btn btn-primary btn-sm" href="#" role="button">Learn more</a>
              </div>
            </div>
            <!-- Slide Two - Set the background image for this slide in the line below -->
            <div class="carousel-item" style="background-image: url('../images/Activities-home.jpg')">
              <div class="carousel-caption">
                <h1 class="display-5 secondfont">Activities</h1>
                <p class="lead">Make the best out of every excursion by joining in different activities we offer on shore and in water to enjoy the islands to the fullest.</p>
                <hr class="my-3">
                <a class="btn btn-primary btn-sm" href="#" role="button">Learn more</a>
              </div>
            </div>
            <!-- Slide Three - Set the background image for this slide in the line below -->
            <div class="carousel-item" style="background-image: url('../images/service-home.jpg')">
              <div class="carousel-caption">
                <h1 class="display-5 secondfont">Service</h1>
                <p class="lead">Personalized services and attention to detail in all our vessels, is what we are all about. We will do our best to show our guest the finest Ecuadorian hospitality.</p>
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
          <div class="col-12 col-lg-6">
            <img class="img-fluid w-100" src="../images/Legend-Home.jpg">
            <div class="car-caption">
              <h1 class="display-5 secondfont">Galapagos Legend</h1>
              <p class="lead">Boutique Expedition Cruise Ship.</p>
              <hr class="my-3">
              <p class="d-none d-md-block">chxackhckjahc kjahcjahckjahsckajs kajshx kjahsxk ajhsxkajshxaslxakjslckasjc as axlkajsxlaksjx ax as xlakxjalsx asxl</p>
              <a class="btn btn-primary " href="#" role="button">Learn more</a>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <img class="img-fluid w-100" src="../images/Coral-Home.jpg">
            <div class="car-caption">
              <h1 class="display-5 secondfont">Coral I & Coral II</h1>
              <p class="lead">Expedition Yachts.</p>
              <hr class="my-3">
              <p class="d-none d-md-block">chxackhckjahc kjahcjahckjahsckajs kajshx kjahsxk ajhsxkajshxaslxakjslckasjc as axlkajsxlaksjx ax as xlakxjalsx asxl</p>
              <a class="btn btn-primary" href="#" role="button">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <!--           <div class="section2">
            <div class="row no-gutters">
              <div class="col"><img class="img-fluid" src="../images/Legend-Home.jpg"></div>
                <div class="col">
                  <div class="row no-gutters">
                    <div class="col"><img class="img-fluid" src="../images/Legend-Home.jpg"></div>
                      <div class="col"><img class="img-fluid" src="../images/Legend-Home.jpg"></div>
                      </div>
                      <div class="row no-gutters">
                        <div class="col"><img class="img-fluid" src="../images/Legend-Home.jpg"></div>
                          <div class="col"><img class="img-fluid" src="../images/Legend-Home.jpg"></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
      <div class="section2 -mt-1">
        <div class="row no-gutters">
          <div class="col-xl-6 no-gutters h100">
            <img class="img-fluid" src="../images/airplane-wing.jpg">
            <div class="car-caption">
              <h1 class="display-5 secondfont">Free Domestic Round-trip air ticket</h1>
              <p class="lead d-none d-md-block">from Quito or Guayaquil to the Galapagos Save up to US$ 449 approx. per person</p>
              <hr class="my-3">
              <a class="btn btn-primary " href="#" role="button">Request a Quote</a>
            </div>
          </div>
          <div class="col-xl-6 no-gutters">
            <div class="row no-gutters">
              <div class="col-md-6 col-sm-12 h100 no-gutters"> <img class="img-fluid" src="http://10.100.1.21:8080/test/wp-content/uploads/2018/08/Galapagos_Animals_Marine_Iguana.jpg" alt="The Top 7 Most Interesting Species Found Only in The Galapagos">
                <div class="car-caption">
                  <h4 class="display-x secondfont">The Top 7 Most Interesting Species Found Only in The Galapagos</h4>
                  <p class="lead d-none d-md-block">The Top 7 Most Interesting Species Found Only in The Galapagos</p>
                  <hr class="my-3">
                  <a class="btn btn-primary " href="#" role="button">Learn more</a>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 h100 no-gutters"> <img class="img-fluid" src="http://10.100.1.21:8080/test/wp-content/uploads/2018/08/Galapagos_Tours-Adventure-768x513.jpg" alt="An Adventure Seeker's Guide to Touring the Galapagos">
                <div class="car-caption">
                  <h4 class="display-5 secondfont">Galapagos Legend</h4>
                  <p class="lead d-none d-md-block">Boutique Expedition Cruise Ship.</p>
                  <hr class="my-3">
                  <a class="btn btn-primary " href="#" role="button">Learn more</a>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 h100 no-gutters"> <img class="img-fluid" src="http://10.100.1.21:8080/test/wp-content/uploads/2018/08/Galapagos_Vacations-Experience.jpg" alt="The Galapagos Experience: What it is and Why You Need to Have it">
                <div class="car-caption">
                  <h4 class="display-5 secondfont">Galapagos Legend</h4>
                  <p class="lead d-none d-md-block">Boutique Expedition Cruise Ship.</p>
                  <hr class="my-3">
                  <a class="btn btn-primary " href="#" role="button">Learn more</a>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 h100 no-gutters"> <img class="img-fluid" src="http://10.100.1.21:8080/test/wp-content/uploads/2018/08/Galapagos_Luxury_Cruise-versus-Caribbean-cruise-768x510.jpg" alt="Galapagos Cruises vs. Caribbean Cruises">
                <div class="car-caption">
                  <h4 class="display-5 secondfont">Galapagos Legend</h4>
                  <p class="lead d-none d-md-block">Boutique Expedition Cruise Ship.</p>
                  <hr class="my-3">
                  <a class="btn btn-primary " href="#" role="button">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-sm-6 h100 nopadding">
  <img class="img-fluid" src="http://10.100.1.21:8080/test/wp-content/uploads/2018/08/Galapagos_Vacations-Experience.jpg" alt="The Galapagos Experience: What it is and Why You Need to Have it">
</div> -->
      <div class="section2">
        <div class="row no-gutters customers">
          <img class="img-fluid w-100" src="../images/stats_ejemplo.png" alt="">
        </div>
        <div class="row no-gutters">
          <img class="img-fluid w-100 blur" src="../images/estadisticas-fondo.jpg" alt="">
        </div>
      </div>
      <div class="section2">
      </div>
      <div class="sectionw">
        <!--             <div class="video-container">
                        <video autoplay loop muted class="video-bg" id="video-bg">

                          <source src="../images/klein_tours_03_corto.webmsd.webm" type="video/webm" alt="HTML5 background video">
              </video>
              <video src="../images/klein_tours_03_corto.mp4" type="video/mp4" playsinline></video>
            </div> -->
      </div>
    </div>
  </div>

  <?php if ( have_posts() ) : ?>
<?php while ( have_posts() ) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="post-header">
       <div class="date"><?php the_time( 'M j y' ); ?></div>
       <h2><a href="<?php the_permalink(); ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
       <div class="author"><?php the_author(); ?></div>
    </div><!--end post header-->
    <div class="entry clear">
       <?php if ( function_exists( 'add_theme_support' ) ) the_post_thumbnail(); ?>
       <?php the_content(); ?>
       <?php edit_post_link(); ?>
       <?php wp_link_pages(); ?> </div>
    <!--end entry-->
    <div class="post-footer">
       <div class="comments"><?php comments_popup_link( 'Leave a Comment', '1 Comment', '% Comments' ); ?></div>
    </div><!--end post footer-->
    </div><!--end post-->
<?php endwhile; /* rewind or continue if all posts have been fetched */ ?>
    <div class="navigation index">
       <div class="alignleft"><?php next_posts_link( 'Older Entries' ); ?></div>
       <div class="alignright"><?php previous_posts_link( 'Newer Entries' ); ?></div>
    </div><!--end navigation-->
<?php else : ?>
<?php endif; ?>

<?php get_footer(); ?>