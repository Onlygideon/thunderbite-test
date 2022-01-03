const header = document.querySelector('#header');

const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x413387;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'fixed';

header.appendChild(app.view);


// display  images in container by trensforming it to a texture then to a sprite and bringing it on the stage
const container = new PIXI.Container();

const vegasTexture = PIXI.Texture.from('./showdown/vegas@2x.png');
const vegasSprite = new PIXI.Sprite(vegasTexture);
container.addChild(vegasSprite);

const slotsTexture = PIXI.Texture.from('./showdown/slots@2x.png');
const slotsSprite = new PIXI.Sprite(slotsTexture);
container.addChild(slotsSprite);

// S
const sTexture = PIXI.Texture.from('./showdown/1.png');
const sSprite = new PIXI.Sprite(sTexture);
container.addChild(sSprite);

// H
const hTexture = PIXI.Texture.from('./showdown/2.png');
const hSprite = new PIXI.Sprite(hTexture);
container.addChild(hSprite);

// O
const oTexture = PIXI.Texture.from('./showdown/3.png');
const oSprite = new PIXI.Sprite(oTexture);
container.addChild(oSprite);

// W
const wTexture = PIXI.Texture.from('./showdown/4.png');
const wSprite = new PIXI.Sprite(wTexture);
container.addChild(wSprite);

// D
const dTexture = PIXI.Texture.from('./showdown/5.png');
const dSprite = new PIXI.Sprite(dTexture);
container.addChild(dSprite);

// O2
const o2Texture = PIXI.Texture.from('./showdown/6.png');
const o2Sprite = new PIXI.Sprite(o2Texture);
container.addChild(o2Sprite);

// W2
const w2Texture = PIXI.Texture.from('./showdown/7.png');
const w2Sprite = new PIXI.Sprite(w2Texture);
container.addChild(w2Sprite);

// N
const nTexture = PIXI.Texture.from('./showdown/8.png');
const nSprite = new PIXI.Sprite(nTexture);
container.addChild(nSprite);

const mustDropTexture = PIXI.Texture.from('./showdown/must_drop.png');
const mustDropSprite = new PIXI.Sprite(mustDropTexture);
container.addChild(mustDropSprite);

app.stage.addChild(container);

// images position and size settings
// Vegas
vegasSprite.x = 120;
vegasSprite.y = 80;
vegasSprite.width = 500;

// Slots
slotsSprite.x = 600;
slotsSprite.y = 80;
slotsSprite.width = 500;

//S
sSprite.x = 20;
sSprite.y = 100;
sSprite.width = 350;
sSprite.height = 380;

// H
hSprite.x = 160;
hSprite.y = 110;
hSprite.width = 350;
hSprite.height = 380;

// O
oSprite.x = 370;
oSprite.y = 90;
oSprite.width = 110;
oSprite.height = 410;

// W
wSprite.x = 410;
wSprite.y = 100;
wSprite.width = 280;
wSprite.height = 360;

// D
dSprite.x = 545;
dSprite.y = 90;
dSprite.width = 300;
dSprite.height = 360;

// O
o2Sprite.x = 660;
o2Sprite.y = 100;
o2Sprite.width = 280;
o2Sprite.height = 340;

// W2
w2Sprite.x = 765;
w2Sprite.y = 100;
w2Sprite.width = 280;
w2Sprite.height = 370;

// N
nSprite.x = 890;
nSprite.y = 100;
nSprite.width = 300;
nSprite.height = 370;

// Must drop jackpot
mustDropSprite.x = 290;
mustDropSprite.y = 300;
mustDropSprite.width = 650;
mustDropSprite.height = 200;



// lightning bolt image animation
const loader = PIXI.Loader.shared;

loader.add('tileset', './showdown/bolt.json')
.load(setup);

function setup(loader, resources) {
    const textures = [];
    for(let i = 1; i < 3; i++) {
        const texture = PIXI.Texture.from(`bolt${i}.png`);
        textures.push(texture);
    }

    const bolt = new PIXI.AnimatedSprite(textures);
    bolt.x = 575;
    bolt.y = 15;
    bolt.width = 180;
    bolt.height = 210;

    // Bolt Responsiveness
    if(window.innerWidth < 1098) {
        bolt.x = 440;
        bolt.y = 255;
    }

    if(window.innerWidth < 898) {
        bolt.x = 305;
        bolt.y = 190;
        bolt.width = 150;
    }

    if(window.innerWidth < 698) {
        bolt.x = 220;
        bolt.y = 120;
        bolt.width = 90;
        bolt.height = 155;
    }

    if(window.innerWidth < 498) {
        bolt.x = 170;
        bolt.y = 135;
        bolt.width = 80;
        bolt.height = 135;
    
    }

    if(window.innerWidth < 400) {
        bolt.x = 155;
    
    }

    if(window.innerWidth < 365) {
        bolt.x = 145;
    
    }

    if(window.innerWidth < 350) {
        bolt.x = 133;
        bolt.y = 90;
        bolt.width = 60;
        bolt.height = 115;
    
    }

    app.stage.addChild(bolt);
    
    bolt.play();
    bolt.animationSpeed = 0.1;
}

// Responsiveness on different screen sizes
if(window.innerWidth < 1098) {
    vegasSprite.x = 130;
    vegasSprite.y = 265;
    vegasSprite.width = 320;
    vegasSprite.height= 220;

    slotsSprite.x = 500;
    slotsSprite.y = 265;
    slotsSprite.width = 320;
    slotsSprite.height = 220;

    //S
    sSprite.x = 15 ;
    sSprite.y = 340;
    sSprite.width = 220;
    sSprite.height = 500;

    // H
    hSprite.x = 105;
    hSprite.y = 345;
    hSprite.width = 250;
    hSprite.height = 490;

    // O
    oSprite.x = 255;
    oSprite.y = 325;
    oSprite.width = 100;
    oSprite.height = 530;

    // W
    wSprite.x = 310;
    wSprite.y = 315;
    wSprite.width = 210;
    wSprite.height = 520;

    // D
    dSprite.x = 410;
    dSprite.y = 320;
    dSprite.width = 250;
    dSprite.height = 490;

    // O2
    o2Sprite.x = 510;
    o2Sprite.y = 320;
    o2Sprite.width = 230;
    o2Sprite.height = 520;

    // W2
    w2Sprite.x = 615;
    w2Sprite.y = 310;
    w2Sprite.width = 170;
    w2Sprite.height = 600;

    // N
    nSprite.x = 680;
    nSprite.y = 320;
    nSprite.width = 250;
    nSprite.height = 570;


    mustDropSprite.x = 188;
    mustDropSprite.y = 630;
    mustDropSprite.width = 550;
    mustDropSprite.height = 200;
}

if(window.innerWidth < 798) {
    vegasSprite.x = 90;
    vegasSprite.y = 200;
    vegasSprite.width = 210;
    vegasSprite.height= 210;

    slotsSprite.x = 350;
    slotsSprite.y = 200;
    slotsSprite.width = 210;
    slotsSprite.height = 210;

    //S
    sSprite.x = 20;
    sSprite.y = 260;
    sSprite.width = 150;
    sSprite.height = 450;

    // H
    hSprite.x = 85;
    hSprite.y = 265;
    hSprite.width = 150;
    hSprite.height = 450;

    // O
    oSprite.x = 180;
    oSprite.y = 260;
    oSprite.width = 70;
    oSprite.height = 450;

    // W
    wSprite.x = 220;
    wSprite.y = 270;
    wSprite.width = 140;
    wSprite.height = 400;

    // D
    dSprite.x = 290;
    dSprite.y = 265;
    dSprite.width = 150;
    dSprite.height = 390;

    // O2
    o2Sprite.x = 350;
    o2Sprite.y = 265;
    o2Sprite.width = 150;
    o2Sprite.height = 400;

    // W2
    w2Sprite.x = 415;
    w2Sprite.y = 260;
    w2Sprite.width = 130;
    w2Sprite.height = 450;

    // N
    nSprite.x = 470;
    nSprite.y = 275;
    nSprite.width = 170;
    nSprite.height = 420;


    mustDropSprite.x = 155;
    mustDropSprite.y = 510;
    mustDropSprite.width = 350;
    mustDropSprite.height = 150;
}

if(window.innerWidth < 698) {
    vegasSprite.x = 80;
    vegasSprite.y = 150;
    vegasSprite.width = 120;
    vegasSprite.height= 120;

    slotsSprite.x = 220;
    slotsSprite.y = 148;
    slotsSprite.width = 120;
    slotsSprite.height = 120;

    //S
    sSprite.x = 35;
    sSprite.y = 180;
    sSprite.width = 100;
    sSprite.height = 280;

    // H
    hSprite.x = 78;
    hSprite.y = 175;
    hSprite.width = 92;
    hSprite.height = 305;

    // O
    oSprite.x = 133;
    oSprite.y = 170;
    oSprite.width = 35;
    oSprite.height = 310;

    // W
    wSprite.x = 152;
    wSprite.y = 175;
    wSprite.width = 70;
    wSprite.height = 280;

    // D
    dSprite.x = 180;
    dSprite.y = 175;
    dSprite.width = 100;
    dSprite.height = 270;

    // O2
    o2Sprite.x = 220;
    o2Sprite.y = 175;
    o2Sprite.width = 80;
    o2Sprite.height = 275;

    // W2
    w2Sprite.x = 255;
    w2Sprite.y = 175;
    w2Sprite.width = 70;
    w2Sprite.height = 300;

    // N
    nSprite.x = 285;
    nSprite.y = 190;
    nSprite.width = 85;
    nSprite.height = 270;


    mustDropSprite.x = 120;
    mustDropSprite.y = 340;
    mustDropSprite.width = 180;
    mustDropSprite.height = 100;
}

if(window.innerWidth > 500) {
    container.x = 55;
}

if(window.innerWidth < 400) {
    container.x = -14;
}

if(window.innerWidth < 365) {
    container.x = -24;
}

if(window.innerWidth < 350) {
    vegasSprite.x = 50;
    vegasSprite.y = 110;
    vegasSprite.width = 95;
    vegasSprite.height= 95;

    slotsSprite.x = 160;
    slotsSprite.y = 110;
    slotsSprite.width = 95;
    slotsSprite.height = 95;

    //S
    sSprite.x = 17;
    sSprite.y = 145;
    sSprite.width = 70;
    sSprite.height = 180;

    // H
    hSprite.x = 50;
    hSprite.y = 140;
    hSprite.width = 62;
    hSprite.height = 200;

    // O
    oSprite.x = 88;
    oSprite.y = 135;
    oSprite.width = 32;
    oSprite.height = 210;

    // W
    wSprite.x = 110;
    wSprite.y = 135;
    wSprite.width = 50;
    wSprite.height = 200;

    // D
    dSprite.x = 130;
    dSprite.y = 130;
    dSprite.width = 80;
    dSprite.height = 200;

    // O2
    o2Sprite.x = 165;
    o2Sprite.y = 130;
    o2Sprite.width = 65;
    o2Sprite.height = 200;

    // W2
    w2Sprite.x = 195;
    w2Sprite.y = 130;
    w2Sprite.width = 50;
    w2Sprite.height = 220;

    // N
    nSprite.x = 215;
    nSprite.y = 140;
    nSprite.width = 75;
    nSprite.height = 200;


    mustDropSprite.x = 80;
    mustDropSprite.y = 245;
    mustDropSprite.width = 150;
    mustDropSprite.height = 90;

    container.x = 10;
}



