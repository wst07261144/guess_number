/**
 * Created with JetBrains RubyMine.
 * User: wst
 * Date: 13-9-17
 * Time: 下午4:43
 * To change this template use File | Settings | File Templates.
 */
function compare_numbers( number1,number2){
    var m= 0,n=0;
    for(i=0;i<4;i++){
        if( number1.substring(i,i+1) == number2.substring(i,i+1)) m++;
    }
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if( number1.substring(i, i+1) ==  number2.substring(j, j+1))  n++;
        }
    }
    m= m.toString();
    n= (n-m).toString();
    result = m+'A'+n+'B';
    return result;
}
