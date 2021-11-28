urls_sprt = [];
 
function useSampleSprt() {
    // Fill in Support Images and Labels
    var folder = "example_fsvos/sprt/";
    readImages(folder, urls_sprt);

    var folder_masks = "example_fsvos/sprt_newmasks/";
    readImages(folder_masks, urls_sprtmasks);
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


function readImages(folder, currentarr){
    return $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    var fullpath = folder + val
                    GetFileObjectFromURL(fullpath, val, function (fileObject) {
                         currentarr.push(fileObject);
                    });
                } 
            });
        }
    });
}

function useSampleQry() {
    useSampleSprt();

    var folder = "example_fsvos/qry/524b470fd0/";
    readImages(folder, urls_qry);
}
