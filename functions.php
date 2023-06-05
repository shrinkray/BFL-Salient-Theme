<?php 

add_action( 'wp_enqueue_scripts', 'salient_child_enqueue_styles', 100);

function salient_child_enqueue_styles() {
		
		$nectar_theme_version = nectar_get_theme_version();
    wp_enqueue_style( 'salient-child-style', get_stylesheet_directory_uri() . '/style.css', '', $nectar_theme_version );

    if ( is_rtl() ) {
        wp_enqueue_style(  'salient-rtl',  get_template_directory_uri(). '/rtl.css', array(), '1', 'screen' );
    }
}

// Enqueue child theme styles and scripts
function child_theme_styles() {

    wp_enqueue_style( 'bfl-style', get_stylesheet_directory_uri() . '/dist/app.css', array(), wp_get_theme()->get('Version') );

}
add_action( 'wp_enqueue_scripts', 'child_theme_styles', 9999 );

function child_theme_scripts() {

    wp_enqueue_script( 'bfl-scripts', get_stylesheet_directory_uri() . '/dist/app.js', array('jquery'), true );

}
add_action( 'wp_enqueue_scripts', 'child_theme_scripts' );

/**
 * ACF STYLES
 * Add a few styles to aid use of ACF in this theme
 * @return void
 *
 */

function my_acf_admin_head() {
    ?>
    <style>

        .acf-repeater.-block > table > tbody > tr > td {
            border-top: #8cb1ff solid 2px;
        }
        .acf-repeater.-block > table > tbody > tr:nth-child(even) > td:nth-child(2) {
            background-color: #f3f6ff;
        }
        .acf-row-number {
            padding: 4px 8px;
            background: white;
            border-radius: 50%;
            color: #0052fc;
        }
    </style>
    <?php
}

add_action('acf/input/admin_head', 'my_acf_admin_head');