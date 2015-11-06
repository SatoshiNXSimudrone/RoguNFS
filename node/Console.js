var fs = require('fs');
var publicInterface ="";
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
for (x=0;x<items.length;x++){
   if(items[x].indexOf(".json") > -1 ){
    console.log(items[x]);
    contents1 = fs.readFileSync('../JSON/'+items[x]);
    jsonContent1 = JSON.parse(contents1);
    var current = null;
    var cnt = 0;
    var rows=0;
    console.log(jsonContent1.length);
    for (var i = 0; i < jsonContent1.GateWatch.length; i++) {
      console.log("Debug test");
        if ( jsonContent1.GateWatch[i].public_ip!= current) {
            if (cnt > 0) {
                console.log(current + ' comes --> ' + cnt + ' times<br>');
                console.log(rows2 + ' comes --> ' + cnt2 + ' times');
            }
            current = jsonContent1.GateWatch[i].public_ip;
            rows =i;
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
    }



   contents2 = fs.readFileSync('../JSON/subnets/'+jsonContent1.GateWatch[x].name+"_abyss.json");
   jsonContent2 = JSON.parse(contents2);

 // subnet 
  var current2 = null;
  var cnt2 = 0;
  var rows2=0;
	 for (var j = 0; j < jsonContent2.abyss.length; j++) {
        if ( jsonContent2.abyss[j].ip!= current2) {
            if (cnt2 > 0) {
                console.log(current2 + ' comes --> ' + cnt2 + ' times');
                console.log(rows2 + ' comes --> ' + cnt2 + ' times');
            }
            current2 = jsonContent2.abyss[j].ip;
            cnt2 = 1;
            rows2=j;
        } else {
            cnt2++;
        }
    }
    if (cnt2 > 0) {
        console.log(current2 + ' comes --> ' + cnt2 + ' times');
    }
}

}
//setPage();
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

/*

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

*/
