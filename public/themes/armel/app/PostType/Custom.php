<?php
/**
 * Exemple of a custom post type declaration
 */
namespace App\PostType;

class Custom {
    protected $post_type = 'posttype';

    function __construct() {
        add_action( 'init', array($this, 'registerPostType') );
        add_action( 'init', array($this, 'registerTaxonomies') );
    }

    function registerPostType() {
        $post_type_support='evenements';

        $labels = array(
            'name'               => __( 'Post types', 'Armel' ),
            'singular_name'      => __( 'Post type', 'Armel' ),
            'all_items'          => __( 'All posttypes', 'Armel' ),
            'add_new'            => __( 'Add a posttype', 'Armel' ),
            'add_new_item'       => __( 'Add a posttype', 'Armel' ),
            'edit_item'          => __( 'Edit posttype',  'Armel' ),
            'new_item'           => __( 'New posttype', 'Armel' ),
            'view_item'          => __( 'View posttype',  'Armel' ),
            'search_items'       => __( 'Find a posttype',  'Armel' ),
            'not_found'          => __( 'No result', 'Armel' ),
            'not_found_in_trash' => __( 'No result', 'Armel' ),
            'parent_item_colon'  => __( 'Parent posttype:',  'Armel' ),
            'menu_name'          => __( 'Projects',  'Armel' ),
        );

        $args = array(
            'labels'              => $labels,
            'hierarchical'        => false,
            'supports'            => array( 'title','thumbnail','editor' ),
            'public'              => true,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'menu_position'       => 5,
            'menu_icon'           => 'dashicons-media-document',
            'show_in_nav_menus'   => true,
            'publicly_queryable'  => true,
            'exclude_from_search' => false,
            'has_archive'         => false,
            'query_var'           => true,
            'can_export'          => true,
            'rewrite'             => array( 'slug' => $this->post_type )
        );

        register_post_type($this->post_type, $args );
    }

    function registerTaxonomies() {
        // Project Type
        register_taxonomy(
            'type',
            array($this->post_type),
            array(
                'label' => __( 'Lieux', 'Armel' ),
                'rewrite' => array( 'slug' => 'type' ),
                'hierarchical' => true,
                'show_admin_column' => true,
            )
        );

        // Language and technology used
        register_taxonomy(
            'technology',
            array($this->post_type),
            array(
                'label' => __( 'Date', 'Armel' ),
                'rewrite' => array( 'slug' => 'technology' ),
                'hierarchical' => true,
                'show_admin_column' => true,
            )
        );
    }
}

