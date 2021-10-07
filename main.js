function Classification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CfZu-h5xu/model.json'.modelReady)
}

function modelReady() {
    classifier.classify(gotResults);
}