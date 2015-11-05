var fs = require('fs');
 var publicInterface ="";
 PIP = new Array();
SN= new Array();
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
                '<h5 class="grey-text text-lighten-4"><i class="material-icons">visibility</i>RogueNFS.</h5>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</header>'+
        '<div id="Scontainer">';

var lastPart='</div>'+
          '<footer class="page-footer teal lighten-2">'+
          '<div class="footer-copyright">'+
            '<div class="container">'+
            '© 2015 RogueFendorLabs'+
            '<a class="grey-text text-lighten-4 right" href="#!">RogueFendorLabs@gmail.com</a>'+
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
  var x = items.length;
  
 var y ;
  for(y=0;y < x;y++){
    if(items[y].indexOf(".json") > -1 ){
      console.log(items[y]);
       contents1 = fs.readFileSync('../JSON/'+items[y]);
       jsonContent1 = JSON.parse(contents1);
       var n = jsonContent1.GateWatch.length;
       var index;
       for(index=0;index<n;index++){
         if(index==0){
            publicInterface+='<ul class="collapsible popout" data-collapsible="accordion">'+
                 '<li>'+
                  '<div class="collapsible-header pink darken-3"><i class="material-icons">perm_identity</i>NAME</div>'+
                  '<div class="collapsible-body blue-text text-darken-2"><p>'+jsonContent1.GateWatch[index].name+'</p></div>'+
                '</li>'+
                '<li>'+
                  '<div class="collapsible-header pink darken-3"><i class="material-icons">query_builder</i>TIME</div>'+
                  '<div class="collapsible-body green-text text-darken-2"><p>'+jsonContent1.GateWatch[index].stamp+'</p></div>'+
                '</li>'+
                '<li>'+
                  '<div class="collapsible-header pink darken-3"><i class="material-icons">settings_input_antenna</i>IP</div>'+
                  '<div class="collapsible-body red-text text-lighten-2"><p>'+jsonContent1.GateWatch[index].public_ip+'</p></div>'+
                '</li>'+
                '<li>'+
                  '<div class="collapsible-header pink darken-3"><i class="material-icons">settings_input_component</i>PORT/S</div>'+
                  '<div class="collapsible-body blue-text text-lighten-2"><p>'+jsonContent1.GateWatch[index].port+'</p></div>'+
                '</li>'+
                '<li>'+
                  '<div class="collapsible-header pink darken-3"><i class="material-icons">info_outline</i>OS</div>'+
                  '<div class="collapsible-body green-text text-lighten-2"><p>'+jsonContent1.GateWatch[index].os+'</p></div>'+
                '</li>'+
                '<li>'+
                  '<div class="collapsible-header pink darken-3"><i class="material-icons">info_outline</i>SUBNETS</div>'+
                  '<div class="collapsible-body grey-text text-lighten-4">';

          }
          else{
              PIP[index]=new Array( jsonContent1.GateWatch[index].name,jsonContent1.GateWatch[index].stamp,jsonContent1.GateWatch[index].public_ip,jsonContent1.GateWatch[index].port,jsonContent1.GateWatch[index].os);
              if(jsonContent1.GateWatch[index -1].public_ip == jsonContent1.GateWatch[index].public_ip){
                 PIP[index][3]+="\n"+jsonContent1.GateWatch[index].port;
                 console.log("I should not be in here!!!!!!!!!!!!!!!!!!!!!!!");
               }
          }
          contents2 = fs.readFileSync('../JSON/subnets/'+jsonContent1.GateWatch[index].name+"_abyss.json");
          jsonContent2 = JSON.parse(contents2);
          var n2= jsonContent2.abyss.length;
          var index2;
          for(index2=0;index2<n2;index2++){
            console.log("subnets are build "+ index2);
            if(index2==0){
              console.log("first block is being  build "+ index2);
               publicInterface+='<ul class="collapsible popout" data-collapsible="accordion" >'+
                             '<li>'+
                              '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">perm_identity</i>NAME</div>'+
                              '<div class="collapsible-body blue-text text-darken-2"><p>'+jsonContent2.abyss[index2].name+'</p></div>'+
                            '</li>'+
                            '<li>'+
                              '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">query_builder</i>TiME</div>'+
                              '<div class="collapsible-body green-text text-darken-2"><p>'+jsonContent2.abyss[index2].stamp+'</p></div>'+
                            '</li>'+
                            '<li>'+
                              '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">settings_input_antenna</i>IP</div>'+
                              '<div class="collapsible-body red-text text-darken-2"><p>'+jsonContent2.abyss[index2].ip+'</p></div>'+
                            '</li>'+
                            '<li>'+
                              '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">settings_input_component</i>PORTS</div>'+
                              '<div class="collapsible-body blue-text text-darken-2"><p>'+jsonContent2.abyss[index2].port+'</p></div>'+
                            '</li>'+
                            '<li>'+
                              '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">info_outline</i>OS</div>'+
                              '<div class="collapsible-body green-text text-darken-2"><p>'+jsonContent2.abyss[index2].os+'</p></div>'+
                            '</li>'+
                        '</ul>';
           }
           else{
              SN[index2] = new Array( jsonContent2.abyss[index2].name,jsonContent2.abyss[index2].stamp,jsonContent2.abyss[index2].ip,jsonContent2.abyss[index2].port,jsonContent2.abyss[index2].os);
               console.log("ARRAY block is being  build "+ index2);
               console.log(SN[0],SN[1],SN[2],SN[3],SN[4]);
              if(jsonContent2.abyss[index2 -1].ip == jsonContent2.abyss[index2].ip){
                  SN[index2][3]+="\n"+jsonContent2.abyss[index].port;
                   console.log("building ports "+ SN[index2][3]);
                  console.log("I should DEFINITLY be in here!!!!!!!!!!!!!!!!!!!!!!!");
              }


           }

        }

      }
          
    }
  }
  console.log("RETURN TO SENDER HELP!!!!!!!!!!!!!!!!!!!!!!!!!!!"+PIP.length +" " +SN.length);
  var row;
  var col;
   console.log(PIP.length);

  if(PIP.length>0){
      for (row=1;row<PIP.length+1;row++){
          console.log("Building subnets from Arrays");
           for (col=0;col<PIP[row].length;col++){ 
                console.log("building puplic block "+ row);

              publicInterface+='<ul class="collapsible popout" data-collapsible="accordion">'+
             '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">perm_identity</i>NAME</div>'+
              '<div class="collapsible-body blue-text text-darken-2"><p>'+PIP[row][0]+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">query_builder</i>TIME</div>'+
              '<div class="collapsible-body green-text text-darken-3"><p>'+PIP[row][1]+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">settings_input_antenna</i>IP</div>'+
              '<div class="collapsible-body red-text text-darken-2"><p>'+PIP[row][2]+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">settings_input_component</i>PORTS</div>'+
              '<div class="collapsible-body blue-text text-darken-2"><p>'+PIP[row][3]+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">info_outline</i>OS</div>'+
              '<div class="collapsible-body green-text text-darken-2"><p>'+PIP[row][4]+'</p></div>'+
            '</li>'+
            '<li>'+
              '<div class="collapsible-header pink darken-3"><i class="material-icons">info_outline</i>Subnets</div>'+
              '<div class="collapsible-body grey-text text-lighten-4">';

               for (row2=1;row2<SN.length+1;row2++){    
                   console.log("building subnet block "+ row2);
                    
                   publicInterface+='<ul class="collapsible popout" data-collapsible="accordion" >'+
                     '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">perm_identity</i>NAME</div>'+
                      '<div class="collapsible-body blue-text text-darken-2"><p>'+SN[row2][0]+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">query_builder</i>TIME</div>'+
                      '<div class="collapsible-body green-text text-darken-2"><p>'+SN[row2][1]+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">settings_input_antenna</i>IP</div>'+
                      '<div class="collapsible-body red-text text-darken-2"><p>'+SN[row2][2]+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">settings_input_component</i>PORT/S</div>'+
                      '<div class="collapsible-body blue-text text-darken-2"><p>'+SN[row2][3]+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">info_outline</i>OS</div>'+
                      '<div class="collapsible-body green-text text-darken-2"><p>'+SN[row2][4]+'</p></div>'+
                    '</li>'+
                '</ul>';
         
                }
                                 
          }

        }
      }
      else{
             console.log("This is the SN block size:"+SN.length);   
            console.log("This is the SN name:"+SN[1][0]);  
             for (row2=1;row2<SN.length;row2++){    
                   console.log("building subnet block ");
                   
                   publicInterface+='<ul class="collapsible popout" data-collapsible="accordion" >'+
                     '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">perm_identity</i>NAME</div>'+
                      '<div class="collapsible-body blue-text text-darken-2"><p>'+SN[row2][0]+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">query_builder</i>TIME</div>'+
                      '<div class="collapsible-body green-text text-darken-2"><p>'+SN[row2][1]+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">settings_input_antenna</i>IP</div>'+
                      '<div class="collapsible-body red-text text-darken-2"><p>'+SN[row2][2]+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">settings_input_component</i>PORT/S</div>'+
                      '<div class="collapsible-body blue-text text-darken-2"><p>'+SN[row2][3]+'</p></div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="collapsible-header   deep-orange accent-3"><i class="material-icons">info_outline</i>OS</div>'+
                      '<div class="collapsible-body green-text text-darken-2"><p>'+SN[row2][4]+'</p></div>'+
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





 