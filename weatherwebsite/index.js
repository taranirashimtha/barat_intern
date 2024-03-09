var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik='0ada48d8427aa2931fcda393d6ece214'
function conversion(val){
    return (val-273).toFixed(3)

}

btn.addEventListener('click',function()
{
    fetch("})https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    

})