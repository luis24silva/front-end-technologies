var Dropdown = function(){
	var $root = "";
	var $list = "";
	var dropdownOptions = [];
	var selectedOption = "";

	var setElements = function( dom ){
		if ( dom ) {
			$root = document.querySelector(dom);
		} else {
			var $emptyDiv = document.createElement( 'div' );
			$root = $emptyDiv;
		}

		if ( dropdownOptions.length > 0 ) {
			var template = createTemplate();
			$root.insertAdjacentHTML( "beforeend", template );
			$list = $root.querySelector(".b-dropdown");
			setEvents();
		}
	};

	var createTemplate = function(){
		var template = '<select class="b-dropdown">';
		dropdownOptions.forEach( function(element, index) {
			template = template + '<option value="' + element + '">'+ element + '</option>'; 
		});
		template = template + '</select>';

		return template;
	};

	var setEvents = function(){
		var _this = this;
		$list.addEventListener('change', function( event ){
			event.preventDefault();
			var target = event.target;
			console.log('You have clicked: ', target.value);
			_this.selectedOption = target.value;
		});
	};

	var getSelectedOption = function(){
		return this.selectedOption;
	};

	return {
		publicSelectedOption: "",
		init: function( options, dom ){
			dropdownOptions = options;
			setElements( dom );
		},
		showSelectedOption: function(){
			this.publicSelectedOption = getSelectedOption();
		}
	};
};

window.Dropdown = Dropdown;