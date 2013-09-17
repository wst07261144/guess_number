/**
 * Created with JetBrains RubyMine.
 * User: wst
 * Date: 13-9-13
 * Time: 上午9:57
 * To change this template use File | Settings | File Templates.
 * @return {number}
 */



function get_input_text(){
    var get_number;
    get_number = document.getElementById("input1").value;
    if ( get_number == "" || isNaN( get_number)) {
        console.log("Not Numeric,please input four numbers");
        return;
    }
    if( get_number.length!=4){
        console.log("Not four numbers,please input four numbers");
        return;
    }
    return  get_number;
}

function save_number(){
    localStorage.setItem("fixed",get_random_number()) ;
}


function displayed(display){
    var outObj;
    outObj=document.getElementById("output");
    outObj.value= display;
}

function start_games()
{   var x;
    x=document.getElementById("start");
    x.innerHTML="请输入四个数字";
    save_number();
    localStorage.setItem("key","0");
}
function get_result(input){
    var m;
    var return_numbers=new Array();
    var random_number=localStorage.getItem("fixed");
    m=parseInt(localStorage.getItem("key"))+1;
    localStorage.setItem("key",m);
    return_numbers[0]=localStorage.getItem("key");
    return_numbers [1] = compare_numbers( input,random_number);
    return return_numbers;
}
function six_controller(number,result){
     var outObj;
     if(number<12&&result=="4A0B"){
         displayed("4A0B");
        console.log("Congratulations,you are succeed!")}
     else  displayed(result);
     if(number>=13){
        displayed("");
        console.log("You are failed");
        return;
    }
}
function run_game(){
    six_controller(get_result(get_input_text())[0],get_result(get_input_text())[1]);
}