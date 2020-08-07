function Dropdown( options, dom ){
	this.$root = this.setElements( dom );
	this.$list;
	this.dropdownOptions = options;
	this.selectedOtion;
}

Dropdown.prototype.setElements = function( dom ){
	if ( dom ) {
		this.$root = document.querySelector(dom);
	} else {
		var $emptyDiv = document.createElement( 'div' );
		this.$root = $emptyDiv;
	}

	if ( this.dropdownOptions.length > 0 ) {
		var template = this.createTemplate();
		this.$root.insertAdjacentHTML( "beforeend", template );
		this.$list = this.$root.querySelector(".b-dropdown");
		this.setEvents();
	}
};

Dropdown.prototype.createTemplate = function(argument){
	// body... 
};

Dropdown.prototype.setEvents = function(argument){
	// body... 
};