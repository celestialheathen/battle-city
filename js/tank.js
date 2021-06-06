class Tank extends Phaser.GameObjects.Sprite {
  constructor(config) {
      super(config.scene, config.x, config.y, config.key, config.playerId)
     
      this.scene = config.scene
      this.key = config.key

      config.scene.physics.add.existing(this)
      this.body.setCollideWorldBounds(true)

      config.scene.add.existing(this)
      this.setScale(2)

      this.setInteractive({draggable: true})

      this.health = 100

  }

  update(cursors) {
    if (cursors.right.isDown) {
        this.body.setVelocityX(70)
        this.anims.play('right', true)
    }
    else if (cursors.left.isDown) {
        this.body.setVelocityX(-70)
        this.anims.play('left', true)
    }
    else if (cursors.up.isDown) {
        this.body.setVelocityY(-70)
        this.anims.play('up', true)
    }
    else if (cursors.down.isDown) {
        this.body.setVelocityY(70)
        this.anims.play('down', true)
            
    } else {
      this.body.setVelocity(0)
    }

  }

  explode() {
    this.anims.play('explode')
    this.health = 0
    // this.destroy()
  }

}