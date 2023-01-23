var counter = document.getElementById('counter');
var Increase = document.getElementById('Increase')
var Decrease = document.getElementById('Decrease')
var Reset = document.getElementById('Reset')

Increase.addEventListener('click',()=>
{
    counter.innerHTML ++;
     applycolor();
}
)
Decrease.addEventListener('click',()=>
{
    counter.innerHTML --;
     applycolor();
}
)
Reset.addEventListener('click',()=>
{
    counter.innerHTML=0;
     applycolor();
}
)

function applycolor()
{
    if(counter.innerHTML > 0)
    {
        counter.style.color ='green';
    }else if(counter.innerHTML < 0)
    {
        counter.style.color ='red'
    }else{
        counter.style.color ='black'
    }
}