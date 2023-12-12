class Figure{
    constructor(title,url){
        this.title = title
        this.url = url
    }
    render(selector){
      let  parent=document.querySelector(selector) 
      parent.innerHTML =
      `<figure>
      <img src="${this._url}"/>
      <figcaption>${this._title}</figcaption>
      </figure>
      `
    }
   
    get url () {
      return this._url
    }
    set url (value) {
     if (value===undefined || value===""){
     console.error("ERROR:figure cannot use this url")}
     else {this._url = value}
      
    }
    get title () {
      return this._title
    }
    set title (value) {
      
     if (value===undefined || value==="" || value.includes('<') || value.includes('>')|| value.includes('/')){
     console.error("ERROR:figure cannot use this title")}
     else {this._title = value}
      
    }
}