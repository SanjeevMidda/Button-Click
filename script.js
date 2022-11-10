//press button
//raise 
//lower

// let circle = document.querySelector('.circle');

// circle.addEventListener('mousedown', down);
// circle.addEventListener('mouseup', up);

// function down(){
//     circle.classList.add('down');
// }

// function up(){
//     circle.classList.remove('down');
// }

let circle = document.querySelectorAll('.circle');

circle.forEach(add =>{
    add.addEventListener('mousedown', down);
    add.addEventListener('mouseup', up);
})


function down(){
    this.classList.add('down');
}

function up(){
    this.classList.remove('down');
}