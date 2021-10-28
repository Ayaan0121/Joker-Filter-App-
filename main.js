noseX=0;
noseY=0;

function preload() {
  img= loadImage('https://i.postimg.cc/nzCjVCxS/joker-Nose.png');
  }

function setup(){
    Canvas= createCanvas(500 , 400);
    Canvas.position(515 , 135);
  //  Canvas.center();
  //video 
  video = createCapture(VIDEO);
  video.size(500 , 400);
  video.hide();

 

//load posenet model
poseNet=ml5.poseNet(video , modelLoaded);

poseNet.on('pose' , gotPoses);
}


function gotPoses(results) {

  if (results.length > 0 ) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    //activate code 
   // console.log("nose x = "+ results[0].pose.nose.x);
  //console.log("nose y = "+ results[0].pose.nose.y);
  }
}

function modelLoaded() {
console.log('poseNet is initialized.')  
}
function click_snapshot() {
    save('filter.png');
}


function draw() {

  image(video , 0 , 0 , 500 , 400);

  image(img, noseX - 20 , noseY - 20 , 40 , 40);

  //fill(255 , 0 , 0);

 //stroke(255 , 0 ,0);

   

 // circle(noseX , noseY , 30);
}