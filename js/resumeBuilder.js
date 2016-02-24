var bio = {
	"name" : "Phil Derrick",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "404-903-0963",
		"email" : "phil.derric@gmail.com",
		"github" : "Phil-Derrick",
		"location" : "Atlanta"
	},
	"WelcomeMsg" : "Experienced insurance profressional looking to move into the web development world.",
	"skills" : [
		"Insurance", "Management", "Business Information Analysis", "Web Development"
	],
	"bioPic" : "images/phil.png",
	display: function() {
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedHeaderRole);

		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedHeaderName);

		var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedContactMobile);
		$("#footerContacts").append(formattedContactMobile);

		var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedContactEmail);
		$("#footerContacts").append(formattedContactEmail);

		var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedContactGithub);
		$("#footerContacts").append(formattedContactGithub);

		var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedContactLocation);
		$("#footerContacts").append(formattedContactLocation);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMsg);
		$("#header").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill])
				$("#header").append(formattedSkills)
			}
		}
	}
}

var education = {
	"schools": [
		{
			"name" : "Auckland University of Technology",
			"location" : "Auckland, NZ",
			"degree" : "BBus",
			"majors" : ["Tourism"],
			"dates" : "2006 - 2011"
		}
	],
	"onlineCourses": [
		{
			"title" : "Introduction to Programming Nanodegree",
			"school" : "Udacity",
			"dates" : "2015 - 2016",
			"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	display: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
	
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajors);

			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
		}
		$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool
			$(".education-entry:last").append(formattedOnlineTitleSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}

var work = {
	"jobs": [
		{
			"employer" : "IAG New Zealand",
			"title" : "Claims Team Leader - Direct Insurance",
			"location" : "Auckland, NZ",
			"dates" : "October 2011 - August 2015",
			"description" : "Responsible for leading a team of 12 consultants handling direct insurance claims."
		},
		{
			"employer" : "IAG New Zealand",
			"title" : "Business Information Analyst - Travel",
			"location" : "Auckland, NZ",
			"dates" : "January 2011 - October 2011",
			"description" : "Reported to senior leadership on the performance of the travel insurance business."
		},
		{
			"employer" : "IAG New Zealand",
			"title" : "Travel Insurance Advisor",
			"location" : "Auckland, NZ",
			"dates" : "December 2006 - January 2011",
			"description" : "Dealt directly with customers regarding their travel insurance needs."
		}
	],
	display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
	
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects": [
		{
			"title" : "IPND Stage 4 - Web Application",
			"dates" : "January 2016",
			"description" : "A simple web application hosted on the Google App Engine at http://arctic-dynamo-118620.appspot.com/",
			"images" : ["images/WebProject.png"]
		}
	],
	display: function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}

function displayMap() {
	$("#mapDiv").append(googleMap);
}

function displayContent() {
	bio.display();
	work.display();
	projects.display();
	education.display();
	displayMap();
}

displayContent();





