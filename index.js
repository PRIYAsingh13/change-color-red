const table = document.querySelector('table');
const tdArr =[];

const handleClick =(e) => {
    if(e.target.classList.contains('table-col')){
        if(tdArr.length >1){
            let rCol= tdArr.shift();
            rCol.classList.remove("hero-col")
        }
        tdArr.push(e.target);
    }
    tdArr.forEach((el) =>{
        el.classList.add("hero-col");
        console.log(el)
    })
}
table.addEventListener('click',handleClick)