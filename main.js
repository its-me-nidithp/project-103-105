Webcam.set({

    width: 350,
    height: 250,
    image_format: 'png',
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){

Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML = '<img id="taken_pic" src=" '+data_uri+' " >';

});

}

console.log("ml5 version : ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tU-epRzio/model.json", modelLoaded);

function modelLoaded(){

console.log("Model Loaded");

}

function identify(){

img = document.getElementById("taken_pic");
classifier.classify(img, gotResult);

}

function gotResult(error, results){

if(error){

console.error(error);

}
else{

console.log(results);
document.getElementById("obj_result").innerHTML = results[0].label;
document.getElementById("obj_accuracy").innerHTML = (results[0].confidence* 100).toFixed(3);


}

}




