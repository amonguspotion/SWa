img = document.getElementById("imag");
dog = 0;
cat = 0;
cow = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qzfaq8i6l/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);

        red = Math.floor(Math.random()*255);
        green = Math.floor(Math.random()*255);
        blue = Math.floor(Math.random()*255);

        document.getElementById("i_can_hear").innerHTML = "I can hear : " + results[0].label + " With a confidence of " + Math.floor(results[0].confidence * 100) + "%";
        document.getElementById("body").style = "background-color : rgb(" + red + ", " + green + ", " + blue + ");";

        if(results[0].label == 'Bark'){
            imag.innerHTML = "<img id='imag' src='download (1).png>";
            dog++;
        }
        else if(results[0].label == 'Meow'){
            imag.innerHTML = "<img id='imag' src='download (1).jpeg>";
            cat++;
        }
        else if(results[0].label == 'Moo'){
            imag.innerHTML = "<img id='imag' src='download.jpeg>";
            cow++;
        }
        else{
            imag.innerHTML = "<img id='imag' src='download.png>";
        }
    }
}