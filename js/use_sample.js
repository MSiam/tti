
imageslist = {'qry': ['00005.jpg', '00010.jpg', '00015.jpg', '00020.jpg', '00025.jpg', '00030.jpg', '00035.jpg', '00040.jpg', '00045.jpg', '00050.jpg', '00055.jpg', '00060.jpg', '00065.jpg', '00070.jpg', '00075.jpg', '00080.jpg', '00085.jpg', '00090.jpg', '00095.jpg', '00100.jpg', '00105.jpg', '00110.jpg', '00115.jpg', '00120.jpg', '00125.jpg', '00130.jpg', '00135.jpg', '00140.jpg', '00145.jpg', '00150.jpg', '00155.jpg', '00160.jpg', '00165.jpg', '00170.jpg', '00175.jpg'],
'sprtmasks': ['1.png', '2.png', '3.png', '4.png', '5.png'],
'sprt': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']}

function useSampleSprt() {
    // Fill in Support Images and Labels
    urls_sprt = [];
    urls_sprtmasks= [];

    fold1()
    //https://raw.githubusercontent.com/MSiam/tti/master/
    var folder = "https://raw.githubusercontent.com/MSiam/tti/master/example_fsvos/sprt/";
    var preview = document.querySelector('#preview');
    preview.innerHTML = "";  

    readImages(folder, urls_sprt, preview, imageslist['sprt']);

    var folder_masks = "https://raw.githubusercontent.com/MSiam/tti/master/example_fsvos/sprt_newmasks/";
    preview = document.querySelector('#preview-mask');
    preview.innerHTML = "";  

    readImages(folder_masks, urls_sprtmasks, preview, imageslist['sprtmasks']);
}

var GetFileBlobUsingURL = function (url, fname, arr, prev, convertBlob) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function() {
            convertBlob(xhr.response, fname, arr, prev);
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

function convertBlob(obj, fullpath, fname, arr, prev){
    var image = new Image();
    image.height = 100;
    image.src    = fullpath;
    prev.appendChild(image);
    blob = blobToFile(obj, fname);
    arr.push(blob);
};

function readImages(folder, localcurrentarr, localpreview, imagelist){
    for (fname in imagelist)
    {   
        fullpath = folder + imagelist[fname];
        (function(fn, localarr, localprev) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                    fpath = folder + imagelist[fn];
                    convertBlob(this.response, fpath, imagelist[fn], localarr, localprev);
                }
            }
            xhr.open('GET', fullpath);
            xhr.responseType = 'blob';
            xhr.send();     
        })(fname, localcurrentarr, localpreview);

     }
}

function useSampleQry() {
    fold1()
    urls_sprt = [];
    urls_sprtmasks= [];
    urls_qry = [];
    useSampleSprt();

    var folder = "https://raw.githubusercontent.com/MSiam/tti/master/example_fsvos/qry/524b470fd0/";
    preview = document.querySelector('#preview-qry');
    preview.innerHTML = ""; 
    readImages(folder, urls_qry, preview, imageslist['qry']);
}
