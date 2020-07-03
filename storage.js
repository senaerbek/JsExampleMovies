class Storage{

    static addFilmToStorage   (newFilm){
        let films = this.GetFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    }
   
    static GetFilmsFromStorage(){
        let films;
        if(localStorage.getItem("films")===null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }
    
    static DeleteFilmsToStorage (deletefilms){
        let films = this.GetFilmsFromStorage();
        films.forEach(function(film,index){
            if(film.title === deletefilms){
                films.splice(index,1);//arraydan değer silme
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    }
   static clearAllFilmsFromStorage (){
       
         localStorage.removeItem('films');
    }

}

