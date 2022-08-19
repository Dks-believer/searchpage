// const url=https://api.unsplash.com/search/photos/?query=${car}&per_page=20&client_id={API}
const API="6HsJVBwW7FMtGBgb-44hDuaitrHx9-qVgmBCfR3lExM";



import{navbar} from "../components/navbar.js";

let n=document.getElementById("navbar");
n.innerHTML=navbar();

 import{searchImages,append} from "./fetch.js";
let search= (e) =>{
    if(e.key==="Enter"){
        
;        
        searchImages(API,value).then((data)=>{
            console.log(data);
let container1=document.getElementById("container");
   container1.innerHTML=null;
append(data.results,container1)

        });
    };
}
    document.getElementById("query").addEventListener("keydown",search)

    let categories=document.getElementById("categories").children;
//   console.log(categories)
 function cSearch (){
     console.log(this.id);
 
     searchImages(API,this.id).then((data)=>{ 
        console.log(data);
        let container1=document.getElementById("container");
           container1.innerHTML=null;
        append(data.results,container1)

    })
}
        for(let el of categories){
            el.addEventListener("click",cSearch);
        }
     
 

// let searchImages= async ()=>{
//     let value= document.getElementById("query").value;
     
//      try{
//          let res= await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
//          );
//          let data= await res.json();
//          console.log(data);
//      }
//      catch(err){
//          console.log(err);
//      }
// }