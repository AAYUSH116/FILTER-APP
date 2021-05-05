noseX=0;
noseY=0;

function preload(){
    mostache= loadImage("https://i.postimg.cc/W30W1wBc/moustach.png");
    
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);


}

function draw(){
    image( video,0,0,300,300);
    image(mostache,noseX,noseY,30,30);
}

function save_img(){
    save('MY AMAZING FILTER IMG.png');
}

function modelLoaded(){
    console.log('Pose Net Is Intiatilized');
}

function gotPose(results)
{
    if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y-1;
console.log("nose x="+results[0].pose.nose.x);
console.log("nose y="+results[0].pose.nose.y);
    }
}