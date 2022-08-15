let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
    console.log("Response received")
    let data=JSON.parse(xhr.responseText)
    
    for(let i=0;i<data.length;i++){
        console.log(data[i].flag)
    }}
    else{
        console.log("Error")
    }

}
xhr.send();