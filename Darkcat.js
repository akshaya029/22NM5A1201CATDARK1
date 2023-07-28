let onbulb = document.getElementById("onbulb");
let imagecat = document.getElementById("imagecat");
let swithon = document.getElementById("swithon");
let onbutton = document.getElementById("onbutton");
let offbutton = document.getElementById("offbutton");
function onbutton1(){
    onbulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    imagecat.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchon.textContent = "Switchon";
    switchon.style.color = red;
    document.getElementById("onbutton").style.backgroundColor = green;
    document.getElementById("offbutton").style.backgroundColor = "#cbd2d9";s
}
function offbutton1(){
    onbulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    imagecat.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchon.textContent = "Switchoff";
    switchon.style.color = red;
    document.getElementById("onbutton").style.backgroundColor = red;
    document.getElementById("offbutton").style.backgroundColor = "#cbd2d9";


}