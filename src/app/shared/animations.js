var toggleBtnMenuIcon = function() {
    document.getElementById("sideNavMenu").classList.toggle('side__nav--opened');
    document.getElementById("btn__sideNavigation").classList.toggle('change');
    var getList = document.getElementById('sideNavMenu__List').classList.value;
    if (getList == "active") {
        document.getElementById('sideNavMenu__List').classList.value = 'closed';
    } else {
        document.getElementById('sideNavMenu__List').classList.value = 'active';
    }

}
// var hideBoxes = function(box) {
//     var x = document.querySelectorAll(".vanilla");
//     if(box == "vanilla")
//     for (var i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
// }
