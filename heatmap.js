
//var beacon = ;
var beaconLoc = [<?= $beacon_location ?>];
var beaconHeat = [1, 2, 2, 3, 3, 4]; //Heat level
//beacon count removed
setInterval(changeHeat, 1000);

function beaconColorChange(loc, level) { //Change grid color
    var element = document.getElementById(loc);
    element.classList.remove("heatlvl0");
    element.classList.remove("heatlvl1");
    element.classList.remove("heatlvl2");
    element.classList.remove("heatlvl3");
    element.classList.remove("heatlvl4");
    element.classList.add("heatlvl" + level);
}
function changeColor() { //change beacon color by beacon count and the coordinates
    var i, k;
    for (i = 0; i < beaconLoc.length; {
        for(k = 0; k <beaconLoc[{
            beaconColorChange(beaconLoc[i][k], beaconHeat[i]);
}
        }
    }

function changeHeat() { //Sets random number as heat demo, use the order in database
    beaconHeat[0] = Math.floor(Math.random() * 5);
    beaconHeat[1] = Math.floor(Math.random() * 5);
    beaconHeat[2] = Math.floor(Math.random() * 5);
    beaconHeat[3] = Math.floor(Math.random() * 5);
    beaconHeat[4] = Math.floor(Math.random() * 5);
    changeColor();
    console.log("changed");
}
window.onload = changeColor();