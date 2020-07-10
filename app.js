//Creating variables for HTMl elements 
var canvas = document.querySelector("canvas");
var ClearButton_div = document.getElementById("ClearButton");
var TypeButton_div = document.getElementById("Type");
var UploadButton_div = document.getElementById("Upload");
var DrawButton_div = document.getElementById("Draw");
var btns = document.getElementById("btn-group");


var TypeChoice = document.getElementById("ChangeType");
var Uploadchoice = document.getElementById("ChangeUpload");
var DrawChoice = document.getElementById("ChangeDraw");


// Code to setup Signature pad from site  
var signaturePad = new SignaturePad(canvas);
const data = signaturePad.toData();

// Draws signature image from an array of point groups
signaturePad.fromData(data);
signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");


//Function for clearing canvas
function ClearCanvas () {

    signaturePad.clear();

}

function Type() {
    TypeButton_div.classList.add("blueMark");
    
    
    TypeChoice.setAttribute("style", "display: inline;");
}
function Upload() {
    UploadButton_div.classList.add("blueMark");
    
    
    Uploadchoice.setAttribute("style", "display: inline;");
}

function Draw() {
    DrawButton_div.classList.add("blueMark");
    
    
    DrawChoice.setAttribute("style", "display: inline;");
}

function Reset(){
    TypeButton_div.classList.remove("blueMark");
    
    
    TypeChoice.setAttribute("style", "display: none;");


    UploadButton_div.classList.remove("blueMark");
    
    
    Uploadchoice.setAttribute("style", "display: none;");

    DrawButton_div.classList.remove("blueMark");
    
    
    DrawChoice.setAttribute("style", "display: none;");
}

function main() {

//Make type option default choice
Type();


//Watch for canvas clear button click
ClearButton_div.addEventListener('click', function(){

    ClearCanvas();
})
//Disable everything before start
btns.addEventListener('click', function() {
    Reset();

}, true)

//Watch for type option choosing
TypeButton_div.addEventListener('click', function(){

    Type();
    
    
})
////Watch for Upload option choosing
UploadButton_div.addEventListener('click', function(){
    
    Upload();

   
   
    
})
//Watch for Draw option choosing
DrawButton_div.addEventListener('click', function(){
   
    Draw();
    
})



}


 main();