class Scene1 extends Phaser.Scene {
  constructor() {
      super("scene_1")
  }

  init() {}

  preload() {
    this.load.image('bg', 'assets/newforest.png')
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

    this.tank = this.add.sprite(300, 200, 'tank')
    this.tank.setScale(2)

    this.cursors = this.input.keyboard.createCursorKeys()

  }

  update() {
    if (this.cursors.right.isDown) {
      this.tank.x += 3 
      this.tank.anims.play('right', true)
    }
    else if (this.cursors.left.isDown) {
        this.tank.x -= 3 
        this.tank.anims.play('left', true)
    }
    else if (this.cursors.up.isDown) {
        this.tank.y -= 3
        this.tank.anims.play('up', true)
    }
    else if (this.cursors.down.isDown) {
        this.tank.y += 3
        this.tank.anims.play('down', true)
        
    } else {

    }
  }


}