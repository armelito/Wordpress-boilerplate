<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/views/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 */
$context = Timber::get_context();
$context['event_sidebar'] = Timber::get_widgets('sidebar-2');
$args = array(
    // Get post type project
    'post_type' => 'evenements',

    // Get all posts
    'posts_per_page' => -1,
    
    // Order by post date
    'orderby' => array(
        'date' => 'DESC'
    ));
    
$post = Timber::get_posts( $args );
$context['evenement'] = $post;


$templates = array(
    'pages/event.twig'
);

if ( is_front_page() ) {
    array_unshift( $templates, 'pages/home.twig' );
} 

Timber::render( $templates, $context );
