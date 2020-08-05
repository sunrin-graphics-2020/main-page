const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');
const videoImages = [];
let totalImagesCount = 47;
let progress;
let currentFrame;

async function setImages() {
    for (let i = 1; i < totalImagesCount; i++) {
        let imgElem = new Image();
        imgElem.src = `./video/wave-${i}.jpg`;
        videoImages.push(imgElem);
    }
}

function loop() {
    progress = pageYOffset / (document.body.offsetHeight - window.innerHeight);
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    currentFrame = Math.round((totalImagesCount - 1) * progress);
    context.drawImage(videoImages[currentFrame], 0, 0);

    requestAnimationFrame(loop);
}

function init() {
    document.body.classList.remove('before-load');
    context.drawImage(videoImages[0], 0, 0);
    loop();
}
/*
$("html,body").animate({ scrollTop: 0 },0, async function(){
    window.addEventListener('load', init);
    await setImages();
    console.log("load images")
});
*/

window.addEventListener('load', init);
setImages();