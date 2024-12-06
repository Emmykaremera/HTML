let Button = document.querySelector('#Button')
let food = document.querySelector('#food')
let emmy = document.querySelector('#car')
Button.addEventListener('click', () => {
 emmy.classList.toggle('toggle v') 
}
)
food.addEventListener('dblclick',()=>{
    let x= 1
    if(x===1){
        emmy.style='font-size: 150px;'
        x=2;
    }else{
        emmy.style='normal'
    }
})

/*emmy.classList.toggle('toggleElm');*/