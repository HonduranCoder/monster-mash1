import Phaser from 'phaser'

// import HelloWorldScene from './scenes/HelloWorldScene'
import GameScene from './scenes/GameScene'

const config = {
	type: Phaser.AUTO,
	width: 1280,
	height: 800,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [GameScene]
}

export default new Phaser.Game(config)
