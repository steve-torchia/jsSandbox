// this is a comment
json = {
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "emailAddress": "silly@ion.com", 
    "fname": "", 
    "fngoeshereDude": "", 
    "respid": "5411"
  }, 
  "headers": {
    "Accept": "*/*", 
    "Content-Length": "63", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Headerone": "HeaderOneValue", 
    "Headertoo": "HeaderTooValue", 
    "Host": "httpbin.org", 
    "Referer": "test.pcm.com", 
    "User-Agent": "ion Platform/2.64.5905.26675 Release 64 (built on 3/2/2016 2:49:14 PM)"
  }, 
  "json": null, 
  "origin": "204.9.220.50", 
  "url": "http://httpbin.org/post"
}

var consoleLine = "<p class=\"console-line\"></p>";

console = {
  log: function(text) {
    $("#console-log").append($(consoleLine).html(text));
  }
};

console.log("Hello Console")

for (var key in json) {
    if (json.hasOwnProperty(key)) {
        if (/form/.test(key)) {
            console.log("TRUE");
        }
    }
    console.log("FALSE");
}

