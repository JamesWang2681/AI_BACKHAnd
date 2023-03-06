function getData()
{
var elements = document.getElementById("inputForm").elements
var obj = {}
for (var i = 0; i < elements.length;i++)
{
var item = elements.item(i)
obj[item.name]  = item.value
}
return obj
}

function predict()
{
var form = getData()
var data = {}
data["form"] = form
data["output"] = localStorage.getItem("output")
data["type"]= localStorage.getItem("type")
data["algorithm"] = localStorage.getItem("algorithm")
console.log(form)
$.ajax({
        type: 'post',
        url: '/predict',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (data) {
            var result = document.getElementById('result');
            result.innerHTML = data;
        }
    });
}
function buildForm()
{
var algorithm = localStorage.getItem("algorithm")
var title = document.getElementById("title")
title.innerHTML = algorithm + "- prediction"
var input = localStorage.getItem("input").split(',')
var form = document.getElementById("inputForm")
for (var item of input)
{
var fn = document.createElement("input")
fn.setAttribute("type", "text")
fn.setAttribute("name", item)
fn.setAttribute("placeholder", item)
fn.setAttribute("class", "form-control")
fn.setAttribute("id", item)
var label = document.createElement("label")
label.setAttribute("for", item)
label.innerHTML = item
form.appendChild(label)
form.appendChild(fn)
}
var s = document.createElement("button")
s.setAttribute("type", "button")
s.setAttribute("class", "btn btn-primary")
s.innerHTML = "predict"
s.setAttribute("onclick", "predict()")
var br = document.createElement("br")
form.append(br)
form.appendChild(s)
}
buildForm()