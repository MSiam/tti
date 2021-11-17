
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function fold1(){
    let fold = ["fold2", "fold3", "fold4"]
    document.getElementById("classlistarea").value = "";
    for (i=0; i< fold.length; i++)
        for (j=0; j < classes[fold[i]].length; j++)
            document.getElementById("classlistarea").value += classes[fold[i]][j] + "\n";
}

function fold2(){
    let fold = ["fold1", "fold3", "fold4"]
    document.getElementById("classlistarea").value = "";
    for (i=0; i< fold.length; i++)
        for (j=0; j < classes[fold[i]].length; j++)
            document.getElementById("classlistarea").value += classes[fold[i]][j] + "\n";
}

function fold3(){
    let fold = ["fold1", "fold2", "fold4"]
    document.getElementById("classlistarea").value = "";
    for (i=0; i< fold.length; i++)
        for (j=0; j < classes[fold[i]].length; j++)
            document.getElementById("classlistarea").value += classes[fold[i]][j] + "\n";
}

function fold4(){
    let fold = ["fold1", "fold2", "fold3"]
    document.getElementById("classlistarea").value = "";
    for (i=0; i< fold.length; i++)
        for (j=0; j < classes[fold[i]].length; j++)
            document.getElementById("classlistarea").value += classes[fold[i]][j] + "\n";
}

const classes = {
    fold1: ["person", "skateboard", "snake", "duck", "train", "motorbike", "deer", "truck", 
            "snowboard", "frog"],
    fold2: ["giant panda", "sedan", "monkey", "cat", "horse", "giraffe", "owl", "zebra", 
            "boat", "eagle"],
    fold3: ["lizard", "ape", "hand", "cow", "turtle", "leopard", "surfboard", "tiger",
            "shark", "earless seal"],
    fold4: ["parrot", "dog", "rabbit", "fish", "bear", "fox", "airplane", "elephant",
            "mouse", "tennis racket"]
};

