var SideScroller = SideScroller || {};

//loading the game assets
SideScroller.Preload = function(){};

SideScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    // this.preloadBar.anchor.setTo(0.5);
    // this.preloadBar.scale.setTo(3);

    //this.load.setPreloadSprite(this.preloadBar);
    this.cursors = this.game.input.pointer1.isDown;

    //load game assets
    this.load.image('player', mylocalizedscript.myurl+'/dist/scripts/phaser/assets/images/run_anim.png');
    this.load.spritesheet('3252523425', mylocalizedscript.myurl+'/dist/scripts/phaser/assets/images/run_anim.png', 40, 64, 6);
    this.load.image('playerDuck', mylocalizedscript.myurl+'/dist/scripts/phaser/assets/images/run_anim.png');
    this.load.image('playerDead', mylocalizedscript.myurl+'/dist/scripts/phaser/assets/images/player_dead.png');
    this.load.image('goldCoin', mylocalizedscript.myurl+'/dist/scripts/phaser/assets/images/pizza.png');
    this.load.image('floor', mylocalizedscript.myurl+'/dist/scripts/phaser/assets/images/grass.png');
    this.load.image('sand', mylocalizedscript.myurl+'/dist/scripts/phaser/assets/images/poop.png');
    this.load.audio('coin', mylocalizedscript.myurl+'/dist/scripts/phaser/assets/audio/coin.wav');
  },
  update: function(){
    if(this.cursors){
      this.state.start('Game');
    }
  }
};
