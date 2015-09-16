function myFunction() {
        document.getElementsByTagName("div")[0].innerHTML = document.getElementById("txt").value;
        function validateEmail(email) {
        var regex = /.*?@.*?(\.[a-z]{2,}){1,2}/g;
        return regex.test(email);
    }

    var validate = validateEmail(document.getElementById("txt").value);
        if (validate === true) {
            document.getElementsByTagName("div")[0].style.backgroundColor = "green";
        } else {
            document.getElementsByTagName("div")[0].style.backgroundColor = "red";
        }
    };