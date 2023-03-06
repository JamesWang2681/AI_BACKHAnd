let result_table = document.getElementById("resultTable");
function setheaders()
{
let tr = result_table.insertRow();
labels = ['Algorithm', 'Accuracy', 'Standard Deviation','Select Algorithm']
for (let col of labels){
let td = tr.insertCell();
td.innerHTML = col;
td.style = "text-align: center";
td.style.background = '#00FF00'
}
}
function buildTable()
{
response = JSON.parse(localStorage.getItem("response"))
console.log(response)
result_table.innerHTML = ""
setheaders()
for (let row of response[0])
{
let tr = result_table.insertRow()
for (let col of row)
{
let td = tr.insertCell();
td.innerHTML = col;
}
let td = tr.insertCell()
td.style = "text-align: center"
td.innerHTML = '<button  type="button" onclick= "gotoPredictionPage(\''+row[0]+'\')" class="btn btn-dark" id ='+row[0]+'>select</button>';
}
}
buildTable()