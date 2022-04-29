var data;
function kidnap(newUrl) {
    James = [];
    //These variables store the data returned from the functions.
    let baseUrl = 'https://www.thebluealliance.com/api/v3'; //base TBA url
    //This ajax code requests data from The Blue Alliance
    $.ajax({
        url: baseUrl + newUrl, //This is the url we send to TBA which requests our data
        headers: {
            'X-TBA-Auth-Key': 'ZsBo7pJNXNffiaz7RQmC4WgA8e8ATyex840UH45GwikuN86086uIfw57rvkJ7CLC' // auth key i think its mine lol
        },
        method: 'GET', //This defines the method we use to pull data from Blue Alliance, in this instance we are using GET
        dataType: 'json', //This defines what format the data that is pulled from Blue Alliance will be in, in this instance we are pulling Json files
        async: false,
        success: function(data) { //this function logs our data in the console if it is successfully pulled
            James = data;
            //console.log(James);
            //document.getElementById("displayText").innerHTML = JSON.stringify(James);
            displayAsTable();
            data = James;
            console.log(data);
            return James;
        },
    });
    $(document).ajaxError(function() { //this function alerts an error if the pulling the data is unsuccessful
        alert("An error occurred!");
    });

    //console.log(James);
}

function displayAsTable(){
    const headers = document.getElementById("headers");
    const tableBody = document.getElementById("tbl");
    tableBody.innerHTML = "";
    headers.innerHTML = "";
    try {
        Object.keys(James[0]).forEach(title => {
            headers.insertAdjacentHTML("beforeend", "<th><select onchange='updateColumn()' class='columnHead' id='header" + title + "'><option>Select Data</option></select></th>")
            Object.keys(James[0]).forEach(title2 => {
                currentHeader = document.getElementById("header" + title);
                currentHeader.insertAdjacentHTML("beforeend", "<option>" + JSON.stringify(title2).slice(1,JSON.stringify(title2).length - 1) + "</option>")
            });
        });
    } catch (error) {
        
    }
}

function updateColumn(){
    document.getElementById("tbl").innerHTML = "";
    var i = 0;
    James.forEach(row => {
        i++;
        try {
            document.getElementById("row" + i).innerHTML = "";
        } catch (error) {
        }
        document.getElementById("tbl").insertAdjacentHTML("beforebegin","<tr id='row" + i + "'></tr>");
        headElements = document.getElementsByClassName("columnHead");
        var arrHeads = Array.from(headElements);
        arrHeads.forEach(cell => {
            document.getElementById("row" + i).insertAdjacentHTML("beforeend", "<td>" + JSON.stringify(row[(cell.value)]) + "</td>");
        });
    });
}