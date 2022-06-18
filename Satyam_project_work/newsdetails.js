// let published= document.getElementById("pdate")
// published.innerText="Published : "+ new Date();


import {Tappend ,MPappend} from "./append.js"
const api="40840842773a45b5b08be2d908d7a110";
//const api="95d1fbec7675485aba5f17e941467b38";
let trendingFun= async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${api}`;

    let container=document.getElementById("subdiv_5")

    let res= await fetch(url)
    let data= await res.json();
console.log(data);
Tappend(data.articles,container)
LatestEnt(data.articles)

}
trendingFun()

// -------
let tappu= document.getElementById("tappu")



// latest from entertainment------
function LatestEnt(data){
    let LEcontainer= document.getElementById("left_div_2-1")
    data.forEach((ele,i) => {
        if(ele.urlToImage==null){
            ele.urlToImage="https://media.istockphoto.com/photos/cast-iron-frying-pan-over-the-dark-background-picture-id1295771020?b=1&k=20&m=1295771020&s=170667a&w=0&h=_kGe0C18aEXp5wPsZM4KfC_uOW56xFcTWdA7X7z52PY="
        }
        if(i<4){
            let LEdiv= document.createElement("div")
            let LEimage=document.createElement("img")
            
            LEimage.src=ele.urlToImage
            let LEh3= document.createElement("h4")
            LEh3.innerText=ele.title
            LEdiv.append(LEimage,LEh3)
            LEcontainer.append(LEdiv)
            LEdiv.addEventListener("click",function(){
                sendData(ele)
            })
    
        }
       
    
    });
    function sendData(ele){
        localStorage.setItem("detailNews",JSON.stringify(ele));
         window.location.reload();
    }
  
}


let most_popular= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`;

let container=document.getElementById("mostpopular")
    let res= await fetch(url)
    let data= await res.json();
MPappend(data.articles,container)

}
most_popular()

let newsData=JSON.parse(localStorage.getItem("detailNews")) 
// console.log(newsData)

let image = document.getElementById("news_image")
if(newsData.urlToImage==null){
    image.src="https://media.istockphoto.com/photos/cast-iron-frying-pan-over-the-dark-background-picture-id1295771020?b=1&k=20&m=1295771020&s=170667a&w=0&h=_kGe0C18aEXp5wPsZM4KfC_uOW56xFcTWdA7X7z52PY=";
}else{
    image.src=newsData.urlToImage;
}


let newsDesc=document.getElementById("news_description");
newsDesc.innerText=newsData.title+" "+newsData.description+" "+newsData.title+" "+newsData.description+" "+newsData.content+" ";

let newsHeading=document.getElementById("newsheading");
newsHeading.innerText=newsData.title

let pdate=document.getElementById("pdate");
pdate.innerText=new Date()


let categoryname= document.getElementById("category_name")
categoryname.innerText=newsData.source.name


// more from social-------

async function Msocial(){
    let url="https://newsapi.org/v2/everything?q=social&apiKey=40840842773a45b5b08be2d908d7a110"
   let res = await fetch(url)
   let data= await res.json();
let container= document.getElementById("left_div_3-1")
   Tappend(data.articles,container)
   console.log("Msocial : ",data)
}
Msocial()


async function Mbolly(){
    let url="https://newsapi.org/v2/everything?q=bollywood&apiKey=40840842773a45b5b08be2d908d7a110"
   let res = await fetch(url)
   let data= await res.json();
let container= document.getElementById("bolly-more")
   Tappend(data.articles,container)
   console.log("Msocial : ",data)
}
Mbolly()


let dc= document.getElementById("dc")
dc.innerText = "DECCEN CHRONICLE | "+ newsData.author



