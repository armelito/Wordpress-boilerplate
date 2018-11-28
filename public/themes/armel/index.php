<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 */

if ( ! class_exists( 'Timber' ) ) {
	echo 'Timber not activated. Activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';
	return;
}


$context = Timber::get_context();
$args = array(
    // Get post type project
    'post_type' => 'Évènement',
    // Get all posts
    'posts_per_page' => -1,
    // Gest post by "graphic" category
    'meta_query' => array(
        array(
            'key' => 'Évènemnt_category',
            'value' => 'Évènement',
            'compare' => 'LIKE'
        )
    ),
    // Order by post date
    'orderby' => array(
        'date' => 'DESC'
    ));
    
$post = Timber::get_posts( $args );
$context['evenements'] = Timber::get_posts( $args );



$context['dynamic_sidebar'] = Timber::get_widgets('sidebar-1');
$templates = array( 'pages/home.twig');


if ( is_home() ) {
	array_unshift( $templates, 'pages/article.twig' );
}

Timber::render( $templates, $context);
