const form = document.getElementById('film-form');
const titleelement = document.getElementById('title');
const urlelement = document.getElementById('url');
const directorelement = document.getElementById('director');
const deleteF = document.getElementById('delete-film');
const secondcardbody= document.querySelectorAll('.card-body')[1];
const clearbutton = document.getElementById('clear-films');

eventlisteners();

function eventlisteners(){
    form.addEventListener('submit',addfilm);

    document.addEventListener('DOMContentLoaded',function(){
        let films = Storage.GetFilmsFromStorage();
        UI.LoadAllFilms(films);
    });
    secondcardbody.addEventListener('click',deletefilm);
    clearbutton.addEventListener('click',deletefilms);

}
function deletefilm(e){
    if(e.target.className ==="btn btn-danger"){
       UI.deleteFilms(e);
     Storage.DeleteFilmsToStorage(e.target.parentElement.previousElementSibling.textContent);
       
    }
}



function deletefilms(){
    if(confirm("emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
 
}


function addfilm(e){
    const title = titleelement.value;
    const director =directorelement.value;
    const url = urlelement.value;

    if(title === '' || director === '' || url ===''){
        UI.displayMessages('tüm alanları doldurun',"danger");
    }
    else{
        // Yeni film
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
      
        UI.displayMessages('eklendi',"success   ");
       
    }
    UI.clearInputs(titleelement,directorelement,urlelement);

    e.preventDefault();
}