<?php
/**
 * The Template for the sidebar containing the main widget area
 *
 * @package  WordPress
 * @subpackage  Timber
 */

$context = array();
$context['home_left'] = Timber::get_widgets('home_left');
Timber::render(array('pages/sidebar.twig', $context));