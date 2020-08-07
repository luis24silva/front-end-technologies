var Dropdown = {

	$root: "",
	$list: "",
	dropdownOptions: [],
	selectedOption: "",
	init: function( options, dom ){
		this.dropdownOptions = options;
		this.setElements( dom );
	},
	setElements: function( dom ){
		if (dom) {
			this.$root = document.querySelector(dom);
		} else {
			var $emptyDiv = document.createElement( 'div' );
			this.$root = $emptyDiv;
		}
		if (this.dropdownOptions.length > 0) {
			var template = this.createTemplate();
			this.$root.insertAdjacentHTML( "beforeend", template );
			this.$list = this.$root.querySelector(".b-dropdown");
			this.setEvents();
		}
	},
	createTemplate: function(){
		var template = '<select class="b-dropdown">';
		this.dropdownOptions.forEach( function(element, index) {
			template = template + '<option value="' + element + '">'+ element + '</option>'; 
		});
		template = template + '</select>';

		return template;
	},
	setEvents: function(){
		var _this = this;
		this.$list.addEventListener('change', function( event ){
			event.preventDefault();
			var target = event.target;
			console.log('You have clicked: ', target.value);
			_this.selectedOption = target.value;
		});
	}
};

window.Dropdown = Dropdown;