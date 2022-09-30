function getPin(){
   const pin = generatePin();
   const pinString = pin + '';
   if(pinString.length === 4){
      return pin;
   }
   else{
      // console.log('pin not 4 digit found', pin);
      return getPin();
   }
}

function generatePin() {
   const random = Math.round(Math.random()*10000);
   return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
   const pin = getPin();
   // display pin 

   const displayPinField = document.getElementById('display-pin');
   displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
   const number = event.target.innerText;
   const typedNumberField = document.getElementById('typed-numbers');
   const previousTypedNumber = typedNumberField.value;

   if (isNaN(number)) {
      if(number === 'C'){
         typedNumberField.value = '';
      }
      else if(number === '<'){
         const digit = previousTypedNumber.split('');
         digit.pop();
         const remainingDigit = digit.join('');
         typedNumberField.value = remainingDigit;
      }
   }
   else{
      const newTypedNumber = previousTypedNumber + number;
      typedNumberField.value = newTypedNumber;
   }

})

document.getElementById('verify-pin').addEventListener('click', function(){
   const displayPinField = document.getElementById('display-pin');
   const currentPin = displayPinField.value;
    

   const typedNumberField = document.getElementById('typed-numbers');
   const typedNumber = typedNumberField.value;

   const pinSuccessMassage = document.getElementById('pin-success');
   const pinFailureMassage = document.getElementById('pin-failure');

   if (typedNumber === currentPin) {
      pinSuccessMassage.style.display = 'block';
      pinFailureMassage.style.display = 'none';

   }
   else{
      pinFailureMassage.style.display = 'block';
      pinSuccessMassage.style.display = 'none';
   }
})