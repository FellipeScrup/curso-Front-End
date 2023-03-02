
var element = document.getElementsByClassName("box");

/*
var el = element[0];

el.style.width = 100;
el.style.height = 100;
el.style.backgroundColor = 'blue';
el.style.marginLeft = 200;
*/

for(var i = 0; i < element.length; i++)
{
    var el = element[i];

el.style.borderWidth = 5;
el.style.borderColor='black';
el.style.borderStyle = 'solid';
el.style.marginTop = 15;
el.style.width = 100;
el.style.height = 100;
el.style.backgroundColor = 'blue';
el.style.marginLeft = 200;
}