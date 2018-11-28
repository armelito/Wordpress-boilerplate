<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */
$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['sidebar_2'] = Timber::get_widgets('sidebar-2');

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'pages/single-password.twig', $context );
} else {
	Timber::render(array( 'pages/single-evenements' . $post->ID . '.twig', 'pages/single-evenements' . $post->post_type . '.twig', 'pages/single-evenements.twig' ), $context);
}
