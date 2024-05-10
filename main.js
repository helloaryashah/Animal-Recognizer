//https://teachablemachine.withgoogle.com/models/zydCgL8QN/model.json
function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zydCgL8QN/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        randomNumberR = Math.floor(Math.random() * 255) + 1;
        randomNumberG = Math.floor(Math.random() * 255) + 1;
        randomNumberB = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "I Can Hear: " + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+ randomNumberR +", "+ randomNumberG +", "+ randomNumberB +")";
        document.getElementById("result_confidence").innerHTML = "Accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_confidence").style.color = "rgb("+ randomNumberR +", "+ randomNumberG +", "+ randomNumberB +")";
        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if(results[0].label == "Barking")
            {
                img1.src = 'Background-png';
                img2.src = 'Dog-gif';
                img3.src = 'Cat.png';
                img4.src = 'Lion.png';
            }
            else if(results[0].label == "Meowing")
                {
                    img1.src = 'Background-png';
                img2.src = 'Dog-png';
                img3.src = 'Cat.gif';
                img4.src = 'Lion.png';
                }
                else if(results[0].label == "Roaring")
                    {
                        img1.src = 'Background-png';
                img2.src = 'Dog-png';
                img3.src = 'Cat.png';
                img4.src = 'Lion.gif';
                    }
                    else
                        {
                            img1.src = 'Background-gif';
                img2.src = 'Dog-png';
                img3.src = 'Cat.png';
                img4.src = 'Lion.png';
                        }
    }
}