function schetchic(){
    z = 0;
    for (i = 0; i < document.getElementsByClassName("checkbox").length; i ++ ){
        if (document.getElementsByClassName("checkbox")[i].checked){
            z++;
        }
    }
    return z;
}

function checkedX (){
    for (i = 0; i < document.getElementsByClassName("radio").length; i ++ ){
        if (document.getElementsByClassName("radio")[i].checked){
             x = document.getElementsByClassName("radio")[i].value;
        }
    }
    return x;
}

function checkedR(){
    for (i = 0; i < document.getElementsByClassName("checkbox").length; i ++ ){
        if (document.getElementsByClassName("checkbox")[i].checked){
            r = document.getElementsByClassName("checkbox")[i].value;
        }
    }
    return r;
}