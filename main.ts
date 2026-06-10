namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("You Found A Gold Key")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    NPC.sayText("Find a GOLD KEY and I'll show you the exit.", 1000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    Level_three()
})
function Downstairs () {
    tiles.setCurrentTilemap(tilemap`level4`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    BacktoTheTop()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Power_up)
    Girl.setPosition(42, 200)
})
function Level_three () {
    tiles.setCurrentTilemap(tilemap`level3`)
    NPC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.NPC)
}
function UnderDepthsStart () {
    tiles.setCurrentTilemap(tilemap`level2`)
    Girl.setPosition(57, 61)
}
function BacktoTheTop () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    Downstairs()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    UnderDepthsStart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    game.gameOver(false)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
let NPC: Sprite = null
let Power_up: Sprite = null
let Girl: Sprite = null
Girl = sprites.create(img`
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
let Searcher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f . . . . . . . . 
    . . f 1 1 1 1 1 f . . . . . . . 
    . f 1 1 1 1 1 1 1 f . . . . . . 
    . f 1 f 1 1 f 1 1 f . . . . . . 
    . f 1 f 1 1 f 1 1 f . . . . . . 
    . f 1 1 1 1 1 1 1 f f . . . . . 
    . f 1 1 1 1 1 1 1 f f . . . . . 
    . . f 1 1 1 1 1 f f f f . . . . 
    . . f f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . . . . f f f f f . . 
    . . . . . . . . . . . f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Searcher.setPosition(108, 75)
scaling.scaleByPercent(Girl, -10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scene.cameraFollowSprite(Girl)
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
let Glitch = sprites.create(img`
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
scaling.scaleByPercent(Glitch, 29, ScaleDirection.Uniformly, ScaleAnchor.Middle)
Glitch.startEffect(effects.smiles, 1e+47)
Glitch.startEffect(effects.trail, 1e+47)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(Girl)
Glitch.follow(Girl, 80)
Glitch.setPosition(81, 105)
info.setScore(0)
game.onUpdate(function () {
    if (Girl.vx > 1) {
        animation.runImageAnimation(
        Girl,
        [img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 c f f . 
            . f f 4 4 f b f 4 4 f f f . 
            . f f 4 d 4 1 f d d c f . . 
            . . f f f 4 d d d d f . . . 
            . . 4 d d e 4 4 4 e f . . . 
            . . e d d e 3 3 3 3 f . . . 
            . . f e e f 6 6 6 6 f f . . 
            . . f f f f f f f f f f . . 
            . . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 c f f . 
            . f f 4 4 f b f 4 4 f f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f e e d d d f . . . 
            . . . f 4 d d e 4 e f . . . 
            . . . f e d d e 3 3 f . . . 
            . . f f f e e f 6 6 f f . . 
            . . f f f f f f f f f f . . 
            . . . f f . . . f f f . . . 
            `,img`
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 e f f . 
            . f f 4 4 f b f 4 4 e f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f 4 d d d d f . . . 
            . . . f e e 4 4 4 e f . . . 
            . . . 4 d d e 3 3 3 f . . . 
            . . . e d d e 3 3 3 f . . . 
            . . . f e e f 6 6 6 f . . . 
            . . . . f f f f f f . . . . 
            . . . . . f f f . . . . . . 
            `],
        500,
        true
        )
    } else if (Girl.vx < -1) {
        animation.runImageAnimation(
        Girl,
        [img`
            . . . . . . . . . . . . . . 
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f c 4 4 c c c f f f f . 
            . f f f 4 4 f b f 4 3 f f . 
            . . f c d d f 1 4 d 4 f f . 
            . . . f d d d d 4 f f f . . 
            . . . f e 4 4 4 e d d 4 . . 
            . . . f 3 3 3 3 e d d e . . 
            . . f f 6 6 6 6 f e e f . . 
            . . f f f f f f f f f f . . 
            . . . f f f . . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f c 4 4 c c c f f f f . 
            . f f f 4 4 f b f 4 4 f f . 
            . . f f d d f 1 4 d 4 f . . 
            . . . f d d d e e f f f . . 
            . . . f e 4 e d d 4 f . . . 
            . . . f 3 3 e d d e f . . . 
            . . f f 6 6 f e e f f f . . 
            . . f f f f f f f f f f . . 
            . . . f f f . . . f f . . . 
            `,img`
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f e 4 4 c c c f f f f . 
            . f f e 4 4 f b f 4 4 f f . 
            . . f f d d f 1 4 d 4 f . . 
            . . . f d d d d 4 f f f . . 
            . . . f e 4 4 4 e e f . . . 
            . . . f 3 3 3 e d d 4 . . . 
            . . . f 3 3 3 e d d e . . . 
            . . . f 6 6 6 f e e f . . . 
            . . . . f f f f f f . . . . 
            . . . . . . f f f . . . . . 
            `],
        500,
        true
        )
    } else if (Girl.vy < 1) {
        animation.runImageAnimation(
        Girl,
        [img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c c c c c c c f . 
            . f f c c c c c c c c f f . 
            . f f f c c c c c c f f f . 
            . f f f f f f f f f f f f . 
            . . f f f f f f f f f f . . 
            . . e f f f f f f f f e . . 
            . e 4 f f f f f f f f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 c f f . 
            . f f 4 4 f b f 4 4 f f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f e e d d d f . . . 
            . . . f 4 d d e 4 e f . . . 
            . . . f e d d e 3 3 f . . . 
            . . f f f e e f 6 6 f f . . 
            . . f f f f f f f f f f . . 
            . . . f f . . . f f f . . . 
            `,img`
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 e f f . 
            . f f 4 4 f b f 4 4 e f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f 4 d d d d f . . . 
            . . . f e e 4 4 4 e f . . . 
            . . . 4 d d e 3 3 3 f . . . 
            . . . e d d e 3 3 3 f . . . 
            . . . f e e f 6 6 6 f . . . 
            . . . . f f f f f f . . . . 
            . . . . . f f f . . . . . . 
            `],
        500,
        true
        )
    } else if (Girl.vy > -1) {
        animation.runImageAnimation(
        Girl,
        [img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f c 4 4 c c c f f f f . 
            . f f f 4 4 f b f 4 4 f f . 
            . . f f d d f 1 4 d 4 f . . 
            . . . f d d d e e f f f . . 
            . . . f e 4 e d d 4 f . . . 
            . . . f 3 3 e d d e f . . . 
            . . f f 6 6 f e e f f f . . 
            . . f f f f f f f f f f . . 
            . . . f f f . . . f f . . . 
            `,img`
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f e 4 4 c c c f f f f . 
            . f f e 4 4 f b f 4 4 f f . 
            . . f f d d f 1 4 d 4 f . . 
            . . . f d d d d 4 f f f . . 
            . . . f e 4 4 4 e e f . . . 
            . . . f 3 3 3 e d d 4 . . . 
            . . . f 3 3 3 e d d e . . . 
            . . . f 6 6 6 f e e f . . . 
            . . . . f f f f f f . . . . 
            . . . . . . f f f . . . . . 
            `],
        500,
        true
        )
    }
})
game.onUpdateInterval(2000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    Searcher.setVelocity(randint(-70, 70), randint(-50, 50))
})
forever(function () {
    Power_up.setPosition(132, 99)
    scene.cameraShake(1.3, 500)
})
