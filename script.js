var phone= [];
var nameD= [];
var street= [];
var victim={};
var player = prompt("How many disaster victims do you want to enter?");
var topFunc = function(){
        for(var i = 0; i < player; i++){
                nameD.push(prompt("Please enter Name:"));
                phone.push(prompt("Phone:"));
                street.push(prompt("Street:"));
        } 
     nameD = nameD.join(', ');   
};

topFunc();
console.log(nameD);
console.log(phone);
console.log(street);



// var phone2=[];
// var nameD2=[];
// var street2=[];
var phone2 =[], nameD2=[], street2=[];
var player2 = prompt("number of volunteers?");
var secFunc = function() {
        for(var i = 0; i < player2; i++){
                phone2.push(prompt("Phone?"));
                nameD2.push(prompt("Name?"));
                street2.push(prompt("Street?"));
        }
         nameD2 = nameD2.join(', ');
};
secFunc();

alert("There are " + player+ " victims in need.\n" + "But don't worry there are "+ player2 + " volunteers that are willing to help.\n"+ "Everyone in need is " + nameD +"\nAnd the volunteers are "+ nameD2);