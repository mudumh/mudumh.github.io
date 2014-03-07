
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
		<li> The Art of Product Management</li>\
		<li> A Suitable Boy</li>\
		<li>The design of Everyday Things</li>\
		<li>The Power of Now</li>\
		<li>The Sea of Poppies</li>\
		<li>The sorrows of young wether</li>\
		<li>Thinking fast,Thinking slow</li>\
		<li>The Supreme Yoga by Swami Venkatesananda</li>\
	</ul>\
	<h2>Movies</h2>\
	<ul>\
		<li>400 Blows</li>\
		<li>Pather Panchali</li>\
		<li>Geetanjali</li>\
		<li>2001 Space Odyssey</li>\
		<li>Gravity</li>\
		<li>Roshomon</li>\
	</ul>";
	
	return content;

}

function getResumeContents(){

	var content = " <p>Excited about Consumer Software products, MOOCS, Food, Books and Travel. Interested in UI engineering and product management and Meditation.</p>\
	<h2>Education</h2>\
	<ul>\
		<li> BE(Hons) - Computer Science, BITS-Pilani, India. 2007 - 2011</li>\
		<li> MS- IT, Concentration : HCI, Rensselaer Polytechnic Institute, NY, Troy. 2012-2013</li>\
	</ul>\
	<h2>Work Experience</h2>\
	<ul>\
		<li>Software Engineering Intern - Cisco Systems, San Jose. May 2013 - August 2013</li>\
		<li>Research Assitant, Rensselaer Polytechnic Institute,NY. August 2013 - Dec 2013</li>\
		<li>Associate Software Engineer - Mobile Applications. Kony Labs, Hyderabad, India. Jan 2011 - April 2012 </li>\
	</ul>\
	<h2>Skills</h2>\
	<ul>\
		<li>HTML5, CSS3, Haml, Sass, JavaScript(Proficient), RWD</li>\
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
	<li> A movie review app built using Ruby on rails</li>\
	<li>A fund raiser app built using Ruby on rails</li>\
	<li>Short and Concise timelines of Artists, Tech Visionaries, Freedom Fighters</li>\
	<li>A wesbite comparing smartphones and tablets</li>\
	<li>A simple pong game in JS.</li>\
	<li>Javascript framework</li>\
	<li> A to do list in iphone. </li>\
	<li>A navigation controller plugin for iOS</li>\
	</ul>\
	";
	return content;


}