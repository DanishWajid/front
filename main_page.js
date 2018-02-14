const app = require('express')()
const http = require('http').Server(app)

app.get('/', function(req, res){

    if ('text' in req.query) {
        document.getElementById('text').innerHTML = req.query.text
        document.getElementById("1").style.visibility="hidden";
        document.getElementById("2").style.visibility="hidden";
        document.getElementById("3").style.visibility="hidden";
        document.getElementById("4").style.visibility="hidden";
        document.getElementById("5").style.visibility="hidden";
        document.getElementById("6").style.visibility="hidden";
        document.getElementById("7").style.visibility="hidden";
        document.getElementById("8").style.visibility="hidden";

    }
   if('list' in req.query){
        var my_array = req.query.list.split(',')

        for (var i = 1; i <= my_array.length; i++) {
            // document.getElementsByClassName(i.toString()).style.visibility="visibile";
            document.getElementById(i.toString()).style.visibility="Visible";
            document.getElementById(i.toString()).innerHTML = my_array[i-1]

        }
    }

    if ('prompt' in req.query) {
        document.getElementById('prompt').innerHTML = req.query.prompt
    }


    res.end()
})

http.listen(8080)
