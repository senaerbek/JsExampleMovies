class UI {

 static addFilmToUI (newfilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `<tr>
  <td><img src="${newfilm.url}" class="img-fluid img-thumbnail"></td>
  <td>${newfilm.title}</td>
  <td>${newfilm.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>`;
  };
  
 static clearInputs (e1, e2, e3) {
    e1.value = "";
    e2.value = "";
    e3.value = "";
  };
  
 static displayMessages(message, type){
      const cbody =document.querySelectorAll('.card-body')[0];
      const alert =document.createElement('div');
      alert.className=`alert alert-${type}`;
  
      alert.textContent = message ;
      cbody.appendChild(alert);
      
      setTimeout(function(){
          alert.remove();
      },1000);
  }
  
  
  static LoadAllFilms(films){
      const filmList = document.getElementById('films');
      films.forEach(function(film){
          filmList.innerHTML  += `<tr>
          <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
          <td>${film.title}</td>
          <td>${film.director}</td>
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
             </tr>`;
      });
  }
  
  static deleteFilms (e){
    console.log(e.target);//nereye basıldı?
    e.target.parentElement.parentElement.remove()
  }
  
 static clearAllFilmsFromUI (){
    const fList = document.getElementById('films');
   // fList.innerHTML = ""; olur ama yavaş
    //2.yöntem = tbodynin içinde çocuk kalmayana kadar her zaman ilk çocuğu sil
    while(fList.firstElementChild != null){
      fList.firstElementChild.remove();
    }
  }

}
