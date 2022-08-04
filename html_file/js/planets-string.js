(function(){
    "use strict";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planets = planetsString.split('|').join('<br>');
               // planetsString.replaceAll('|', '<br>');
        // "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    document.body.innerHTML += planets;
    console.log(planets);

    planetsArray.push('</ul>');
    planetsArray.unshift('<ul>');
    var planetsList = planetsArray.join('<li>');
        // "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li>" +
        // "<li>Uranus</li><li>Neptune</li></ul>";
    document.body.innerHTML += planetsList;
    console.log(planetsList);

})();
