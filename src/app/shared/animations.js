var toggleBtnMenuIcon= function() {
	document.getElementById("sideNavMenu").classList.toggle('side__nav--opened');
	var getList = document.getElementById('sideNavMenu__List').classList.value;
	if(getList == "active") {
		document.getElementById('sideNavMenu__List').classList.value = 'closed';
	}else{
		document.getElementById('sideNavMenu__List').classList.value = 'active';
	}

}