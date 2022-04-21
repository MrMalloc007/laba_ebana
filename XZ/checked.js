function schetchik(schet){
    for (i = 0; i < document.getElementsByClassName("radio").length; i ++ ){
        if (document.getElementsByClassName("radio")[i].checked){
            schet ++;
        }
    }
    return schet;
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