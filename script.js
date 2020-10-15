createProjects = (projects) =>{
  let output = "";
  for(var i=0; i< projects.length; i++){
    output += "<div class = 'project'><h2>"+projects[i].title+"</h2>";
    output += "<ul class = 'horizontal links'>";
    output += (projects[i].hasOwnProperty('github')?"<li><a href = '"+projects[i].github+"' target = 'blank'><span class = 'fa fab fa-github'></span><span class = 'link-text'>"+projects[i].github+"</span></a></li>":"");
    output += (projects[i].hasOwnProperty('link')?"<li><a href = '"+projects[i].link+"' target = 'blank'><span class = 'fa fas fa-link'></span><span class = 'link-text'>"+projects[i].link+"</span></a></li>":"");
    output += "</ul><p>"+projects[i].description+"</p>";
    output += "<ul class = 'horizontal languages'>";
    for(var j=0;j<projects[i].lang.length; j++){
      output+= "<li>"+projects[i].lang[j]+"</li>";
    }
    output+="</ul></div>";
  }
  return output;
}


createExperiences = (experiences) =>{
  let output = "";
  for(var i = 0; i < experiences.length; i++){
    output+="<div class = 'experience'><h2>"+experiences[i].experience+"</h2>";
    output+="<h3>"+experiences[i].location+"</h3>";
    output+="<h4>"+experiences[i].date+"</h4>"+experiences[i].description+"</div>";
  }
  return output;
}

createSkills = (skills) => {
  let output = "";
  for(var i = 0; i < skills.length; i++){
    output += '<h4 class = "skill skill-'+skills[i].level+'">' + skills[i].skill + '</h4>';
  }
  return output;
}
