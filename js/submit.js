
function convert_image(buffer, mask, height,width)
{
    for(var y = 0; y < height; y++) {
        for(var x = 0; x < width; x++) {
            var pos = (y * width + x) * 4; // position in buffer based on x and y
            buffer[pos  ] = mask[y][x][0];           // some R value [0, 255]
            buffer[pos+1] = mask[y][x][1];           // some G value
            buffer[pos+2] = mask[y][x][2];           // some B value
            buffer[pos+3] = 255;           // set alpha channel
        }
    }
    // create off-screen canvas element
    var canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    // create imageData object
    var idata = ctx.createImageData(width, height);

    // set our buffer as source
    idata.data.set(buffer);

    // update canvas with new data
    ctx.putImageData(idata, 0, 0);
    var dataUri = canvas.toDataURL();
    return dataUri;
}

function visualize_masks(masks){
    var width = masks[0][0].length;
    var height = masks[0].length;
    var preview = document.querySelector('#preview-predictions');
    preview.innerHTML = "";  

    for (i=0; i<masks.length; i++)
    {
        buffer = new Uint8ClampedArray(width * height * 4);
        imguri = convert_image(buffer, masks[i], height, width)
        var image = new Image();
        image.height = 100;
        image.src    = imguri;
        preview.appendChild(image);
    }
}

function callTTI() {
  console.log('submitted');
  document.getElementById("submitted").value = "Processing in 1-2 minutes";
  var subtext = document.getElementById("submitted").value;
  var fd = new FormData();
  for (i = 0; i<urls_sprt.length; i++)
  {
      var fname = "sprt_img_" + urls_sprt[i]['name'];
      fd.append(fname, urls_sprt[i] /*, optional filename */);
      fname = "sprt_mask_" + urls_sprtmasks[i]['name'];
      fd.append(fname, urls_sprtmasks[i] /*, optional filename */);
  }
  
  // Query Images
  for (i = 0; i<urls_qry.length; i++)
  {
      var fname = "qry_img_" + urls_qry[i]['name'];
      fd.append(fname, urls_qry[i] /*, optional filename */);
  }
  
  // TTI Options
  var blob = new Blob([current_fold], { type: "text/plain"});
  fd.append('opts', blob);

  var req = jQuery.ajax({
      url: 'http://ttiyork-env.eba-cxnmdk62.ca-central-1.elasticbeanstalk.com/', 
    method: 'POST',
    data: fd, // sends fields with filename mimetype etc
    processData: false, // don't let jquery process the data
    contentType: false // let xhr set the content type
  });

  // jQuery is promise A++ compatible and is the todays norms of doing things 
  req.then(function(response)
  {
      visualize_masks(response['masks'])
  }, function(xhr) {
    console.error('failed to fetch xhr', xhr)
  })

}
