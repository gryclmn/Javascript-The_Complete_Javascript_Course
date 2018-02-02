/*
BOOKMARK:
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
*/

/*
SOURCE:
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser
*/

/* Canvas Setup
    Phaser framework automatically generates <canvas>
    Initialize new Phaser.Game object assigning it to the game variable
    Width: 480; Height: 320;
    Phaser.Auto is selecting the rendering method. Phaser will determine between canvas and WebGL
    null is for the id of the canvas. We are depending on Phaser to create the canvas so we assign null here for the id
    Then we assign Phasers three key functions to load and start the game. We simply keep the names as Phaser defines them    
*/
var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});
var ball;
var paddle;
var bricks;
var newBrick;
var brickInfo;
var score = 0;
var lives = 3;
var textStyle = { font: '18px Arial', fill: '#0095DD' };
var scoreText;
var livesText;
var lifeLostText;
var playing = false;
var startButton;

// Preloading assets
function preload() {
    // Phaser.ScaleManager.SHOW_ALL keeps the aspect ratio (black sidebars may result depending on screen size)
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // Align canvas horizontally
    game.scale.pageAlignHorizontally = true;
    // Align canvas vertically
    game.scale.pageAlignVertically = true;
    // Set background color using CSS syntax
    game.stage.backgroundColor = '#eee';
    // Load images, @param name of asset, path for graphic asset
    game.load.image('ball', 'img/ball.png');
    game.load.image('paddle', 'img/paddle.png');
    game.load.image('brick', 'img/brick.png');
    game.load.spritesheet('ball', 'img/wobble.png', 20, 20);
    game.load.spritesheet('button', 'img/button.png', 120, 40);
}

// Create is executed once when everything is loaded and ready
function create() {
    // Initialize Phasers Arcade Physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add and render ball on screen, @param x,y coordinates and asset name
    ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, 'ball');
    // Animate ball with wobble
    ball.animations.add('wobble', [0,1,0,2,0,1,0,2,0], 24);
    paddle = game.add.sprite(game.world.width * 0.5, game.world.height - 5, 'paddle');
    // change anchor of ball to center
    ball.anchor.set(0.5);
    // Change anchor of paddle from default top left corner to middle and bottom
    paddle.anchor.set(0.5, 1);
    // Enable our ball for the physics system
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    // Have ball treat <canvas> boundries as walls
    ball.body.collideWorldBounds = true;
    // Make ball bounce off walls
    ball.body.bounce.set(1);
    // Enable our paddle for the physics system
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    // Set paddle to immovable so it does not move when the ball hits it
    paddle.body.immovable = true;
    // Disable ball's collision with bottom edge
    game.physics.arcade.checkCollision.down = false;
    // Detect if ball goes below bottom edge
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(ballLeaveScreen, this);
    // Call code for drawing bricks
    initBricks();
    // Add score display
    scoreText = game.add.text(5, 5, 'Points: 0', textStyle);
    livesText = game.add.text(game.world.width - 5, 5, 'Lives: ' + lives, textStyle);
    livesText.anchor.set(1,0);
    lifeLostText = game.add.text(game.world.width * 0.5, game.world.height * 0.5, 'Life lost, click to continue', textStyle);
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;
    // Add start button to game
    startButton = game.add.button(game.world.width * 0.5, game.world.height * 0.5, 'button', startGame, this, 1, 0, 2);
    startButton.anchor.set(0.5);
}

// Update is executed on every frame
function update() {
    // Collision detection between paddle and ball
    game.physics.arcade.collide(ball, paddle, ballHitPaddle);
    // Collision detection between bricks and ball, call ballHitBrick() on collision
    game.physics.arcade.collide(ball, bricks, ballHitBrick);
    /* If game is active, set paddle position to input position (mouse or touch),
    default postion to 1/2 world width */
    if (playing) {
        paddle.x = game.input.x || game.world.width * 0.5;
    }
}

// Handle bricks
function initBricks() {
    
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            row: 7,
            col: 3
        },
        offset: {
            top: 50,
            left: 60
        },
        padding: 10
    };
    
    // Group to contain bricks
    bricks = game.add.group();
    // Loop through rows and columns to create each brick
    for (c = 0; c < brickInfo.count.col; c++) {
        for (r = 0; r < brickInfo.count.row; r++) {
            var brickX = (r * (brickInfo.width + brickInfo.padding) ) + brickInfo.offset.left;
            var brickY = (c * (brickInfo.height + brickInfo.padding) ) + brickInfo.offset.top;
            newBrick = game.add.sprite(brickX, brickY, 'brick');
            game.physics.enable(newBrick, Phaser.Physics.ARCADE);
            newBrick.body.immovable = true;
            newBrick.anchor.set(0.5);
            bricks.add(newBrick);
        }
    }
    
}

// Handle ball and brick collisions
function ballHitBrick(ball, brick) {
    // Remove brick from game with a smooth animation "tween"
    var killTween = game.add.tween(brick.scale);
    killTween.to( {x:0, y:0}, 200, Phaser.Easing.Linear.None);
    killTween.onComplete.addOnce(function() {
        brick.kill();
    }, this);
    killTween.start();
    // Animate woble on ball
    ball.animations.play('wobble');
    // Increase score and update display
    score += 10;
    scoreText.setText('Points: ' + score);
    
    // Loop through all bricks and ckeck if each brick is still 'alive'
    var count_alive = 0;
    for (i = 0; i < bricks.children.length; i++) {
        if (bricks.children[i].alive == true) {
            count_alive++;
        }
    }
    
    // If no bricks left alive then display winning message and restart game
    if (count_alive == 0) {
        alert('You won the game, congratulations!');
        location.reload();
    }
}

// Handle ball and paddle collisions
function ballHitPaddle(ball, paddle) {
    // Animate woble on ball
    ball.animations.play('wobble');
    ball.body.velocity.x = -1 * 5  * (paddle.x - ball.x);
}

function ballLeaveScreen() {
    lives--;
    if (lives) {
        livesText.setText('Lives: ' + lives);
        lifeLostText.visible = true;
        ball.reset(game.world.width * 0.5, game.world.height - 25);
        paddle.reset(game.world.width * 0.5, game.world.height - 5);
        // addOnce() adds a one-time listener that is automatically removed after first execution
        game.input.onDown.addOnce(function() {
            lifeLostText.visible = false;
            ball.body.velocity.set(150, -150);
        }, this);
    } else {
        alert('You lost, game over!');
        location.reload();
    }
}

function startGame() {
    startButton.destroy();
    ball.body.velocity.set(150, -150);
    playing = true;
}
