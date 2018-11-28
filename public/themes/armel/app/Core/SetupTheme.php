<?php

namespace App\Core;

class SetupTheme {
    function __construct() {
        add_action( 'init', array($this, 'setPostTypeSupport') );

        add_action( 'after_setup_theme', array($this, 'setThemeSupport') );

        add_action( 'wp_before_admin_bar_render', array($this, 'updateAdminBar') );
        add_action( 'admin_menu', array($this, 'updateAdminMenu') );

        add_action( 'widgets_init', array( $this, 'widgets' ) );

        add_filter('admin_footer_text', array($this, 'updateAdminFooter') );

        add_action( 'wp_enqueue_scripts', array($this, 'addFiles') );

    }

    function widgets() {
		register_sidebar( array(
			'name'          => esc_html__( 'Event Sidebar', 'theme' ),
			'id'            => 'sidebar-1',
			'description'   => '',
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2 class="display--sidebar widget-title collapse">',
			'after_title'   => '</h2>',
		) );
		register_sidebar( array(
			'name'          => esc_html__( 'Blog Sidebar', 'theme' ),
			'id'            => 'sidebar-2',
			'description'   => '',
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2 class="widget-title" style="display: none;">',
			'after_title'   => '</h2>',
		) );
	}
    /**
     * Set theme support
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/
     */
    function setThemeSupport() {
        load_theme_textdomain( 'Armel', get_template_directory() . '/languages' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'wooocommerce' );
        add_theme_support( 'title-tag' );
        add_theme_support( 'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));
    }

    
    function setPostTypeSupport() {
        remove_post_type_support( 'post', 'comments' );
        remove_post_type_support( 'page', 'comments' );
    }

    function addFiles(){
        // STYLES
        wp_enqueue_style( 'main-css', CSS_URL.'/main.css' );

        // SCRIPTS
        // $this->registerJquery();
        wp_enqueue_script( 'main-js', JS_URL . '/main.js' );
    }

    /**
     * Removes comments from admin menu
     */
    function updateAdminMenu() {
        remove_menu_page( 'edit-comments.php' );
    }

    function updateAdminBar() {
        global $wp_admin_bar;
     	$wp_admin_bar->remove_menu('comments');
    }

    function updateAdminFooter() {
        echo 'Developed by <a href="http://github.com/armelito" target="_blank">Armel Cantin</a>';
    }

    

    
    
}
