
var inputs_1="";
var inputs_2="";

function commitparagraph_1(){
    for(i = 1;i <= 8; i++){
        inputs_1.push(document.getElementById("para_1-input_" + i ).value)
    }
    console.log(inputs_1);
    document.getElementById("Final_Product_1").innerHTML=inputs_1;
}
function commitparagraph_2(){
    for(i = 1;i <= 8; i++){
        inputs_2.push(document.getElementById("para_2-input_" + i ).value)
    }
    console.log(inputs_2);
    document.getElementById("Final_Product_2").innerHTML=inputs;
}