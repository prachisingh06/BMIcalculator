const form = document.querySelector('form')
console.log(form);
//this usecase will give you empty
//const height = parseInt( document.querySelector('height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results= document.querySelector('#results')

if(height===''||height<0||isNaN(height)){
    results.innerHTML ="pleass give a valid height"
}

else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML ="pleass give a valid weight"
}
else{
    const BMI = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML =`<spn>${BMI}</span>`

}

const message = document.querySelector('#message')
const BMI = (weight/((height*height)/10000)).toFixed(2)

if(18.6 > BMI){
    
    message.innerHTML="this is under weigth"
}
else if(24.9 > BMI){
 message.innerHTML ="thie is normal range"
}
else{
    message.innerHTML="this is overweigth"
}
})