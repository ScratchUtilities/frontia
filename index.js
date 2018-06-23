GET https://api.scratch.mit.edu/proxy/featured
function sendAPIreq(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://api.scratch.mit.edu/proxy/featured' + projects, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response = xmlhttp.responseText;
            getthumbnail(response);
            getproxy(response);
            getID(response)
        }
        document.getElementById("result").innerHTML = result;