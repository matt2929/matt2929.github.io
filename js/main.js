$(document).ready(function(){
	createInfoCards();
});

function createInfoCards() {
var cards = [ 	new Card("mcstaffo@buffalo.edu", "fa fa-envelope", "MAILTO:mcstaffo@buffalo.edu"),
		new Card("Résumé", "fa fa-file-text-o", "docs/resume.pdf"),
		new Card("Github", "fa fa-github", "https://github.com/matt2929"),
		new Card("LinkedIn", "fa fa-linkedin", "https://www.linkedin.com/in/matthew-stafford-4a27a312b/")];
		var i;
		output = "";
		for(var i = 0; i < cards.length; i++){
			output += newCard(cards[i]);
		}
		$("#card_box").html(output);
}

function newCard(card_obj){
	html_obj = "<div>";
	html_obj += "<a class=\"info_card " + card_obj.icon  +"\" href=\"";
	html_obj += card_obj.link;
	html_obj += "\">";
	html_obj += card_obj.title;
	html_obj += "</a></div>";
	return html_obj;
}

function Card(title, icon, link) {
	this.title = title;
	this.icon = icon;
	this.link = link;
} 
