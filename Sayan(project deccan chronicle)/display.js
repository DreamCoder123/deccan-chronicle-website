let appendData=(arr,display)=>{
    
        for(let i=0;i<2;i++){
            let DIV=document.createElement("div")
            DIV.setAttribute("class","news")
            let image=document.createElement('img')
            let H2=document.createElement("h2")
            let p=document.createElement("p")
           

            image.src= arr[i].urlToImage
            H2.innerText=arr[i].title 
            p.innerText=arr[i].description
           
            DIV.append(image,H2,p)
            display.append(DIV)
            DIV.addEventListener("click",()=>{
                storeData(arr[i])
            })
        }
        let storeData=(elem)=>{
            localStorage.setItem("detailNews",JSON.stringify(elem))
            window.location.href="newsdetails.html"
       } 

}

let showDataM=(arr,container)=>{
    
    for(let i=0;i<=6;i++){
    if(arr[i].urlToImage===null||arr[i].title===null){

        continue;
    }
    let DIV=document.createElement("div")
    DIV.setAttribute("class","newsM")
    let image=document.createElement("img")
    let  H5=document.createElement("h3")
    
    image.src=arr[i].urlToImage
    H5.innerText=arr[i].title
    

        DIV.append(image,H5)
        container.append(DIV)
        DIV.addEventListener("click",()=>{
            storeData(arr[i])
        })

    }
    let storeData=(elem)=>{
        localStorage.setItem("detailNews",JSON.stringify(elem))
        window.location.href="newsdetails.html"
   } 

}

let showDataR=(arr,container)=>{
    
    for(let i=0;i<6;i++){
    if(arr[i].urlToImage===null||arr[i].title===null){

        continue;
    }
    let DIV=document.createElement("div")
    DIV.setAttribute("class","newsR")
    let image=document.createElement("img")
    let  H5=document.createElement("h3")
    
    image.src=arr[i].urlToImage
    H5.innerText=arr[i].title
    

        DIV.append(H5,image)
        container.append(DIV)
        DIV.addEventListener("click",()=>{
            storeData(arr[i])
        })

    }
    let storeData=(elem)=>{
        localStorage.setItem("detailNews",JSON.stringify(elem))
        window.location.href="newsdetails.html"
   } 

}


export {appendData,showDataM,showDataR}