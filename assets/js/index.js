'use strict'

//Establecer una clase padre denominada Multimedia
//Proteger el atributo de la clase implementado closures.
class Multimedia {
    #url
    constructor(url){
        let _url = url; 
        this.getUrl = () => _url
        this.setUrl = (nueva_url)=> _url = nueva_url        
    }    
    get url(){
        return this.getUrl()
    }  
    set url(nueva_url){
        this.setUrl(nueva_url)
        
    }    
    setInicio(){
        return ('Este método es para realizar un cambio en la URL del video');              
    }
}

//Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia 
class Reproductor extends Multimedia {
    #id
    constructor(url, id){
        super(url)
        this.#id = id
    }
    get id() {
        return this.#id
    }
    playMultimedia() {
        play.reproducir(this.url, this.id)
    }
    setInicio(tiempo){
        this.id.setAttribute('src', `${this.url}?start=${tiempo}`)
    }
}

//Crear un método denominado “playMultimedia”, que permita hacer el llamado
// a la función pública de la IIFE, enviando los atributos url y id.
const play = (()=> {
    const mostrar=(url, id)=> {
        id.setAttribute('src', url)
    }
    return {reproducir: (url, id) => mostrar(url, id)}

})()

const musica = document.querySelector('#musica')
const pelicula = document.querySelector('#pelicula');
const serie = document.querySelector('#serie');

// Instanciar la clase hija (Reproductor)pasando como argumento la URL y el id para cada etiqueta
// iframe, por lo que se deben crear tres instancias, una para música, otra para película
// y otra para serie, con sus respectivas URL.
const m1 = new Reproductor('https://www.youtube.com/embed/QcDM-q9aOuk',musica);
m1.playMultimedia()
m1.setInicio(1000)
const p1 = new Reproductor('https://www.youtube.com/embed/MXuzqsCduoU ',pelicula);
p1.playMultimedia()
const s1 = new Reproductor('https://www.youtube.com/embed/ah1B1eZfvz0',serie);
s1.playMultimedia()




