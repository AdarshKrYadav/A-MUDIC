var song1="";
var song2="";
var letfwristX=0;
var leftwristY=0;
var rightwristX=0;
var rightwristY=0;
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,600,500);

}
function playmusic(){
    song.play();
    
}
function modelloaded(){
    console.log("Model loaded");
}
 function gotPoses(result){
    if(result.length>0){
        console.log(result);
        letfwristX=result[0].pose.leftWrist.x;
        leftwristY=result[0].pose.leftWrist.y;
        rightwristX=result[0].pose.rightWrist.x;
        rightwristY=result[0].pose.rightWrist.y;
        console.log(letfwristX,leftwristY,rightwristX,rightwristY);
    }
 }
