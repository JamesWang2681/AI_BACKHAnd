
function gotoPredictionPage(algorithm){

    localStorage.setItem("algorithm", algorithm);
    console.log(algorithm)
    window.location.pathname = "static/template/predict.html";
}
