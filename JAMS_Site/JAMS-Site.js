var names = ["Tom", "Lily", "Jose", "Sarah"];
var height = [65, 60, 72, 68];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
    $("show_results").onclick = showResult;
    $("add").onclick = addHeight;
    $("display_height").onclick = displayHeight;
    $("name").focus();
};

function showResult() {
    var averageHeight = 0;
    var highHeight = 0;
    var highName = "";
    for(i = 0; i < height.length; i++) {
        averageHeight += height[i];
        if(height[i] > highHeight){
            highHeight = height[i];
            highName = names[i];
        }
    }
    averageHeight = averageHeight/height.length;
    var result = "<h2>Results</h2><p>Average Height = " + averageHeight + 
                    "</p>" + "<p>Highest height = " + highName + " with a height of " + highHeight + "</p>";
    document.getElementById("result").innerHTML = result;
}

function displayHeight() {
    var heightTable = "<h2>Heights</h2><th>Name</th><th>Heights</th>";
    for(i = 0; i < height.length; i++) {
        heightTable = heightTable + "<tr><td>" + names[i] + "</td><td>" + height[i] + "</td></tr>";
    }
    document.getElementById("height_table").innerHTML = heightTable;
}

function addHeight() {
    if(document.getElementById("name").value == "" || parseInt(document.getElementById("height").value) < 0 
        || parseInt(document.getElementById("height").value) > 100 || isNaN(parseInt(document.getElementById("height").value))) {
        alert("You must enter a name and a valid height");
        $("name").focus();
        return false;
    }
    names.push(document.getElementById("name").value);
    height.push(parseInt(document.getElementById("height").value));
    $("name").focus();
}