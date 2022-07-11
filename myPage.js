
// References to DOM Elements
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.list');



//menuToggle
menuToggle.onclick = () => {
    navigation.classList.toggle('open')
}

//click menu
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('click', activeLink));

