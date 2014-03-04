
function getContentForLink(link){
			console.log("content for link");
			if(link == "booksmovies"){
				return getBooksAndMoviesContents();
			}
			else if(link == "resume"){
				return getResumeContents();

				
			}
			else if(link == "blog"){
				return getBlogContents();
			}
			else if (link == "portfolio"){
				return getPortfolioContents();
			}

		}

function getBooksAndMoviesContents(){
	var content = "<h2>Books</h2><ul>\
		<li> A Suitable Boy</li>\
		<li>The design of Everyday Things</li>\
		<li>The Power of Now</li>\
		<li>The Sea of Poppies</li>\
		<li>The sorrows of young wether</li>\
		<li>Thinking fast,Thinking slow</li>\
	</ul>\
	<h2>Movies</h2>\
	<ul>\
		<li> 400 Blows</li>\
		<li>Pather Panchali</li>\
		<li>Geetanjali</li>\
		<li>2001 Space Odyssey</li>\
		<li>The sorrows of young wether</li>\
		<li>Thinking fast,Thinking slow</li>\
	</ul>";
	
	return content;

}

function getResumeContents(){

	var content = " <p>I am very curious and love learning. I am interested in UI engineering and product management.</p>\
	<h2>Education</h2>\
	<ul>\
		<li> BE(Hons) - Computer Science, BITS-Pilani, India. 2007 - 2011</li>\
		<li> MS- IT, Concentration : HCI, Rensselaer Polytechnic Institute, NY, Troy. 2012-2013</li>\
	</ul>\
	<h2>Work Experience</h2>\
	<ul>\
		<li>Software Engineering Intern - Cisco Systems. May 2013 - August 2013</li>\
		<li>Research Assitant, Rensselaer Polytechnic Institute. August 2013 - Dec 2013</li>\
		<li>Associate Software Engineer - Kony Labs. Jan 2011 - April 2012 </li>\
	</ul>\
	<h2>Skills</h2>\
	<ul>\
		<li>HTML5, CSS3, Haml, Sass, JavaScript(Proficient)</li>\
		<li>Java(Intermediate), Ruby</li>\
		<li>Ruby on Rails, jQuery, iOS, Node.js(beginner)</li>\
		<li>Photoshop, Balsamic(Wireframing Software)</li>\
		<li>SQL</li>\
		<li>UNIX, Git</li>\
	</ul>\
	";
	return content;
}

function getPortfolioContents(){
	var content = "<ul>\
	<li> A movie review App built using Ruby on rails</li>\
	<li>A fund raiser app built using Ruby on rails</li>\
	<li>Short and Concise timelines of Artists, Tech Visionaries, Freedom Fighters</li>\
	<li>A wesbite comparing smartphones and tablets</li>\
	<li>A personal  website for a friend</li>\
	<li>A simple pong game in JS.</li>\
	<li>Javascript framework</li>\
	<li> A to do list in iphone. </li>\
	<li>A navigation controller plugin for iOS</li>\
	</ul>\
	";
	return content;


}