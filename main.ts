namespace SpriteKind {
    export const Cam = SpriteKind.create()
    export const Camara = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    dart2 = sprites.createProjectileFromSprite(img`
        . . . a a . . . 
        . . a 7 7 a . . 
        . . a 1 1 a . . 
        . . a 7 7 a . . 
        . . a d d a . . 
        . . 4 d d 4 . . 
        . . 4 5 5 4 . . 
        . 4 . f f . 4 . 
        `, Nave_2, 0, -150)
})
function Naver_R () {
    Bor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 8 . . . . . . 
        . . . . . . 9 b 9 9 . . . . . . 
        . . . . . 8 b 9 f 8 9 8 . . . . 
        . . . . 8 b b b f f 9 8 8 . . . 
        . . . . b b f 9 b b 9 9 8 . . . 
        . . . . 8 b f f b 9 f 8 9 . . . 
        . . . . . 8 9 9 8 b b 9 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Bor.setVelocity(-50, 0)
    Bor.setPosition(160, randint(5, 1430))
    Bor.setFlag(SpriteFlag.DestroyOnWall, true)
}
function Naves_L () {
    Zero = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . 2 3 2 2 . . . . . . 
        . . . . . e 3 2 f e 2 e . . . . 
        . . . . e 3 3 3 f f 2 e e . . . 
        . . . . 3 3 f 2 3 3 2 2 e . . . 
        . . . . e 3 f f 3 2 f e 2 . . . 
        . . . . . e 2 2 e 3 3 2 . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Zero.setVelocity(50, 0)
    Zero.setPosition(-10, randint(5, 1430))
    Zero.setFlag(SpriteFlag.DestroyOnWall, true)
}
function Meteoritos () {
    Razor = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    Razor.setVelocity(0, 150)
    Razor.setPosition(randint(5, 120), -10)
    Razor.setFlag(SpriteFlag.DestroyOnWall, true)
}
function camara2 () {
    camara = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Camara)
    camara.setPosition(80, 1410)
    camara.vy += -30
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    dart1 = sprites.createProjectileFromSprite(img`
        . . . 8 8 . . . 
        . . 8 2 2 8 . . 
        . . 8 3 3 8 . . 
        . . 8 2 2 8 . . 
        . . 8 d d 8 . . 
        . . 5 d d 5 . . 
        . . 5 3 3 5 . . 
        . 5 . f f . 5 . 
        `, Nave_1, 0, -150)
})
let dart1: Sprite = null
let Razor: Sprite = null
let Zero: Sprite = null
let Bor: Sprite = null
let dart2: Sprite = null
let camara: Sprite = null
let Nave_2: Sprite = null
let Nave_1: Sprite = null
Nave_1 = sprites.create(img`
    . . . . . . . c 4 . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 4 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . c 4 . . . e 4 . . . 4 c . . 
    . . c d . . e e 5 2 . . d c . . 
    . . c d . . e 4 5 2 . . d c . . 
    . . c d . c c c 2 2 2 . d c . . 
    . . c b e e 4 4 4 5 2 2 b c . . 
    . . e f f f c c 2 2 f f 2 2 . . 
    . e e e e 2 2 4 4 4 4 5 4 2 2 . 
    e e e e e e 2 2 4 4 4 5 4 4 2 2 
    e e e e e e 2 2 4 4 4 4 5 4 2 2 
    `, SpriteKind.Player)
Nave_2 = sprites.create(img`
    . . . . . . . c 8 . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 6 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 6 . . . . . . . 
    . . c 8 . . 8 8 9 8 . . 8 c . . 
    . . c d . . 8 6 9 8 . . d c . . 
    . . c d . c c c 8 8 8 . d c . . 
    . . c b 8 8 6 6 6 9 8 8 b c . . 
    . . 8 f f f c c e e f f 8 8 . . 
    . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
    8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
    8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
    `, SpriteKind.Player)
Nave_1.setPosition(60, 1430)
Nave_2.setPosition(100, 1430)
controller.player1.moveSprite(Nave_1)
controller.player2.moveSprite(Nave_2)
camara2()
scene.cameraFollowSprite(camara)
tiles.setTilemap(tilemap`level2`)
game.onUpdate(function () {
    if (Nave_1.y > camara.y + 50) {
        Nave_1.y = camara.y + 50
    }
    if (Nave_2.y > camara.y + 50) {
        Nave_2.y = camara.y + 50
    }
    if (camara.y < 20) {
        camara.vy = 0
        camara.setPosition(80, 60)
    }
})
game.onUpdateInterval(1000, function () {
    if (camara.y > 60) {
        Meteoritos()
        Naves_L()
        Naver_R()
    }
})
