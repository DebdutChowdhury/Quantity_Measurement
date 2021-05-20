const main = document.querySelector('#headType');
const input = document.querySelector('#input');
const result = document.querySelector('#result');
let inputVal = 0;
let usrInput = 0;
let value ;
let id;

let units = {
    length:['Centemeter','Meter','Kilometer'],
    area:['Square Meter','Square Inch','Square Foot','Acre'],
    temperature:['Celcius','Fahrenheight','Kelvin'],
    time:['Second','Hour','Day','Week']
}

function qSelector(){
    const inp = document.querySelectorAll('input');
    for(let i=0; i<inp.length; i++){
        let inputVal = inp[i];    
        console.log("inputVal: ",inputVal);
        inputVal.addEventListener("input", function(e){
            value = e.target.value;
            console.log(e.target.id+":"+value);
            console.log("Input Here :"+input.id);
            id = e.target.id;
            unitCalculate();
        });
    }
     console.log("value is : ",value);
     console.log("ID: ",id);
     console.log("User Input: ----- ", inputVal);
     return inputVal;
}

let valIn = 0;
window.addEventListener("DOMContentLoaded", function(){
    console.log('Js File loaded here.');
    valIn = qSelector();
  
    const main = document.querySelector('#headType');
    inputType.addEventListener('change',unitCalculate);
    resultType.addEventListener("change",unitCalculate);

    function unitChange(){
        let selected_option = units[this.value] || units.area;

        while(inputType.options.length > 0 && resultType.options.length > 0){  
            inputType.options.remove(0);
            resultType.options.remove(0);
        }
        Array.from(selected_option).forEach(function(ele){
            let option1 = new Option(ele, ele);
            let option2 = new Option(ele, ele);
            inputType.appendChild(option1);
            resultType.appendChild(option2);
        })
        console.log("unit Change ended!");
    }    
    unitChange();
    main.addEventListener("change",unitChange);
}) 

function unitCalculate(){
    console.log("value is: ", value);
    console.log("id is: ", id);
    let inputTypeValue1 = inputType.value;
    let resultTypeValue1 = resultType.value;
    let inputTypeValue2 = resultType.value;
    let resultTypeValue2 = inputType.value;
    let option = inputTypeValue1 + "-" +resultTypeValue1;
    let option2 = inputTypeValue2 + "-" +resultTypeValue2;
        switch(main.value){
                case "length":
                    switchMethod(id,lengthCal1,lengthCal2,option,option2); 
                    break;
                case "area":
                    switchMethod(id, areaCal1, areaCal2, option, option2);
                    // areaCal1(option); 
                    break;
                case "temperature":
                    switchMethod(id, tempCal1, tempCal2, option, option2);
                    // tempCal1(option);
                    break;
                case "time":
                    switchMethod(id, timeCal1, timeCal2, option, option2);
                    // timeCal1(option); timeCal2(option2);
                default : 'Invalid Input'
   }   

  
}

function switchMethod(id,method1,method2,option1,option2){
        if(id =="input"){
             method1(option1)   
        }
        else{
            method2(option2)
        }

}

function unitMultiply(input1,input2){
    let answer = input1 * input2;
    return answer;
}

function lengthCal1(option){
    switch(option){
        case "Meter-Kilometer" : 
            result.value = unitMultiply(input.value, 0.001);
            document.getElementById('showResult').innerHTML = input.value + " Meter = " + result.value +" Kilometer" 
            break;

        case "Meter-Centemeter" : 
            result.value = unitMultiply(input.value, 100);
            document.getElementById('showResult').innerHTML = input.value + " Meter = " + result.value +" Centemeter" 
            break;

        case "Meter-Meter" : 
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Meter = " + result.value +" Meter" 
            break;

        case "Centemeter-Meter" :
            result.value = unitMultiply(input.value, 100);
            document.getElementById('showResult').innerHTML = input.value + " Centemeter = " + result.value +" Meter" 
            break;

        case "Centemeter-Kilometer" :
            result.value = unitMultiply(input.value, 100000);
            document.getElementById('showResult').innerHTML = input.value + " Centemeter = " + result.value +" Kilometer" 
            break;
        
        case "Centemeter-Centemeter" :
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Centemeter = " + result.value +" Centemeter" 
            break;

        case "Kilometer-Meter" :
            result.value = unitMultiply(input.value, 1000);
            document.getElementById('showResult').innerHTML = input.value + " Kilometer = " + result.value +" Meter" 
            break;

        case "Kilometer-Kilometer" :
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Kilometer = " + result.value +" kilometer" 
            break;

        case "Kilometer-Centemeter" :
            result.value = unitMultiply(input.value, 100000);
            document.getElementById('showResult').innerHTML = input.value + " Kilometer = " + result.value +" Centemeter" 
            break;
    }
    console.log(option);
}

function lengthCal2(option1){
    switch(option1){
        case "Meter-Kilometer" : 
            input.value = unitMultiply(result.value, 0.001);
            document.getElementById('showResult').innerHTML = result.value + " Meter = " + input.value +" Kilometer" 
            break;

        case "Meter-Centemeter" : 
            input.value = unitMultiply(result.value, 100);
            document.getElementById('showResult').innerHTML = result.value + " Meter = " + input.value +" Centemeter" 
            break;

        case "Meter-Meter" : 
            input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Meter = " + input.value +" Meter" 
            break;

        case "Centemeter-Meter" :
            input.value = unitMultiply(result.value, 100);
            document.getElementById('showResult').innerHTML = result.value + " Centemeter = " + input.value +" Meter" 
            break;

        case "Centemeter-Kilometer" :
            input.value = unitMultiply(result.value, 100000);
            document.getElementById('showResult').innerHTML = result.value + " Centemeter = " + input.value +" Kilometer" 
            break;
        
        case "Centemeter-Centemeter" :
            input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Centemeter = " + input.value +" Centemeter" 
            break;

        case "Kilometer-Meter" :
            input.value = unitMultiply(result.value, 1000);
            document.getElementById('showResult').innerHTML = result.value + " Kilometer = " + input.value +" Meter" 
            break;

        case "Kilometer-Kilometer" :
            input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Kilometer = " + input.value +" kilometer" 
            break;

        case "Kilometer-Centemeter" :
            input.value = unitMultiply(result.value, 100000);
            document.getElementById('showResult').innerHTML = result.value + " Kilometer = " + input.value +" Centemeter" 
            break;
    }
}

function areaCal1(option){
    switch(option){
        case 'Square Meter-Square Inch' :
            result.value = unitMultiply(input.value, 1550);
            document.getElementById('showResult').innerHTML = input.value + " Kilometer = " + result.value +" Centemeter"
            break; 
        case 'Square Meter-Square Foot' :
            result.value = unitMultiply(input.value, 10.7639);
            document.getElementById('showResult').innerHTML = input.value + " Kilometer = " + result.value +" Centemeter"
            break; 

        case 'Square Meter-Acre' :
            result.value = unitMultiply(input.value, 0.000247105);
            document.getElementById('showResult').innerHTML = input.value + " Kilometer = " + result.value +" Centemeter"
            break; 

        case 'Square Meter-Square Meter' :
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Square Meter = " + result.value +" Square Meter"
            break; 

        case 'Square Inch-Square Meter' :
            result.value = unitMultiply(input.value, 0.00064516);
            document.getElementById('showResult').innerHTML = input.value + " Square Inch = " + result.value +" Square Meter"
            break; 
        case 'Square Inch-Square Foot' :
            result.value = unitMultiply(input.value, 0.00694444);
            document.getElementById('showResult').innerHTML = input.value + " Square Inch = " + result.value +" Square Foot"
            break; 

        case 'Square Inch-Acre' :
            result.value = unitMultiply(input.value, 1.5942e-7);
            document.getElementById('showResult').innerHTML = input.value + " Square Inch = " + result.value +" Acre"
            break; 

        case 'Square Inch-Square Inch' :
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Square Inch = " + result.value +" Square Inch"
            break; 
    }
}

function areaCal2(option1){
    switch(option1){
        case 'Square Meter-Square Inch' :
            input.value = unitMultiply(result.value, 1550);
            document.getElementById('showResult').innerHTML = input.value + " Square Meter = " + result.value +" Square Inch"
            break; 
        
        case 'Square Meter-Square Foot' : 
            input.value = unitMultiply(result.value, 10.7639);
            document.getElementById('showResult').innerHTML = input.value + " Square Meter = " + result.value +" Square Foot"
            break;

        case 'Square Meter-Acre' :
            input.value = unitMultiply(result.value, 0.000247105);
            document.getElementById('showResult').innerHTML = input.value + " Square Meter = " + result.value +" Acre"
            break;

        case 'Square Meter-Square Meter' :
            input.value = result.value;
            document.getElementById('showResult').innerHTML = input.value + " Square Meter = " + result.value +" Square Meter"
            break;

        case 'Square Inch-Square Inch' :
            input.value = unitMultiply(result.value, 1550);
            document.getElementById('showResult').innerHTML = input.value + " Square Inch = " + result.value +" Square Inch"
            break; 
        
        case 'Square Inch-Square Foot' : 
            input.value = unitMultiply(result.value, 10.7639);
            document.getElementById('showResult').innerHTML = input.value + " Square Inch = " + result.value +" Square Foot"
            break;

        case 'Square Inch-Acre' :
            input.value = unitMultiply(result.value, 1.5942e-7);
            document.getElementById('showResult').innerHTML = input.value + " Square Inch = " + result.value +" Acre"
            break;

        case 'Square Inch-Square Meter' :
            input.value = unitMultiply(result.value, 0.00064516);
            document.getElementById('showResult').innerHTML = input.value + " Square Inch = " + result.value +" Square Meter"
            break;
    }
}

function tempCal1(option){
    switch(option){
        case 'Celcius-Fahrenheight' :
            result.value = unitMultiply(input.value, 33.8);
            document.getElementById('showResult').innerHTML = input.value + " Celcius = " + result.value +" Fahrenheight"
            break; 
        case 'Celcius-Kelvin' :
            result.value = unitMultiply(input.value, 274.15);
            document.getElementById('showResult').innerHTML = input.value + " Celcius = " + result.value +" Kelvin"
            break; 

        case 'Celcius-Celcius' :
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Celcius = " + result.value +" Celcius"
            break; 

        case 'Fahrenheight-Celcius' :
            result.value = unitMultiply(input.value, -17.2222);
            document.getElementById('showResult').innerHTML = input.value + " Fahrenheight = " + result.value +" Celcius"
            break; 
        case 'Fahrenheight-Fahrenheight' :
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Fahrenheight = " + result.value +" Fahrenheight"
            break; 
        case 'Fahrenheight-Kelvin' :
            result.value = unitMultiply(input.value, 274.15);
            document.getElementById('showResult').innerHTML = input.value + " Fahrenheight = " + result.value +" Kelvin"
            break; 

        case 'Kelvin-Celcius' :
            result.value = unitMultiply(input.value, -272.15);
            document.getElementById('showResult').innerHTML = input.value + " Kelvin = " + result.value +" Celcius"
            break; 
        case 'Kelvin-Fahrenheight' :
            result.value = unitMultiply(input.value, -457.87);
            document.getElementById('showResult').innerHTML = input.value + " Kelvin = " + result.value +" Fahrenheight"
            break; 
        case 'Kelvin-Kelvin' :
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Kelvin = " + result.value +" Kelvin"
            break; 
    }
}

function tempCal2(option1){
    switch(option1){
        case 'Celcius-Fahrenheight' :
            input.value = unitMultiply(result.value, 33.8);
            document.getElementById('showResult').innerHTML = result.value + " Celcius = " + input.value +" Fahrenheight"
            break; 
        case 'Celcius-Kelvin' :
            input.value = unitMultiply(result.value, 274.15);
            document.getElementById('showResult').innerHTML = result.value + " Celcius = " + input.value +" Kelvin"
            break; 

        case 'Celcius-Celcius' :
            input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Celcius = " + input.value +" Celcius"
            break; 

        case 'Fahrenheight-Celcius' :
            input.value = unitMultiply(result.value, -17.2222);
            document.getElementById('showResult').innerHTML = result.value + " Fahrenheight = " + input.value +" Celcius"
            break; 
        case 'Fahrenheight-Fahrenheight' :
            input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Fahrenheight = " + input.value +" Fahrenheight"
            break; 
        case 'Fahrenheight-Kelvin' :
            input.value = unitMultiply(result.value, 274.15);
            document.getElementById('showResult').innerHTML = result.value + " Fahrenheight = " + input.value +" Kelvin"
            break; 

        case 'Kelvin-Celcius' :
            input.value = unitMultiply(result.value, -272.15);
            document.getElementById('showResult').innerHTML = result.value + " Kelvin = " + input.value +" Celcius"
            break; 
        case 'Kelvin-Fahrenheight' :
            input.value = unitMultiply(result.value, -457.87);
            document.getElementById('showResult').innerHTML = result.value + " Kelvin = " + input.value +" Fahrenheight"
            break; 
        case 'Kelvin-Kelvin' :
            input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Kelvin = " + input.value +" Kelvin"
            break; 
    }
}

function timeCal1(option){
    switch(option){
        case 'Second-Hour': 
            result.value = unitMultiply(input.value, 0.000277778)
            document.getElementById('showResult').innerHTML = input.value + " Second = " + result.value +" Hour"
            break;

        case 'Second-Minute': 
            result.value = unitMultiply(input.value, 0.0166667)
            document.getElementById('showResult').innerHTML = input.value + " Second = " + result.value +" Minute"
            break;

        case 'Second-Day': 
            result.value = unitMultiply(input.value, 1.1574e-5)
            document.getElementById('showResult').innerHTML = input.value + " Second = " + result.value +" Day"
            break;
        case 'Second-Second': 
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Second = " + result.value +" Second"
            break;

        case 'Minute-Hour': 
            result.value = unitMultiply(input.value, 0.0166667)
            document.getElementById('showResult').innerHTML = input.value + " Minute = " + result.value +" Hour"
            break;

        case 'Minute-Second': 
            result.value = unitMultiply(input.value, 60)
            document.getElementById('showResult').innerHTML = input.value + " Minute = " + result.value +" Minute"
            break;

        case 'Minute-Day': 
            result.value = unitMultiply(input.value, 0.000694444)
            document.getElementById('showResult').innerHTML = input.value + " Minute = " + result.value +" Day"
            break;
        case 'Minute-Minute': 
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Minute = " + result.value +" Minute"
            break;

        case 'Hour-Minute': 
            result.value = unitMultiply(input.value, 60)
            document.getElementById('showResult').innerHTML = input.value + " Hour = " + result.value +" Minute"
            break;

        case 'Hour-Second': 
            result.value = unitMultiply(input.value, 3600)
            document.getElementById('showResult').innerHTML = input.value + " Hour = " + result.value +" Second"
            break;

        case 'Hour-Day': 
            result.value = unitMultiply(input.value, 0.0416667)
            document.getElementById('showResult').innerHTML = input.value + " Hour = " + result.value +" Day"
            break;
            
        case 'Hour-Hour': 
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Hour = " + result.value +" Hour"
            break;

        case 'Day-Minute': 
            result.value = unitMultiply(input.value, 1440)
            document.getElementById('showResult').innerHTML = input.value + " Day = " + result.value +" Minute"
            break;

        case 'Day-Second': 
            result.value = unitMultiply(input.value, 86400)
            document.getElementById('showResult').innerHTML = input.value + " Day = " + result.value +" Second"
            break;

        case 'Day-Hour': 
            result.value = unitMultiply(input.value, 24)
            document.getElementById('showResult').innerHTML = input.value + " Day = " + result.value +" Hour"
            break;

        case 'Day-Day': 
            result.value = input.value;
            document.getElementById('showResult').innerHTML = input.value + " Day = " + result.value +" Day"
            break;
    }
}

function timeCal2(option1){
    switch(option1){
        case 'Second-Hour': 
        input.value = unitMultiply(result.value, 0.000277778)
            document.getElementById('showResult').innerHTML = result.value + " Second = " + input.value +" Hour"
            break;

        case 'Second-Minute': 
        input.value = unitMultiply(result.value, 0.0166667)
            document.getElementById('showResult').innerHTML = result.value + " Second = " + input.value +" Minute"
            break;

        case 'Second-Day': 
        input.value = unitMultiply(result.value, 1.1574e-5)
            document.getElementById('showResult').innerHTML = result.value + " Second = " + input.value +" Day"
            break;
        case 'Second-Second': 
        input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Second = " + input.value +" Second"
            break;

        case 'Minute-Hour': 
        input.value = unitMultiply(result.value, 0.0166667)
            document.getElementById('showResult').innerHTML = result.value + " Minute = " + input.value +" Hour"
            break;

        case 'Minute-Second': 
        input.value = unitMultiply(result.value, 60)
            document.getElementById('showResult').innerHTML = result.value + " Minute = " + input.value +" Minute"
            break;

        case 'Minute-Day': 
        input.value = unitMultiply(result.value, 0.000694444)
            document.getElementById('showResult').innerHTML = result.value + " Minute = " + input.value +" Day"
            break;
        case 'Minute-Minute': 
        input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Minute = " + input.value +" Minute"
            break;

        case 'Hour-Minute': 
        input.value = unitMultiply(result.value, 60)
            document.getElementById('showResult').innerHTML = result.value + " Hour = " + input.value +" Minute"
            break;

        case 'Hour-Second': 
        input.value = unitMultiply(result.value, 3600)
            document.getElementById('showResult').innerHTML = result.value + " Hour = " + input.value +" Second"
            break;

        case 'Hour-Day': 
        input.value = unitMultiply(result.value, 0.0416667)
            document.getElementById('showResult').innerHTML = result.value + " Hour = " + input.value +" Day"
            break;
            
        case 'Hour-Hour': 
        input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Hour = " + input.value +" Hour"
            break;

        case 'Day-Minute': 
        input.value = unitMultiply(result.value, 1440)
            document.getElementById('showResult').innerHTML = result.value + " Day = " + input.value +" Minute"
            break;

        case 'Day-Second': 
        input.value = unitMultiply(result.value, 86400)
            document.getElementById('showResult').innerHTML = result.value + " Day = " + input.value +" Second"
            break;

        case 'Day-Hour': 
        input.value = unitMultiply(result.value, 24)
            document.getElementById('showResult').innerHTML = result.value + " Day = " + input.value +" Hour"
            break;

        case 'Day-Day': 
        input.value = result.value;
            document.getElementById('showResult').innerHTML = result.value + " Day = " + input.value +" Day"
            break;
    }
}