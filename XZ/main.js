$.getScript('untitled/XZ/validator.js');

let x = document.getElementsByClassName("radio");
let y = document.getElementById("Y_TEXT");
let r = document.getElementsByClassName("checkbox");

let arrX = [-2,-1.5,-1,-0.5,0,0.5,1,1.5,2];
let arrR = [1,1.5,2,2.5,3];

let x_exp = "";
let y_exp = "";
let r_exp = "";

let main_exep = "";



x_exp = validateX(x,arrX);
y_exp = validateY(y);
r_exp = validateR(r,arrR);

main_exep = EXEP(x_exp,y_exp,r_exp);


$("#mainform").submit(function (e){     // чекнуть     e - создаем событие
    e.preventDefault();                 // отменяем стандартное событие браузера
    if (main_exep !== 1){
        $('#exepX').append(x_exp);
        $('#exepY').append(y_exp);
        $('#exepR').append(r_exp);
    }else{
    let form = $(this);
    $.ajax({
        url: "php/actionn.php",
        method: "POST",
        dataType: "json",
        data: form.serialize() + '&time=' + new Date().getTimezoneOffset(),
        success: function (data){
            if ('X' in data) {
                newRow = '<tr>';
                newRow += '<td id="tdjsX" class="tdjs">' + data.X + '</td>';
                newRow += '<td id="tdjsY" class="tdjs">' + data.Y + '</td>';
                newRow += '<td id="tdjsR" class="tdjs">' + data.R + '</td>';
                newRow += '<td id="tdjsCT" class="tdjs">' + data.currentTime + '</td>';
                newRow += '<td id="tdjsET" class="tdjs">' + data.executionTime + '</td>';
                newRow += '<td id="tdjsRS" class="tdjs">' + data.RES + '</td>';
                $('.table').append(newRow);
            } else {
                erorX = data.exep_messege_for_X;
                erorY = data.exep_messege_for_Y;
                erorR = data.exep_messege_for_R;
                $("#exepX").append(erorX);
                $("#exepY").append(erorY);
                $("#exepR").append(erorR);
            }
        }
    })
    }
})