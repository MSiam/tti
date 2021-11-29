urls_sprt = [];
 
function useSampleSprt() {
    // Fill in Support Images and Labels
    fold1()
    var folder = "example_fsvos/sprt/";
    var preview = document.querySelector('#preview');
    preview.innerHTML = "";  

    readImages(folder, urls_sprt, preview);

    var folder_masks = "example_fsvos/sprt_newmasks/";
    preview = document.querySelector('#preview-mask');
    preview.innerHTML = "";  

    readImages(folder_masks, urls_sprtmasks, preview);
}

var GetFileBlobUsingURL = function (url, fname, convertBlob) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function() {
            convertBlob(xhr.response, fname);
        });
        xhr.send();
};

var blobToFile = function (blob, name) {
        blob.lastModifiedDate = new Date();
        blob.name = name;
        return blob;
};

var GetFileObjectFromURL = function(filePathOrUrl, fname, convertBlob) {
       GetFileBlobUsingURL(filePathOrUrl, fname, function (blob, fname) {
          convertBlob(blobToFile(blob, fname));
       });
};


function readImages(folder, currentarr, preview){
    return $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    var fullpath = folder + val
                    GetFileObjectFromURL(fullpath, val, function (fileObject) {
                          var image = new Image();
                          image.height = 100;
                          image.src    = fullpath;
                          preview.appendChild(image);
                         currentarr.push(fileObject);
                    });
                } 
            });
        }
    });
}

function useSampleQry() {
    fold1()
    urls_sprt = [];
    urls_sprtmasks= [];
    useSampleSprt();

    var folder = "example_fsvos/qry/524b470fd0/";
    preview = document.querySelector('#preview-qry');
    preview.innerHTML = "";  
    readImages(folder, urls_qry, preview);
}
