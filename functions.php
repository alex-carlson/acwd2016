<?php

class Alpha {

  public function __constructor()
  {

    add_action( 'after_setup_theme', array( $this, 'themeSetup' ));

  }

  public function themeSetup()
  {
    
  }

}

new Alpha;
