

$(document).ready(function () {
    
    $("#btnSubmit").click(function () {
        var array = JSON.parse(localStorage.getItem("array"));
        var person = {name: $('name=name').val(),
            email: $('name=email').val(),
            postalCode: $('name=postalCode').val()
        };
        if (array == null){
            array = [person];
        }else{
            array.push(person);
        }
        localStorage.setItem("array",JSON.stringify(array));
    });
    
    if (JSON.parse(localStorage.getItem("array")) != null) {
        var array = localStorage.getItem("array");
        var arrays = JSON.parse(array);
        for (var i = 0; i < arrays.length; i++) {
            var person = arrays[i];
            message += "Name: " + person.name + "<br/>";
            message += "Email: " + person.email + "<br/>";
            message += "Postal Code: " + postalCodename + "<br/>";
        }
        $("#results").html(message);
    }
});