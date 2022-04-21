let arrX = [-2,-1.5,-1,-0.5,0,0.5,1,1.5,2];
let arrR = [1,1.5,2,2.5,3];

let x_exp = "";
let y_exp = "";
let r_exp = "";

let main_exep = "";

$("#mainform").submit(function (e){     // чекнуть     e - создаем событие
    e.preventDefault();                 // отменяем стандартное событие браузера

    let x;
    let y;
    let r;

    let schet = 0;


    x = checkedX();
    y = document.getElementById("Y_TEXT").value;
    r = checkedR();

    x_exp = validateX(x,arrX);
    y_exp = validateY(y);
    r_exp = validateR(r,arrR);

    main_exep = EXEP(x_exp,y_exp,r_exp);

    if (main_exep !== 1){
        $('#exepX').append(x_exp);
        $('#exepY').append(y_exp);
        $('#exepR').append(r_exp);
    }else{
        if (schetchic(schet) > 1) {
            for (i = 0; i < document.getElementsByClassName("checkbox").length; i++ ){
                if (document.getElementsByClassName("checkbox")[i].checked){
                    sendRequest($(this), x, y, document.getElementsByClassName("checkbox")[i].value);
                }
            }
        } else {
            sendRequest($(this), x, y, r);
        }
    }
});

function sendRequest(form, xxx, yyy, rrr) {
    $.ajax({
        url: "php/actionn.php",
        method: "POST",
        dataType: "json",
        data: 'CORX=' + xxx + '&CORY=' + yyy + '&CORR=' + rrr + '&time=' + new Date().getTimezoneOffset(),
        success: function (data) {
            if ('X' in data) {
                newRow = '<tr>';
                newRow1 = '<tr><td id="tdjsX" class="tdjs">' + data.X + '</td>';
                newRow2 = '<tr><td id="tdjsY" class="tdjs">' + data.Y + '</td>';
                newRow3 = '<tr><td id="tdjsR" class="tdjs">' + data.R + '</td>';
                newRow4 = '<tr><td id="tdjsCT" class="tdjs">' + data.currentTime + '</td>';
                newRow5 = '<tr><td id="tdjsET" class="tdjs">' + data.executionTime + '</td>';
                newRow6 = '<tr><td id="tdjsRS" class="tdjs">' + data.RES + '</td>';

                $('.table').append(newRow);

                $('#X_TABLE').append(newRow1);
                $('#Y_TABLE').append(newRow2);
                $('#R_TABLE').append(newRow3);
                $('#CR_TABLE').append(newRow4);
                $('#SCR_TABLE').append(newRow5);
                $('#RES_TABLE').append(newRow6);
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