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
        displayed_prompt("Not Numeric,please input four numbers");
        return;
    }
    if( get_number.length!=4){
        displayed_prompt("Not four numbers,please input four numbers");
        return;
    }
    return  get_number;
}

function save_number(){
    localStorage.setItem("fixed",get_random_number()) ;
}


function displayed_result(display){
    var outObj;
    outObj=document.getElementById("output");
    outObj.value= display;
    return outObj.value;
}
function displayed_prompt(display){
    var outObj;
    outObj=document.getElementById("prompt");
    outObj.value= display;
}

function start_games()
{   var temp;
    page_Inti();
    document.getElementById("input1").disabled=false;
    temp=document.getElementById("start");
    temp.innerHTML="输入四个数字:";
    save_number();
    localStorage.setItem("key","0");
}

function get_result(input){
    var m=0;
    var return_numbers=new Array();
    var random_number=localStorage.getItem("fixed");
    m=parseInt(localStorage.getItem("key"))+1;
    localStorage.setItem("key",m);
    return_numbers[0]=localStorage.getItem("key");
    return_numbers [1] = compare_numbers( input,random_number);
    return return_numbers;
}

function chance_times(){
    var m;
    m=Math.floor(localStorage.getItem("key")/2);
    m=6-parseInt(m);
    return m.toString();
 }
function guessed_times(){
    var m;
    m=Math.floor(localStorage.getItem("key")/2);
    return m;
}
function six_controller(number,result){
     if(parseInt(number)<10&&result=="4A0B"){
        displayed_result("You win");
        displayed_prompt("You guessed "+guessed_times()+" times");
     }
     if(parseInt(number)<10&&result!="4A0B"){
         displayed_result(result);
         displayed_prompt("you just have "+chance_times()+" chance");
     }
     if(parseInt(number)>=10){
        displayed_result("Game over");
        displayed_prompt("You have guessed 6 times");

     }
}
function run_game(){
    six_controller(get_result(get_input_text())[0],get_result(get_input_text())[1]);
}