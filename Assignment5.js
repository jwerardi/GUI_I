<!--
Webpage Author: James Walter Erardi
jerardi@cs.uml.edu
UMass Lowell
91.461 GUI Programming I
10/5/2015
Assignment I webpage demonstrating basic HTML & CSS knowledge coupled with client-server utilization
Copyright (c) 2015 by James Walter Erardi. All rights reserved.
-->

/*
    load jQuery library from the Google Content Delivery Network (CDN)
    see http://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/
         however, note that you obviously must be online for this to work
         alternatively, you can download jQuery and store it locally from
         http://jquery.com/download/
*/
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

    <!-- load the JSON file containing the text of Lincoln's Gettysburg address -->
<script type="text/javascript">
    // this function will run after the body has been loaded
    jQuery(document).ready( function() {
    jQuery.get( "GettysburgAddress-v2.json", function( data ) {
        placeContent( data ) ;  // construct output from the data read
    }, "json" );  // be sure to include this third parameter for weblab.cs.uml.edu
})
</script>;