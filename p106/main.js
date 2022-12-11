function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-CTTl_vcy/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}