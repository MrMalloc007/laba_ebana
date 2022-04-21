function validateX (x,arrX){
    if (!arrX.includes(x)){
        return  "Выберите число из списка !";
    }else if (x === ""){
        return  "Выберите X";
    }else {
        return  "Ошибок нет"
    }
}


function validateY(y){
    if (!Number.isNaN(y)){
        return  "Y должен являться числом";
    }else if (y < -5 || y > 5){
        return  "Введите Y из диапазона";
    }else {
        return "Ошибок нет";
    }
}


function validateR(r,arrR){
    if (!arrR.includes(r)){
        return  "Выберите число из списка !";
    }else if (r === ""){
        return  "Выберите R";
    }else {
        return "Ошибок нет";
    }
}

function EXEP(x_exp,y_exp,r_exp){
    if (x_exp !== "Ошибок нет" || y_exp !== "Ошибок нет" || r_exp !== "Ошибок нет"){
        return 0;
    }else{
        return 1;
    }
}