
let Tappend=(data,container)=>{
   // console.log("innnn");
    //let trending= document.getElementById("subdiv_5")
    
    data.forEach((ele) => {
        if(ele.urlToImage==null){
            ele.urlToImage="https://media.istockphoto.com/photos/tropical-greenhouse-at-la-mortella-garden-in-forio-dischia-italy-picture-id1362885764?b=1&k=20&m=1362885764&s=170667a&w=0&h=YQCVH2qXVPFrlBY_YcsFCpKJlclMfTTBxdIXTcY8DG0="
        }
    
            let div= document.createElement("div");
            div.setAttribute("id","tappu")
            div.addEventListener("click",function(){
                tappuFun(ele)
            })
            
         
            let img= document.createElement("img")
            img.src=ele.urlToImage;
            let p= document.createElement("p")
            p.innerText=ele.title;
            div.append(img,p)
    container.append(div)

        
    
      
    });



}

function tappuFun(ele){
    localStorage.setItem("detailNews",JSON.stringify(ele));
    window.location.href="newsdetails.html";
    console.log("tappuuu");
}




let MPappend=(data,container)=>{
    // console.log("innnn");
     //let trending= document.getElementById("subdiv_5")
     
     data.forEach((ele) => {
         
        if(ele.urlToImage==null){
            ele.urlToImage="https://media.istockphoto.com/photos/tropical-greenhouse-at-la-mortella-garden-in-forio-dischia-italy-picture-id1362885764?b=1&k=20&m=1362885764&s=170667a&w=0&h=YQCVH2qXVPFrlBY_YcsFCpKJlclMfTTBxdIXTcY8DG0="
        }
            let div= document.createElement("div");
            div.addEventListener("click",function(){
                tappuFun(ele)
            })
             let img= document.createElement("img")
             img.src=ele.urlToImage;
             let p= document.createElement("p")
             p.innerText=ele.title;
             div.append(p,img)
            container.append(div)
 
         
     
       
     });
 
 
 }

export {Tappend,MPappend};