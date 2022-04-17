
song = "";

function preload()
{
    song = loadSound("UnstoppableheSongs.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0,0 , 600,500);
}

function D_accord()
{
    song.play();
}