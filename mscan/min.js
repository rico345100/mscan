function scan(e,s){return new Promise(function(s,r){var t=e;fs.readdir(t,function(e,n){if(e)return r({status:500,message:e.message,stack:e.stack});if(0===n.length)return s({});for(var i={},a=0,m=0;m<n.length;m++)!function(e){fs.stat(t+"/"+e,function(m,o){return m?r({status:500,message:m.message,stack:m.stack}):(i[encodeURIComponent(e)]={stats:o,mime:mime.lookup(t+"/"+e),isDirectory:o.isDirectory()},a++,a===n.length?s(i):void 0)})}(n[m])})})}var fs=require("fs"),mime=require("mime"),mkdirp=require("mkdirp");module.exports={scan:scan};