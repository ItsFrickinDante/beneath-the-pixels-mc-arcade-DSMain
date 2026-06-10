scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("You Found A Gold Key")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    Level_three()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    BacktoTheTop()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Power_up)
    mySprite.setPosition(42, 200)
})
function Level_three () {
    tiles.setCurrentTilemap(tilemap`level3`)
}
function UnderDepthsStart () {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite.setPosition(57, 61)
}
function BacktoTheTop () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    UnderDepthsStart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    game.gameOver(false)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
let Power_up: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . f f f . f f f f f . . . . 
    f f 3 f f 3 3 3 3 f f . . . 
    f 3 3 1 c 3 3 3 3 3 3 f . . 
    f f 3 3 a 3 3 3 3 3 3 f . . 
    . f a a 3 3 3 3 3 3 3 3 f . 
    . f f f 3 1 3 3 3 4 3 1 f . 
    . f f f f 3 1 3 4 4 e f f . 
    . f f 4 4 f b f 4 4 e f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f 4 d d d d f . . . 
    . . . f e e 4 4 4 e f . . . 
    . . . 4 d d e 3 3 3 f . . . 
    . . . e d d e 3 3 3 f . . . 
    . . . f e e f 6 6 6 f . . . 
    . . . . f f f f f f . . . . 
    . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
scaling.scaleByPercent(mySprite, -10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scene.cameraFollowSprite(mySprite)
Power_up = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . b c c c c c c c b . . . . . 
    . . b c c b b b c c b . . . . . 
    . . b c b c c c b c b . . . . . 
    . . b c b c b c b c b . . . . . 
    . . b c b c c b c c b . . . . . 
    . . b c b c c c c c b . . . . . 
    . . b c c b b b b b c c b . . . 
    . . b c c c c c c c c b . . . . 
    . . . b b b b b b b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let myEnemy = sprites.create(img`
    . . . . . f 7 7 7 f f 2 2 . . . 
    . . . f f f f f f f 1 1 f 9 9 . 
    . b b f 1 1 f f f f 1 1 f f f . 
    . . f f 1 1 f f f f f f f f f . 
    b b f f f f f f f f f f f f b b 
    . f f f f f f f f f f f f f f f 
    . f f 1 1 f f f f f f f f 1 f f 
    9 9 f f 1 1 f f f f f 1 1 1 f f 
    . . f f 1 1 1 1 1 1 1 1 1 f 2 2 
    . . . f f 1 1 1 1 1 1 1 1 f . . 
    . . 2 2 f 1 1 1 1 1 1 f f f . . 
    . . . . f f 1 1 1 1 f 9 9 9 . . 
    . . . . . f f f f f f f . . . . 
    . . . . 7 7 7 f f f b b . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
scaling.scaleByPercent(myEnemy, 29, ScaleDirection.Uniformly, ScaleAnchor.Middle)
myEnemy.startEffect(effects.smiles, 1e+47)
myEnemy.startEffect(effects.trail, 1e+47)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
myEnemy.follow(mySprite, 80)
myEnemy.setPosition(81, 105)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    Power_up.setPosition(132, 99)
    scene.cameraShake(1.3, 500)
})
