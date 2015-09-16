function solve(input) {
    console.log("<table border=\"1\">");
    console.log("<thead>");
    console.log("<tr><th colspan=\"3\">Blades</th></tr>");
    console.log("<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>");
    console.log("</thead>");
    console.log("<tbody>");
    for (var i = 0; i < input.length; i++) {
        var lenght = parseInt(input[i]);
        if (lenght > 10) {
            if (lenght > 40) {
                var bladeType = 'sword';
            } else {
                var bladeType = 'dagger';
            }
            if (lenght % 5 === 1) {
                var bladeApplication = 'blade';
            } else if (lenght % 5 === 2) {
                var bladeApplication = 'quite a blade';
            } else if (lenght % 5 === 3) {
                var bladeApplication = 'pants-scraper';
            } else if (lenght % 5 === 4) {
                var bladeApplication = 'frog-butcher';
            } else {
                var bladeApplication = '*rap-poker';
            }
            console.log('<tr><td>' + lenght + '</td><td>' + bladeType + '</td><td>' + bladeApplication + '</td></tr>');
        }
    }

    console.log("</tbody>");
    console.log("</table>");
}


console.log(solve([17.8, 19.4, 13, 55.8, 126.96541651, 3]));
