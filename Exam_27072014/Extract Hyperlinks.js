function solve(input) {
    var result = "";
    for (var i = 0; i < input.length; i++) {
        result = result + input[i];
    }
    var regex = /<a.+?<\/a>/g;
    while (match = regex.exec(result)) {
        var temp = match[0];
        var reg = /<a.*?>/g;
        var newTemp = reg.exec(temp);
        var link = newTemp[0];
        var newRegex = /(href\s*=\s*".*?")|(href\s*=\s*'.*?')|(href\s*=\s*.*?\s)|(href\s*=\s*.*?(?=>))/g;
        var lastTemp = newRegex.exec(link);        
        if (lastTemp != null) {
          var output = lastTemp[0];
          output=output.replace(/href\s*=/, '');
          output =output.trim();
          if (output[0]==='\"'||output[0]==='\'') {
            console.log(output.substring(1,output.length-1));
          }else{          
            console.log(output);
          }
        }
    }    
}

console.log(solve(['<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>Hyperlinks</title>',
    '<link href="theme.css\" rel=\"stylesheet" />',
    '</head>',
    '<body>',
    '<ul><li><a   href=\"/\"  id=\"home\">Home</a></li><li><a',
    ' class=\"selected\" href=/courses>Courses</a>',
    '</li><li><a href =',
    '\'/forum\' >Forum</a></li><li><a class=\"href\"',
    'onclick=\"go()\" href= \"#\">Forum</a></li>',
    '<li><a id=\"js\" href =',
    '\"javascript:alert(\'hi yo\')\" class=\"new\">click</a></li>',
    '<li><a id=\'nakov\' href =',
    'http://www.nakov.com class=\'new\'>nak</a></li></ul>',
    '<a href=\"#empty\"></a>',
    '<a id=\"href\">href=\'fake\'<img src=\'http://abv.bg/i.gif\'',
    'alt=\'abv\'/></a><a href=\"#\">&lt;a href=\'hello\'&gt;</a>',
    '<!-- This code is commented:',
    '<a href=\"#commented\">commentex hyperlink</a> -->',
    '</body>'
]));
