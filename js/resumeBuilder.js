var bio = {
    "name": "Phil Derrick",
    "role": "Web Developer",
    "contacts": {
        "mobile": "404-903-0963",
        "email": "phil.derric@gmail.com",
        "github": "Phil-Derrick",
        "location": "Atlanta"
    },
    "WelcomeMessage": "Experienced insurance profressional looking to move into the web development world.",
    "skills": [
        "Insurance", "Management", "Business Information Analysis", "Web Development"
    ],
    "biopic": "images/phil.png",
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

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#header").append(formattedSkills);
            });
        }
    }
};

var education = {
    "schools": [{
        "name": "Auckland University of Technology",
        "location": "Auckland, NZ",
        "degree": "BBus",
        "majors": ["Tourism"],
        "dates": "2006 - 2011",
        "url": "http://www.aut.ac.nz/"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming Nanodegree",
        "school": "Udacity",
        "date": "2015 - 2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {
        var formals = education.schools;

        var onlines = education.onlineCourses;

        var name, degree, dates, location, majors, title, school, url;

        formals.forEach(addFormalSchool);

        $("#education").append(HTMLonlineClasses);

        onlines.forEach(addOnlineCourse);

        function addFormalSchool(school) {
            name = HTMLschoolName.replace('%data%', school.name);
            degree = HTMLschoolDegree.replace('%data%', school.degree);
            dates = HTMLschoolDates.replace('%data%', school.dates);
            location = HTMLschoolLocation.replace('%data%', school.location);
            major = HTMLschoolMajor.replace('%data%', school.majors);

            $('#education').append(HTMLschoolStart);

            $('.education-entry:last').append(name + degree);

            $('.education-entry:last').append(dates);

            $('.education-entry:last').append(location);

            $('.education-entry:last').append(majors);
        }

        function addOnlineCourse(course) {
            title = HTMLonlineTitle.replace('%data%', course.title);
            school = HTMLonlineSchool.replace('%data%', course.school);
            dates = HTMLonlineDates.replace('%data%', course.date);
            url = HTMLonlineURL.replace('%data%', course.url);

            $('#education').append(HTMLschoolStart);

            $('.education-entry:last').append(title + school);

            $('.education-entry:last').append(dates);

            $('.education-entry:last').append(url);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "IAG New Zealand",
        "title": "Claims Team Leader - Direct Insurance",
        "location": "Auckland, NZ",
        "dates": "October 2011 - August 2015",
        "description": "Responsible for leading a team of 12 consultants handling direct insurance claims."
    }, {
        "employer": "IAG New Zealand",
        "title": "Business Information Analyst - Travel",
        "location": "Auckland, NZ",
        "dates": "January 2011 - October 2011",
        "description": "Reported to senior leadership on the performance of the travel insurance business."
    }, {
        "employer": "IAG New Zealand",
        "title": "Travel Insurance Advisor",
        "location": "Auckland, NZ",
        "dates": "December 2006 - January 2011",
        "description": "Dealt directly with customers regarding their travel insurance needs."
    }],
    display: function() {
        var employmentHistory = work.jobs;

        var employer, title, location, dates, description;

        employmentHistory.forEach(addJobs);

        function addJobs(job) {
            employer = HTMLworkEmployer.replace("%data%", job.employer);
            title = HTMLworkTitle.replace("%data%", job.title);
            location = HTMLworkLocation.replace("%data%", job.location);
            dates = HTMLworkDates.replace("%data%", job.dates);
            description = HTMLworkDescription.replace("%data%", job.description);

            $("#workExperience").append(HTMLworkStart);

            $(".work-entry:last").append(employer + title);

            $(".work-entry:last").append(location);

            $(".work-entry:last").append(dates);

            $(".work-entry:last").append(description);
        }
    }
};

var projects = {
    "projects": [{
        "title": "IPND Stage 4 - Web Application",
        "dates": "January 2016",
        "description": "A simple web application hosted on the Google App Engine at http://arctic-dynamo-118620.appspot.com/",
        "images": ["images/WebProject.png"]
    }],
    display: function() {
        var projectHistory = projects.projects;

        var title, dates, description, images;

        projectHistory.forEach(addProjects);

        function addProjects(project) {
            title = HTMLprojectTitle.replace("%data%", project.title);
            dates = HTMLprojectDates.replace("%data%", project.dates);
            description = HTMLprojectDescription.replace("%data%", project.description);
            images = HTMLprojectImage.replace("%data%", project.images);

            $("#projects").append(HTMLprojectStart);

            $(".project-entry:last").append(title);

            $(".project-entry:last").append(dates);

            $(".project-entry:last").append(description);

            $(".project-entry:last").append(images);
        }
    }
};

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