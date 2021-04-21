const title = document.querySelector(".title");

const color = ["yellowgreen","aqua","red","violet"]


const superEventHandler = {

mouseover:function()
{
title.innerHTML = "The mouse is here",
title.style.color = color[0];
},
mouseout:function()
{
title.innerHTML = "The mouse is gone",
title.style.color = color[1]
},
resize:function()
{
title.innerHTML = "you just resized!",
title.style.color = color[2]
},
contextmenu:function()
{
title.innerHTML = "That was a right click!",
title.style.color = color[3]  
}
}
title.addEventListener("mouseover",superEventHandler.mouseover);
title.addEventListener("mouseout",superEventHandler.mouseout);
window.addEventListener("resize",superEventHandler.resize);
window.addEventListener("contextmenu",superEventHandler.contextmenu);

