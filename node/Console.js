var fs = require('fs');
 var publicInterface ="";

var firstPart='<!DOCTYPE html>'+
  '<html>'+
    '<head>'+
      '<!--Import Google Icon Font-->'+
      '<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+
      '<!-- Compiled and minified CSS -->'+
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css">'+
      '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>'+
      '<style>'+
            '#Scontainer {'+
                  'height: 450px;'+
                  'width: 360px;'+
                  'overflow: auto;'+
                'background-color: black;'+
            '}'+
            'body {'+
              'background-color:black;'+
            '}'+
      '</style>'+
    '</head>'+
    '<body>'+
      '<!--Import jQuery before materialize.js-->'+
      '<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>'+
      '<!-- Compiled and minified JavaScript -->'+
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/js/materialize.min.js"></script>'+   
      '<script type="text/javascript" src="script.js"></script>'+
      '<!--Let browser know website is optimized for mobile-->'+
 
      '<header class="page-header teal lighten-2">'+
          '<div class="container">'+
            '<div class="row">'+
              '<div class="col l6 s12">'+
                '<h5 class="grey-text text-lighten-4"><i class="material-icons">visibility</i>content.</h5>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</header>'+
        '<div id="Scontainer">';

var lastPart='</div>'+
          '<footer class="page-footer teal lighten-2">'+
          '<div class="footer-copyright">'+
            '<div class="container">'+
            '© 2014 Copyright Text'+
            '<a class="grey-text text-lighten-4 right" href="#!">More Links</a>'+
            '</div>'+
          '</div>'+
        '</footer>'+
    '</body>'+
  '</html>';

var set=0;
var obj1;
var obj2;
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
 
var path = process.argv[2];
 
fs.readdir(path, function(err, items) {
    /* content here */
// Define JSON File
// Get content from file
var contents1;
var contents2
var jsonContent1;
var jsonContent2;
var x;
// public Ips


for (x=0;x<items.length-1;x++){
   contents1 = fs.readFileSync('../JSON/'+items[x]);
   jsonContent1 = JSON.parse(contents1);
   

  publicInterface+='<ul class="collapsible popout" data-collapsible="accordion">'+
             '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">perm_identity</i>Name</div>'+
              '<div class="collapsible-body grey-text text-lighten-4"><p>'+jsonContent1.GateWatch[x].name+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">query_builder</i>First</div>'+
              '<div class="collapsible-body grey-text text-lighten-4"><p>'+jsonContent1.GateWatch[x].stamp+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">settings_input_antenna</i>First</div>'+
              '<div class="collapsible-body grey-text text-lighten-4"><p>'+jsonContent1.GateWatch[x].public_ip+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">settings_input_component</i>input</div>'+
              '<div class="collapsible-body grey-text text-lighten-4"><p>'+jsonContent1.GateWatch[x].port+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">info_outline</i>Third</div>'+
              '<div class="collapsible-body grey-text text-lighten-4"><p>'+jsonContent1.GateWatch[x].os+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">info_outline</i>Subnets</div>'+
              '<div class="collapsible-body grey-text text-lighten-4">';
   console.log(publicInterface);    

        
   contents2 = fs.readFileSync('../JSON/subnets/'+jsonContent1.GateWatch[x].name+"_abyss.json");
   jsonContent2 = JSON.parse(contents2);
   var len = jsonContent2.abyss.length;

 // subnet 
	for(i=0;i<len;i++){

		publicInterface+='<ul class="collapsible popout" data-collapsible="accordion" >'+
                     '<li>'+
                      '<div class="collapsible-header  blue-grey darken-3"><i class="material-icons">perm_identity</i>name</div>'+
                      '<div class="collapsible-body"><p>'+jsonContent2.abyss[i].name+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header  blue-grey darken-3"><i class="material-icons">query_builder</i>First</div>'+
                      '<div class="collapsible-body"><p>'+jsonContent2.abyss[i].stamp+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header  blue-grey darken-3"><i class="material-icons">settings_input_antenna</i>First</div>'+
                      '<div class="collapsible-body"><p>'+jsonContent2.abyss[i].ip+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header  blue-grey darken-3"><i class="material-icons">settings_input_component</i>input</div>'+
                      '<div class="collapsible-body"><p>'+jsonContent2.abyss[i].port+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header  blue-grey darken-3"><i class="material-icons">info_outline</i>Third</div>'+
                      '<div class="collapsible-body"><p>'+jsonContent2.abyss[i].name+'</p></div>'+
                    '</li>'+
                '</ul>';
     

	}


}


setPage();
});

function setPage(){
	var path2 = '../html/index.html',
	buffer = new Buffer(firstPart+"\n"+publicInterface+"\n"+lastPart);

	fs.open(path2, 'w', function(err, fd) {
	    if (err) {
	        throw 'error opening file: ' + err;
	    }

	    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
	        if (err) throw 'error writing file: ' + err;
	        fs.close(fd, function() {
	            console.log('file written');
	        })
	    });
	});
}