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

    this.tank = this.add.sprite(300, 200, 'tank')
    this.tank.setScale(2)
  }

  update() {}


}