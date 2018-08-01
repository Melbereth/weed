function push() {
  ///Pour afficher la division :
  var zutt = document.getElementsByClassName('BTNpush');

  for (i=0; i<zutt.length; i++){
    zutt[i].addEventListener('click', toggleHidden);
    zutt[i].indexx = i+1;
  }

};
function toggleHidden(e){
  console.log(e);
document.getElementById('contenu' + e.target.indexx).classList.toggle('hidden')
};
push();

console.log("toto");
                               
