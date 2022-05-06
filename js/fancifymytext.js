function bigger() {
    if (document.getElementById("text").value === "") {
        alert("Text field is empty: Please type in text");
    } else {
        document.getElementById("text").style.fontSize = "24pt";
    }
}

function fancy() {
    let textInput = document.getElementById("text");
    if (textInput.value === "") {
        alert("Text field is empty: Please type in text");
        document.getElementById("fancy").checked = false;
    } else {
        if (document.getElementById("fancy").checked) {
            textInput.style.fontSize = "12pt";
            textInput.style.fontWeight = "bold";
            textInput.style.color = "blue";
            textInput.style.textDecoration = "underline";
            document.getElementById("boring").checked = false;
        }
    }
}

function boring() {
    let textInput = document.getElementById("text");
    if (textInput.value === "") {
        alert("Text field is empty: Please type in text");
        document.getElementById("boring").checked = false;
    } else {
        if (document.getElementById("boring").checked) {
            textInput.style.fontSize = "12pt";
            textInput.style.fontWeight = "normal";
            textInput.style.color = "#000000";
            textInput.style.textDecoration = "none";
            textInput.style.fontStyle = "Arial";
            document.getElementById("fancy").checked = false;
        }
    }
}

function moo() {
    let textInput = document.getElementById("text");
    if (textInput.value === "") {
        alert("Text field is empty: Please type in text");
    } else {
        textInput.style.textTransform = "uppercase";
        let parts = textInput.value.split(".");
        textInput.value = parts.join("-Moo.");
    }
}