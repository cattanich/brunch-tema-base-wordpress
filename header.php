<!doctype html>
<html class="no-js" <?php echo get_language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<!--   <meta name="description" content=""> -->
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title><?php echo get_the_title($post->ID) ?></title>
		<link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/images/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/images/favicon/favicon-16x16.png">
		<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/images/favicon/site.webmanifest">
		<link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon/safari-pinned-tab.svg" color="#5bbad5">
		<?php wp_head() ?>
	</head>