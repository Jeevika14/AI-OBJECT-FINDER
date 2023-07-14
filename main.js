status= "";

function setup()
{
    canvas= createCanvas(480,380);
    canvas.center();
    video.hide();
}

function start()
{
    object_detector= ml5.objectDectector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "status: detecting objects";
}

function modelLoaded()
{
    console.log("model is loaded!");
    status= true;
}
 function draw()
 {
    image(video, 0, 0, 480, 380);
 }