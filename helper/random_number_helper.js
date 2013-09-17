/**
 * Created with JetBrains RubyMine.
 * User: wst
 * Date: 13-9-15
 * Time: 上午9:48
 * To change this template use File | Settings | File Templates.
 */
function is_repeat(number) {
    var i,j;
    for (i=0;i<4;i++){
       for(j=i+1;j<4;j++){
           if(number.substring(i, i+1)==number.substring(j,j+1)){
               return  false;
           }
       }
    }
    return true;

}
function  is_repeated(number1,number2){
    if(number1.substring(0,1)==number2.substring(0,1)&&number1.substring(1,2)==number2.substring(1,2)
        &&number1.substring(2,3)==number2.substring(2,3)&&number1.substring(3,4)==number2.substring(3,4)){
    return false;
    }
    else return true;
}
function random_test(){
    var i, j,m=0;
    var storage=new Array();
    for(i=0;i<100;i++){
        storage[i]=get_random_number();
    }
    for(i=0;i<100,i++;){
        for(j=1;j<100,j>i;j++){
        if(is_repeated(storage[i],storage[j])=="false");m++;

        }
    }
    if(m>2) return false;
    else return true;
    }