//1. In the javascript file, store the two buttons from the html in two different variables.
let zoomIn = document.getElementsByClassName('zoom-in-btn')[0];

let zoomOut = document.getElementsByClassName('zoom-out-btn')[0];


//2. Store the image in another variable.
let theImage = document.getElementById('image');


//3: creat function
function pictureZoomin ()
{
let width= theImage.width;
theImage.width = width + 100

}
zoomIn.addEventListener('click',pictureZoomin)

//substruct function 
function pictureZoomout ()
{
    let width=theImage.width;
theImage.width = width - 100
}


zoomOut.addEventListener('click',pictureZoomout)