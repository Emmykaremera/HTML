function transformString(text, callback1, callback2) {
   return new Promise(function(resolve, reject){
    
    setTimeout(function(){
        const color='yellow'
        if(color==='yellow'){
            resolve('Success!')
        }else{
            reject('Failure')
        }

    },1000)

   }) 
}
transformString()
.then((message) => {
    console.log("Resolved:", message); 
  })
  .catch((error) => {
    console.log("Rejected:", error); 
  });




    
  