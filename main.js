function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(math.random() * 255) + 1;
    random_number_g = Math.floor(math.random() * 255) + 1;
    random_number_b = Math.floor(math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear -'+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
  
    img = document.getElementById('alien1');
    img = document.getElementById('alien2');
    img = document.getElementById('alien3');
    img = document.getElementById('alien4');

    if (results[0].label == "clap") {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "bell") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Snapping") {
    img.src = 'aliens-01.png';
    img1.src = 'aliens-02.png';
    img2.src = 'aliens-03.gif';
    img3.src = 'aliens-04.png';
  } else {
    img.src = 'aliens-01.png';
    img1.src = 'aliens-02.png';
    img2.src = 'aliens-03.png';
    img3.src = 'aliens-04.gif';
  }
}
}


