/*eslint-env browser*/

var employees = [
    ["Yuvraj Singh", "Data Scientist", 3423],
    ["Shaun Pollock", "SDE3", 3346],
    ["Shane Warne", "Application Support", 3232],
    ["Brett Lee", "Quality Assurance", 3333],
    ["Lasith Malinga", "Marketing", 3000],
];

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function del(n) {
    employees.splice(n, 1);
    loadEmployee();
}

function loadEmployee() {
    "use strict";
    var html = "";
    for (var i = 0; i < employees.length; i++) {
        var employee = employees[i];
        html += '<tr><td>' + employee[0] + '</td><td>' + employee[1] + '</td><td>' + employee[2] + '</td><td><button class="del-btn" onclick="del(' + i + ')">Delete</button></td></tr>';
    }
    
    document.querySelector("tbody").innerHTML = html;
    document.getElementById("count").innerHTML = employees.length;
}

window.onload = function () {
    loadEmployee();
}

var submit = $("submit");
submit.addEventListener("click", function () {
    var name = window.document.getElementById("name");
    var title = window.document.getElementById("title");
    var ext = window.document.getElementById("extension");

    if (!name.value) {
        window.document.querySelector(".reqname").style.display = "inline-block";
    }
    else {
        document.querySelector(".reqname").style.display = "none";
    }

    if (!title.value) {
        document.querySelector(".reqtitle").style.display = "inline-block";
    }
    else {
        document.querySelector(".reqtitle").style.display = "none";
    }

    if (!ext.value) {
        document.querySelector(".reqext").style.display = "inline-block";
    }
    else {
        document.querySelector(".reqext").style.display = "none";
    }

    if (name.value && title.value && ext.value) {
        employees.push([name.value, title.value, ext.value]);
        name.value = "";
        title.value = "";
        ext.value = "";
    }
    loadEmployee();
});
