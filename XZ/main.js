







$("#mainform").submit(function (e){     // чекнуть     e - создаем событие
    e.preventDefault();                 // отменяем стандартное событие браузера
    let form = $(this);
    $.ajax({
        url: "php/Action.php",
        method: "POST",
        dataType: "json",
        data: form.serialize(),
        success: function (data){


        }
    })
})