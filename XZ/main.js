
$("#mainform").submit(function (e){     // чекнуть     e - создаем событие
    e.preventDefault();                 // отменяем стандартное событие браузера
    let form = $(this);
    $.ajax({
        url: "php/actionn.php",
        method: "POST",
        dataType: "json",
        data: form.serialize() + '&time=' + new Date().getTimezoneOffset(),
        success: function (data){



        }
    })
})