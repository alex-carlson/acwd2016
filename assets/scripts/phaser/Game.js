var SideScroller = SideScroller || {};
var score = 0;
var sprite;

SideScroller.Game = function(){};

SideScroller.Game.prototype = {
  preload: function() {
      this.game.time.advancedTiming = true;
    },
  create: function() {
    var newItem;

    //game params
    this.levelSpeed = -250;
    this.tileSize = 32;
    this.probCliff = 0.0;
    this.probVertical = 0.1;
    this.coinProb = 1;

    //initiate groups, we'll recycle elements
    this.floors = this.game.add.group();
    this.floors.enableBody = true;

    for(var i=0; i<36; i++) {
      newItem = this.floors.create(i * this.tileSize, this.game.world.height - this.tileSize, 'floor');
      newItem.body.immovable = true;
      newItem.body.velocity.x = this.levelSpeed;
    }

    //keep track of the last floor
    this.lastFloor = newItem;

    //keep track of the last element
    this.lastCliff = false;
    this.lastVertical = false;

    this.verticalObstacles = this.game.add.group();
    this.verticalObstacles.enableBody = true;
    this.verticalObstacles.createMultiple(12, 'sand');
    this.verticalObstacles.setAll('checkWorldBounds', true);
    this.verticalObstacles.setAll('outOfBoundsKill', true);

    /*for(var i=0; i<12; i++) {
      newItem = this.verticalObstacles.create(null, this.game.world.height - this.tileSize, 'floor');
      newItem.body.immovable = true;
      newItem.body.velocity.x = this.levelSpeed;
    }
*/

    this.coins = this.game.add.group();
    this.coins.enableBody = true;

    //create player
    this.player = this.game.add.sprite(this.game.world.width/2, this.game.world.height - (160 * 2), '3252523425');
    // /this.player.scale.setTo(0.8);

    //enable physics on the player
    this.game.physics.arcade.enable(this.player);

    //player gravity
    this.player.body.gravity.y = 2000;

    this.player.animations.add('run');
    this.player.animations.add('jump');
    this.player.animations.add('fall');

    this.player.anchor.setTo(0.5, 1);

    //the camera will follow the player in the world
    this.game.camera.follow(this.player);

    //move player with cursor keys
    this.cursors = this.game.input.activePointer;

    //sounds
    this.coinSound = this.game.add.audio('coin');

    this.player.play('run', 10, true);
    console.log(this.player.animations);

  },



  update: function() {
    //collision
    this.game.physics.arcade.collide(this.player, this.floors, this.playerHit, null, this);
    this.game.physics.arcade.collide(this.player, this.verticalObstacles, this.playerHit, null, this);
    this.game.physics.arcade.overlap(this.player, this.coins, this.collect, null, this);

    //only respond to keys and keep the speed if the player is alive
    if(this.player.alive) {

      if(this.player.body.touching.down) {
        this.player.body.velocity.x = -this.levelSpeed;
      }
      else {
        this.player.body.velocity.x = 0;
      }


      if(this.cursors.isDown){
        this.playerJump();
      }


      if(this.player.body.touching.down) {
        //this.player.loadTexture('player');
      } else {
        //this.player.loadTexture('playerDuck');
      }

      //restart the game if reaching the edge
      if(this.player.x <= -this.tileSize) {
        this.game.state.start('Game');
      }
      if(this.player.y >= this.game.world.height + this.tileSize) {
        this.game.state.start('Game');
      }
    }

    //generate further terrain
    this.generateTerrain();

  },
  generateTerrain: function(){
    var i, delta = 0, block;
    for(i = 0; i < this.floors.length; i++) {
      if(this.floors.getAt(i).body.x <= -this.tileSize) {

        if(Math.random() < this.probCliff && !this.lastCliff && !this.lastVertical) {
          delta = 1;
          this.lastCliff = true;
          this.lastVertical = false;
        }
        else if(Math.random() < this.probVertical && !this.lastCliff) {
          this.lastCliff = false;
          this.lastVertical = true;
          block = this.verticalObstacles.getFirstExists(false);
          block.reset(this.lastFloor.body.x + this.tileSize, this.game.world.height - 2 * this.tileSize);
          block.body.velocity.x = this.levelSpeed;
          block.body.immovable = true;

          if(Math.random() < this.coinProb){
            this.createCoins();
          }

        }
        else {
          this.lastCliff = false;
          this.lastVertical = false;
        }

        this.floors.getAt(i).body.x = this.lastFloor.body.x + this.tileSize + delta * this.tileSize * 1.5;
        this.lastFloor = this.floors.getAt(i);
        break;
      }
    }
  },
  playerHit: function(player, blockedLayer) {
    //if hits on the right side, die
    if(player.body.touching.right) {

      //this.player = this.game.add.sprite(this.game.world.width/2, this.game.world.height - (160 * 2), '1390140218');

      //this.player.play('fall', 10, true);

      //set to dead (this doesn't affect rendering)
      this.player.alive = false;

      //stop moving to the right
      this.player.body.velocity.x = 0;

      //go to gameover after a few miliseconds
      this.game.time.events.add(1500, this.gameOver, this);
    }
  },
  collect: function(player, collectable) {
    //play audio
    this.coinSound.play();
    score++;

    //remove sprite
    collectable.destroy();
  },
  //create coins
  createCoins: function() {
    var block;

    this.coins.enableBody = true;
    // var result = this.findObjectsByType('coin', this.map, 'objectsLayer');
    // result.forEach(function(element){
    //   this.createFromTiledObject(element, this.coins);
    // }, this);

    this.coins.create(this.game.world.width + this.tileSize, this.game.world.height - 3 * this.tileSize, "goldCoin");

    var result = this.coins;
    result.forEach(function(element){

    block = this.coins.getFirstExists();
    block.body.velocity.x = this.levelSpeed;
    block.body.immovable = true;


    }, this);

  },
  gameOver: function() {
    score = 0;
    this.game.state.start('Game');
  },
  playerJump: function() {
    if(this.player.body.touching.down) {
      this.player.body.velocity.y -= 700;
    }
  },
  render: function()
    {
        //this.game.debug.text(score, 20, 40, "#004b01", "40px Helvetica");
    }
};
