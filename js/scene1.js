class Scene1 extends Phaser.Scene {
  constructor() {
      super("scene_1")
  }

  init() {}

  preload() {
    this.load.image('bg', 'assets/map.jpeg')
    this.load.spritesheet('tank', 'assets/general.png', {frameWidth: 16, frameHeight: 16})
  }

  create() {
    this.bg = this.add.image(0,0, 'bg')
    this.bg.setOrigin(0, 0)

    this.anims.create({key: 'idle', frames: this.anims.generateFrameNames('tank', {start: 0, end: 1})})
    this.anims.create({key: 'down', frames: this.anims.generateFrameNames('tank', {start: 4, end: 5})})
    this.anims.create({key: 'left', frames: this.anims.generateFrameNames('tank', {start: 2, end: 3})})
    this.anims.create({key: 'right', frames: this.anims.generateFrameNames('tank', {start: 6, end: 7})})
    this.anims.create({key: 'up', frames: this.anims.generateFrameNames('tank', {start: 0, end: 1})})
    this.anims.create({key: 'explode', frames: this.anims.generateFrameNames('tank', {start: 216, end: 219})})

    this.tank = new Tank({scene: this, x: 300, y: 200, key: 'tank'})

    this.cursors = this.input.keyboard.createCursorKeys()
    this.explodeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE)

  }

  update() {
    this.tank.update(this.cursors)

    if (this.explodeKey.isDown)
      this.tank.explode()
  }


}