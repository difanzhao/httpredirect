// set up plain http server

var express = require('express');
var http = express();

// set up a route to redirect http to https
http.get('*',function(req,res){  
    res.redirect('https://report.ddns.net'+req.url)
})

// have it listen on 80
http.listen(80)