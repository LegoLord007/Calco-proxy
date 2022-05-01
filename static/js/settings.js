// check if AB-cloak-check is set to true
// nothing valuble here so its un obf
var modal_settings = document.querySelector(".settingsContainer");

function togglesettings() {
    modal_settings.classList.toggle("show-settings");

}



var ABCheck = document.querySelector(".AB-cloak-check")




// check if the box is checked
function checkChecked() {
    if (ABCheck.checked == true) {
        // if checked, set the cookie
        localStorage.setItem("AB-cloak-check", "true");
    } else {
        // if not checked, set the cookie
        localStorage.setItem("AB-cloak-check", "false");
    }
}

if (localStorage.getItem("AB-cloak-check") === "true") {
    ABCheck.checked = true;
} else {
    ABCheck.checked = false;
}

var setpanic = document.querySelector(".setpanicURL");
var panicInput = document.querySelector(".panicURLinput");

setpanic.addEventListener("click", function () {
    if (panicInput.value == null || panicInput.value == "") {
        alert("an invalid input was set. please try again")
    } else {
        if (panicInput.value.includes("http://") || panicInput.value.includes("https://")) {
            panicurl = panicInput.value;
            localStorage.setItem("panicurl", panicurl);
            alert("panic url set to " + panicurl)
        } else {
            panicurl = "https://" + panicInput.value;
            localStorage.setItem("panicurl", panicurl);
            alert("panic url set to " + panicurl)
        }


    }
})


var panicurl = localStorage.getItem("panicurl");



window.onkeydown = function (e) {
    if (e.keyCode === 192) {

        window.open(panicurl, "_blank")

    }
}