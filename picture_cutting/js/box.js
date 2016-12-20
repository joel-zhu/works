window.onload = function() {
	document.onselectstart = new Function('event.returnValue=false;');
	$( "#main" ).draggable({ containment: 'parent' ,drag: setChoice,stop:setChoice});
	var mainDiv = document.getElementById('main');

	var rightDiv = document.getElementById('right');
	var upDiv = document.getElementById('up');
	var leftDiv = document.getElementById('left');
	var downDiv = document.getElementById('down');
	var leftUpDiv = document.getElementById('left-up');
	var leftDownDiv = document.getElementById('left-down');
	var rightUpDiv = document.getElementById('right-up');
	var rightDownDiv = document.getElementById('right-down');

	var ifKeydown = false;
	var contact = "";//按下触点

	rightDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeydown = true;
		contact = "right";
	}

	upDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeydown = true;
		contact = "up";
	}

	leftDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeydown =true;
		contact = "left";
	}

	downDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeydown = true;
		contact = "down";
	}

	rightUpDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeydown = true;
		contact = "right-up";
	}

	rightDownDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeydown = true;
		contact = "right-down";
	}

	leftDownDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeydown = true;
		contact = "left-down";
	}

	leftUpDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeydown = true;
		contact = "left-up";
	}

	window.onmouseup = function() {
		ifKeydown = false;
	}

	window.onmousemove = function(e) {
		if(ifKeydown == true){

			switch (contact){
				case "right" : rightMove(e);break;
				case "right-up": rightMove(e);upMove(e);break;
				case "right-down": rightMove(e);downMove(e);break;	
				case "up": upMove(e);break;
				case "left":leftMove(e);break;
				case "left-down": leftMove(e);downMove(); break;
				case "left-up": leftMove(e);upMove(e);break;	
				case "down": downMove(e);break;					
			}
		}
		setChoice();
		setPreview();
	}

function rightMove(e) {
	var x = e.clientX;
	var addWidth = "";
	var widthBefore = mainDiv.offsetWidth - 2;
	addWidth = x - getPosition(mainDiv).left - widthBefore;
	mainDiv.style.width = addWidth + widthBefore +"px";
}

function upMove(e) {
	var y = e.clientY;
	var mainY = getPosition(mainDiv).top;
	var addHeight = mainY - y;
	var heightBefore = mainDiv.offsetHeight - 2;
	mainDiv.style.height = heightBefore + addHeight + "px";
	mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
}

function leftMove(e) {
	var x = e.clientX;
	var mainX = getPosition(mainDiv).left;
	var addWidth = mainX - x;
	var widthBefore = mainDiv.offsetWidth - 2;
	mainDiv.style.width = widthBefore + addWidth + "px";
	mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
}

function downMove(e) {
	var y = e.clientY;
	var heightBefore = mainDiv.offsetHeight - 2;
	var mainY = getPosition(mainDiv).top;
	var addHeight = y - mainY - heightBefore;
	mainDiv.style.height = addHeight + heightBefore + "px";	
}

function getPosition(node) {
	
	var left = node.offsetLeft;
	var top = node.offsetTop;
	var parent = node.offsetParent;

	while(parent != null) {
		left += parent.offsetLeft;
		top += parent.offsetTop;
		parent = parent.offsetParent;
	}
	  return {'left' : left, 'top' : top};
}

function setChoice() {
	var top = mainDiv.offsetTop;
	var right = mainDiv.offsetWidth + mainDiv.offsetLeft;
	var bottom =mainDiv.offsetHeight + mainDiv.offsetTop;
	var left = mainDiv.offsetLeft;
	var img2 = document.getElementById('img2');
	img2.style.clip = "rect("+ top + "px," + right + "px," + bottom + "px," + left + "px)";
}

function setPreview() {
	var top = mainDiv.offsetTop;
	var right = mainDiv.offsetWidth + mainDiv.offsetLeft;
	var bottom =mainDiv.offsetHeight + mainDiv.offsetTop;
	var left = mainDiv.offsetLeft;
	var img3 = document.getElementById('img3');
	img3.style.top = -top + "px";
	img3.style.left = -left + 'px';
	img3.style.clip = "rect("+ top + "px," + right + "px," + bottom + "px," + left + "px)";
}
}