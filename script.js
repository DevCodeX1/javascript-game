
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 600;

const playerImg = new Image();
playerImg.src = './images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrames = 7;
const spriteAnimations =[];
const animationStates = [
    {
        name: "idle",
        frames: 7,
    },
    {
        name: "jump",
        frames: 7,
    },
    {
        name: "fall",
        frames: 7,
    },
    {
        name: "run",
        frames: 9,
    },
    {
        name: "dizzy",
        frames: 11,
    },
    {
        name: "sit",
        frames: 5,
    },
    {
        name: "roll",
        frames: 7,
    },
    {
        name: "bite",
        frames: 7,
    },
    {
        name: "ko",
        frames: 12,
    },
    {
        name: "getHit",
        frames: 4,
    },
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let i = 0; i < state.frames; i++){
       let positionX = i * spriteWidth;
       let positionY = index * spriteHeight;
       frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations["fall"].loc.length;
    frameX = spriteWidth * position;
    frameY = spriteAnimations["fall"].loc[position].y;
    
    ctx.drawImage(playerImg, frameX, frameY * spriteHeight,
        spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();

