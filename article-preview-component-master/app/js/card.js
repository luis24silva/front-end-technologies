(function(){
    console.log("Loaded!");

    var $networksContainer = document.querySelector('.js-share-networks');
    var $downArrow = document.querySelector('.js-share-networks__arrow');
    var $shareButton = document.querySelector('.b-author__share a');
    $shareButton.addEventListener( 'click', function( event ){
        event.preventDefault();
        
        if ( $downArrow.style.display === 'block' ) {
            $downArrow.style.display = 'none';
        } 
        else {
            $downArrow.style.display = 'block';
        }

        if ( $networksContainer.style.display === 'block' ) {
            $networksContainer.style.display = 'none';
            $shareButton.style.backgroundColor = '#ecf1f8';
        } 
        else {
            $networksContainer.style.display = 'block';
            $shareButton.style.backgroundColor = '#6d7f97';
        }

    } );

})()