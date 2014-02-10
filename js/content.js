
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

	var content = " <h2>Education</h2>\
	<ul>\
		<li> BS - Computer Science, BITS-Pilani, India </li>\
		<li>MS- IT, Concentration : Software Design, Rensselaer Polytechnic Institute, NY, Troy</li>\
	</ul>\
	Skills\
	<ul>\
		<li>HTML5,CSS3,JavaScript(Proficient)</li>\
		<li>Java(Intermediate),Ruby</li>\
		<li>Ruby on Rails, jQuery</li>\
	</ul>\
	";
	return content;
}

function getPortfolioContents(){
	var content = "<ul>\
	<li> A movie review App built using Ruby on rails</li>\
	<li>A fund raiser app built using Ruby on rails</li>\
	<li>A photography portfolio website for Rahul Reddy</li>\
	<li>Short and Concise timelines of Artists, Tech Visionaries, Freedom Fighters</li>\
	<li>A wesbite comparing smartphones and tablets</li>\
	<li>A personal  website for a friend</li>\
	<li>A beautiful contact management app.</li>\
	<li>A simple pong game in JS.</li>\
	</ul>\
	";
	return content;


}