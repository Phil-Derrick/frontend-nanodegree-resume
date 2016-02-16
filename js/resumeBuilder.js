var bio = {
	"name" : "Phil Derrick",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "404-903-0963",
		"email" : "phil.derric@gmail.com",
		"github" : "Phil-Derrick",
		"location" : "Atlanta"
	},
	"WelcomeMessage" : "Welcome blah blah ...",
	"Skills" : [
		"Management", "Data Analysis", "Web Development"
	],
	"bioPic" : "images/Phil.jpg"
}

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedHeaderRole);
$("#header").prepend(formattedHeaderName);
$("#topContacts").append(formattedContactMobile);
$("#topContacts").append(formattedContactEmail);
$("#topContacts").append(formattedContactGithub);
$("#topContacts").append(formattedContactLocation);

var education = {
	"schools": [
		{
			"name" : "Auckland University of Technology",
			"location" : "Auckland, NZ",
			"majors" : "Tourism",
			"degree" : "BBus",
			"year" : "2011",
			"url" : "http://www.aut.ac.nz/"
		}
	],
	"onlineCourses": [
		{
			"title" : "Introduction to Programming Nano-Degree",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
			"title" : "JavaScript Syntax",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer" : "IAG New Zealand",
			"title" : "Claims Team Leader - Direct Insurance",
			"location" : "Auckland, NZ",
			"dates" : "October 2011 - August 2015",
			"desciption" : ""
		},
		{
			"employer" : "IAG New Zealand",
			"title" : "Business Information Analyst - Travel",
			"location" : "Auckland, NZ",
			"dates" : "January 2011 - October 2011",
			"desciption" : ""
		},
		{
			"employer" : "IAG New Zealand",
			"title" : "Travel Insurance Advisor",
			"location" : "Auckland, NZ",
			"dates" : "December 2006 - January 2011",
			"desciption" : ""
		}
	]
}

var projects = {
	"projects": [
		{
			"title" : "",
			"dates" : "",
			"description" : "",
			"images" : "URL string for project images"
		}
	]
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}