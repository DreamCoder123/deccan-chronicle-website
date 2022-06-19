let fetchData=async(url)=>{
       
    let res=await fetch(url)
    let data=await res.json()
    console.log(data)
    return (data)

}
let showData=(arr,container)=>{
    
    for(let i=0;i<15;i++){
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

export {fetchData,showData}
