// for subhanAllah part 
const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn =document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn =document.getElementById('subhanAllahDecrimentBtn');

// for alhamdulillah part 
const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

// for allahAkbar part 
const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

// for reset btn
const resetBtn = document.getElementById('resetBtn');

// initial value =0  set  for all part
let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;


// for subhanAllah part added addEventListener 
subhanAllahIncrimentBtn.addEventListener('click', function(){

    if(subhanAllahInitialValue === 33){
        return alert('SubhanAllah complete');
    };
    subhanAllahInitialValue += 1; //increment
    subhanAllahDisplay.innerText = subhanAllahInitialValue;

});

subhanAllahDecrimentBtn.addEventListener('click', function(){

    if(subhanAllahInitialValue === 0){
        return alert('You cant added negative value');
    };

    subhanAllahInitialValue -= 1;  //decrement
    subhanAllahDisplay.innerText = subhanAllahInitialValue;

});


// for alhamdulillah part added addEventListener 
alhamdulillahIncrimentBtn.addEventListener('click', function(){
    
    if(alhamdulillahInitialValue === 33){
        return alert('Alhamdulillah complete');
    };

    alhamdulillahInitialValue += 1; //increment
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;

});

alhamdulillahDecrimentBtn.addEventListener('click', function(){
    
    if(alhamdulillahInitialValue === 0){
        return alert('You cant added negative value');
    };

    alhamdulillahInitialValue -= 1; //decrement
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;

});


// for allahAkbar part added addEventListener
allahAkberIncrimentBtn.addEventListener('click', function(){

    if(allahAkberInitialValue === 34){
        return alert('AllahAkbar complete');
    };

    allahAkberInitialValue += 1; //increment
    allahAkberDisplay.innerText = allahAkberInitialValue;

});

allahAkberDecrimentBtn.addEventListener('click', function(){

    if(allahAkberInitialValue === 0){
        return alert('You cant added negative value')
    };

    allahAkberInitialValue -= 1; //decrement
    allahAkberDisplay.innerText = allahAkberInitialValue;

});


// for reset btn part added addEventListener
resetBtn.addEventListener('click', function(){

    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;

    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahAkberInitialValue = 0;


});