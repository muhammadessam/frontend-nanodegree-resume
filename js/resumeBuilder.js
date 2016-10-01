var formatedname = HTMLheaderName.replace("%data%", "Muhammad Essam");
var formatedrole = HTMLheaderRole.replace("%data%", "Front-End Web Dev");
$("#header").prepend(formatedrole);
$("#header").prepend(formatedname);
var skills = ["awesomeness","programming",{"name":"30"},"sdfgdsg"];
$("#main").append(skills[2]);