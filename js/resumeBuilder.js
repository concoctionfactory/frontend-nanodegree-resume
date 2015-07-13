//"bio"
var bio = {
	"name": "david lee",
	"role": "web dev",
	"contacts": {
		"email": "concoctionfactory@gmail.com",
		"github": "concoctionfactoy",
		"location": "NYC"
	},
	"welcomeMessage": "welcome all",
	"skills":["3d", "graphic design", "web dev"],
	"bioPic":"images/fry.jpg",
}

bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);


	if(bio.contacts.mobile !== undefined){
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
	}
	if(bio.contacts.email !== undefined){
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
	}
	if(bio.contacts.twitter !== undefined){
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
	}

	if(bio.contacts.github !== undefined){
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
	}
	if(bio.contacts.blog !== undefined){
		var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
		$("#topContacts").append(formattedBlog);
		$("#footerContacts").append(formattedBlog);
	}
	if(bio.contacts.location !== undefined){
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
	}


	var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);



	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}


//"education"
var education = {
	"schools":[
		{
			"name": "NYU-POLY",
			"location": "NYC",
			"degree": "BS",
			"major": ["digtalMedia"],
			"dates": "2006-2010",
			"url":" http://engineering.nyu.edu/"
		},

		{
			"name":"Shillington",
			"location": "NYC",
			"degree": "Graphic Design",
			"major": ["Graphic Design"],
			"dates": "2014-2014",
			"url":" http://shillingtonschool.com/"
		}
	],

	"onlineClasses":[
		{
			"title":" Web Dev",
			"school":"Udacity",
			"dates":"2015-2015",
			"url":"https://www.udacity.com/",
			"classUrl":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

education.display =function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);

		$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
		$(".education-entry:last").children("a").attr("href",education.schools[school].url);


		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for (onlineClass in education.onlineClasses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[onlineClass].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[onlineClass].school);

		$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
		$(".education-entry:last").children("a").attr("href",education.onlineClasses[onlineClass].url);


		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineClasses[onlineClass].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineClasses[onlineClass].classUrl);
		$(".education-entry:last").append(formattedOnlineUrl);
		$(".education-entry:last").children("a").attr("href",education.onlineClasses[onlineClass].classUrl);
	}
}

//"Work"
var work = {
	"jobs":[
		{
			"employer": "Imagemme",
			"title": "Junior Graphic Designer",
			"location": "NYC",
			"dates": "2014-Present",
			"description": " packaging and branding",
			"url": "http://www.imagemme.com/"
		},

		{
			"employer": "Quad Graphics",
			"title": "GC artist",
			"location": "NYC",
			"dates": "2014-2015",
			"description": "agumented Reality",
			"url": "http://www.qg.com/"
		}
	]
}

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").children("a").attr("href",work.jobs[job].url);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}



//"projects"
var projects = {
	"project":[
		{
			"title":"placeholder",
			"dates":"2013",
			"description": "first project",
			"images":["images/197x148.gif","images/197x148.gif"],
			"url":"http://www.github.com"
		},
		{
			"title":"placeholder2",
			"dates":"2014",
			"description": "second project",
			"images":["images/197x148.gif"],
			"url":"http://www.github.com"
		}
	]
}

projects.display = function(){
	for (project_num in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[project_num].title);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").children("a").attr("href",projects.project[project_num].url);

		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[project_num].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[project_num].description);
		$(".project-entry:last").append(formattedProjectDescription);

		for (image in projects.project[project_num].images){
			console.log("count")
			var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.project[project_num].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}



bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv:last").append(googleMap);
//$("#mapDiv:last").append('<div id="map"></div>');
initializeMap();

/*
$("#main").append(internationalizeButton);

function inName(){
	var firstLastName =bio.name.trim().split(" ");
	var last= firstLastName[1].toUpperCase();
	var first= firstLastName[0];
	var firstMod = first[0].toUpperCase()+ (first.slice(1)).toLowerCase();
	finalName = firstMod+" "+ last;

	return finalName;
}
*/