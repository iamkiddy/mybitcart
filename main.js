const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.second-screen');
const thirdScreen = document.querySelector('.third-screen');
const fourthScreen = document.querySelector('.fourth-screen');
const btnOne = document.querySelector('.btn-next');
const btnTwo = document.querySelector('.btn-next-sell-crypto');
const btnThree = document.querySelector('.btn-next-3');
const btnFour = document.querySelector('.btn-next-4');

function contentHide(){
    btnOne.addEventListener('click',(e)=>{
        e.preventDefault();
        firstScreen.style.display = 'none';
        secondScreen.style.display = 'block'
    });
    btnTwo.addEventListener('click',(e)=>{
        e.preventDefault();
        secondScreen.style.display = 'none';
        thirdScreen.style.display = 'block'
    });
    btnThree.addEventListener('click',(e)=>{
        e.preventDefault();
        thirdScreen.style.display = 'none';
        fourthScreen.style.display = 'block'
    });   
}
contentHide();