import { Scene } from "phaser";

export default class AuctionBattleScene extends Scene {

    preload = () => {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create = () => {
        const parent = document.getElementById('aution-battle');
        const width = parent.parentElement.clientWidth;
        const height = parent.parentElement.clientHeight;

        // this will make the image fill the background;
        const background = this.add.image(0, 0, 'sky').setOrigin(0).setDisplaySize(width, height);

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }

}