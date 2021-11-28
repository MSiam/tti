function callTTI() {
  console.log('submitted');
  document.getElementById("submitted").value = "Submitted";
  var subtext = document.getElementById("submitted").value;
  for (i=0; i<urls_qry.length; i++)
  {
      console.log(urls_qry[i]);
  }
    //document.location.href = "http://flaskexample-env.eba-ycext9wn.ca-central-1.elasticbeanstalk.com/"
  //var http = new XMLHttpRequest();
  //var url = 'http://flaskexample-env.eba-ycext9wn.ca-central-1.elasticbeanstalk.com';
  //var url = 'http://127.0.0.1:5000/';
  //http.open('POST', url, true);
  //var params = {'qry':urls_qry, 'sprt': urls_sprt, 'sprt_masks': urls_sprtmasks};
  //http.send(params);

  //http.onreadystatechange = (e) => {
  //  console.log(http.responseText)
 // }
    var fd = new FormData();
//    for (i = 0; i<urls_sprt.length; i++)
//    {
//        var fname = "sprt_img_00" + i + ".jpg"
//        fd.append(fname, urls_sprt[i] /*, optional filename */);
//        fname = "sprt_mask_00" + i + ".png"
//        fd.append(fname, urls_sprtmasks[i] /*, optional filename */);
//    }
//    
//    for (i = 0; i<urls_qry.length; i++)
//    {
//        var fname = "qry_img_00" + i
//        console.log(fname)
//        fd.append(fname, urls_qry[i] /*, optional filename */);
//    }
    
    //var blob = new Blob([{'train_split': 1}], { type: "text/xml"});
    var blob = JSON.parse('{"train_split":' + 1 +'}')
    fd.append('opts', blob);
    var req = jQuery.ajax({
      url: 'http://localhost:5000/', 
      method: 'POST',
      data: fd, // sends fields with filename mimetype etc
      // data: aFiles[0], // optional just sends the binary
      processData: false, // don't let jquery process the data
      contentType: false // let xhr set the content type
    });

    // jQuery is promise A++ compatible and is the todays norms of doing things 
    req.then(function(response) {
      console.log(response)
    }, function(xhr) {
      console.error('failed to fetch xhr', xhr)
    })

}
