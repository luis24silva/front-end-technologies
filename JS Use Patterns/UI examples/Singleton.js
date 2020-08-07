var Dropdown = (function(){

	//Private
	var _instance;
	var _$root = "";
	var _$list = "";
	var _dropdownOptions = [];
	var selectedOption = "";

	function _Dropdown( options, dom ) {
		_dropdownOptions = options;
		setElements( dom );
	}

	function setElements( dom ){
		if ( dom ) {
			_$root = document.querySelector(dom);
		} else {
			var $emptyDiv = document.createElement( 'div' );
			_$root = $emptyDiv;
		}

		if ( _dropdownOptions.length > 0 ) {
			var template = createTemplate();
			_$root.insertAdjacentHTML( "beforeend", template );
			_$list = _$root.querySelector(".b-dropdown");
			setEvents();
		}
	}

	function createTemplate(){
		var template = '<select class="b-dropdown">';
		_dropdownOptions.forEach( function(element, index) {
			template = template + '<option value="' + element + '">'+ element + '</option>'; 
		});
		template = template + '</select>';

		return template;
	}

	function setEvents(){
		var _this = this;

		_$list.addEventListener('change', function( event ){
			event.preventDefault();
			var target = event.target;
			console.log('You have clicked: ', target.value);
			_this.selectedOption = target.value;
		});
	}

	return {
		publicSelectedOption: "",
		getSelectedOption: function(){
			this.publicSelectedOption = selectedOption;
		},
		getInstance: function( options, dom ){
			if (!_instance) {
				_instance = new _Dropdown( options, dom );
				console.info("Instance created!");
			} else {
				console.warn("There is already an instance created");
			}
		}
	}
})();

window.Dropdown = Dropdown;