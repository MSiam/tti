//function preview_image(event) {
//    for (var i=0; i<event.target.files.length; i++)
//    {
//       file = event.target.files[i];
//       
//       var reader = new FileReader();
//       reader.onload = function(){
//           var output = document.getElementById('output-image'+i)
//           console.log('output-image'+i)
//           output.src = reader.result;
//       }
//       reader.readAsDataURL(file);
//    }
//}

let nimages = 0
let urls_qry = [];
let urls_sprt = [];
let urls_sprtmasks = [];

function previewImages() {

  var preview = document.querySelector('#preview');
  preview.innerHTML = "";  
  if (this.files) {
    [].forEach.call(this.files, readAndPreview);
  }
  
  nimages = this.files.length;
  //for (i=0; i<nimages; i++)
  //{
  //  urls_sprt.push(URL.createObjectURL(this.files[i]));
  //}
  urls_sprt = this.files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
      return alert(file.name + " is not an image");
    } // else...
    
    var reader = new FileReader();
    
    reader.addEventListener("load", function() {
      var image = new Image();
      image.height = 100;
      image.title  = file.name;
      image.src    = this.result;
      preview.appendChild(image);
    });
    
    reader.readAsDataURL(file);
    
  }

}

document.querySelector('#file-input').addEventListener("change", previewImages);


function previewMasks() {

  var preview = document.querySelector('#preview-mask');
  preview.innerHTML = "";  
  if (this.files) {
    [].forEach.call(this.files, readAndPreview);
  }
//  for (i=0; i<this.files.length; i++)
//  {
//    urls_sprtmasks.push(URL.createObjectURL(this.files[i]));
//  }
  urls_sprtmasks = this.files;

  let nmasks = this.files.length;
  if (nimages != nmasks){
      window.alert("Number of images and masks are not equal");
  }
  
  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
      return alert(file.name + " is not an image");
    } // else...
    
    var reader = new FileReader();
    
    reader.addEventListener("load", function() {
      var image = new Image();
      image.height = 100;
      image.title  = file.name;
      image.src    = this.result;
      preview.appendChild(image);
    });
    
    reader.readAsDataURL(file);
    
  }

}

document.querySelector('#file-input-mask').addEventListener("change", previewMasks);

function previewQry() {

  var preview = document.querySelector('#preview-qry');
  preview.innerHTML = "";  
  if (this.files) {
    [].forEach.call(this.files, readAndPreview);
  }
  
//  for (i=0; i<this.files.length; i++)
//  {
//    urls_qry.push(URL.createObjectURL(this.files[i]));
//  }
  urls_qry = this.files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
      return alert(file.name + " is not an image");
    } // else...
    
    var reader = new FileReader();
    
    reader.addEventListener("load", function() {
      var image = new Image();
      image.height = 100;
      image.title  = file.name;
      image.src    = this.result;
      preview.appendChild(image);
    });
    
    reader.readAsDataURL(file);
    
  }

}

document.querySelector('#file-input-qry').addEventListener("change", previewQry);
