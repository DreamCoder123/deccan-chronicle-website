let getFetchData = async(url) =>{
     
      try{
        let res=await fetch(url);

        let data=await res.json();
    
        return data.articles
      }catch(er){
        console.log(er)
      }

}

let append = (data,container) =>{

    for(let i=0; i<4; i++){
         let div=document.createElement("div");
         div.setAttribute("class","neigh")
         div.addEventListener("click",function(){
            showData(data[i])
       })

         let Image=document.createElement("img");
         Image.src=data[i].urlToImage;

        let tilte =document.createElement("h3");
        tilte.innerText=data[i].title;

        let content = document.createElement("p")
        content.innerText="*  "+data[i].content

        div.append(Image,tilte,content);

        container.append(div)

    }

}

// asian format append function 

let typeAppend = (data,container) =>{

    for(let i=0; i<4; i++){
         let div=document.createElement("div");
         div.setAttribute("class","neigh")
         div.addEventListener("click",function(){
            showData(data[i])
       })

         let Image=document.createElement("img");
         Image.src=data[i].urlToImage;

        let tilte =document.createElement("h3");
        tilte.innerText=data[i].title;

        div.append(Image,tilte);

        container.append(div)

    }

}

let lowAppend = (data,container) =>{

    for(let i=10; i<14; i++){
         let div=document.createElement("div");
         div.setAttribute("class","lowerSec");
         div.addEventListener("click",function(){
            showData(data[i])
       })

         let Image=document.createElement("img");
         Image.src=data[i].urlToImage;

        let tilte =document.createElement("h3");
        tilte.innerText=data[i].title;

        div.append(Image,tilte);

        container.append(div)

    }

}

// gallery section append function 

let galary_f_append = (data,container) =>{

         
    let div=document.createElement("div");

    
    let Image=document.createElement("img");
    Image.src=data[0].urlToImage;

    div.append(Image);
    container.append(div)
}

let galary_s_append = (data,container) =>{

    for(let i=0; i<4; i++){
         let div=document.createElement("div");
         div.setAttribute("class","s_galary_child")
         div.addEventListener("click",function(){
            galaryData(data[i])
       })

         let Image=document.createElement("img");
         Image.src=data[i].urlToImage;

        let tilte =document.createElement("p");
        tilte.innerText=data[i].title

        div.append(Image,tilte);

        container.append(div)

    }
   }



export {getFetchData,append,typeAppend,lowAppend,galary_s_append,galary_f_append}

 let galaryData=(data)=>{
    window.location.href="gallery_sub_page.html"
    localStorage.setItem("detailNews",JSON.stringify(data))
 }

let showData =(data)=>{
      window.location.href="newsdetails.html"
      localStorage.setItem("detailNews",JSON.stringify(data))
}