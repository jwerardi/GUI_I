/*
Webpage Author: James Walter Erardi
jerardi@cs.uml.edu
UMass Lowell
91.461 GUI Programming I
11/19/2015
Assignment 8 demonstrating some cool JavaScript
Copyright (c) 2015 by James Walter Erardi. All rights reserved.
*/


var totalTabs = 0;

//initializes the jQuery validator
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
$(document).ready(function () {

    $("#multitable").validate({ // initialize the plugin
        /*
         * JSON for defining the validation rule parameters
         * */
        rules: {
            "firstnum": {
                required: true,
                maxlength: 5,
                number : true
            },
            "secondum": {
                required: true,
                maxlength: 5,
                number : true
            },
            "thirdnum": {
                required: true,
                maxlength: 5,
                number : true
            },
            "fourthnum": {
                required: true,
                maxlength: 5,
                number : true
            }
        },
        /*
         * JSON for definitions of broken rules
         * */
        messages: {
            "firstnum": {
                required: "<br><small id=\"output\">Please type a number in the box</small>",
                maxlength: "<br><small id=\"output\">Please enter no number greater than 99,999</small>",
                number: "<br><small id=\"output\">You must only input a number value in the first box</small>"
            },
            "secondum": {
                required: "<br><small id=\"output\">Please type a number in the box</small>",
                maxlength: "<br><small id=\"output\">Please enter no number greater than 99,999</small>",
                number: "<br><small id=\"output\">You must only input a number value in the first box</small>"
            },
            "thirdnum": {
                required: "<br><small id=\"output\">Please type a number in the box</small>",
                maxlength: "<br><small id=\"output\">Please enter no number greater than 99,999</small>",
                number: "<br><small id=\"output\">You must only input a number value in the first box</small>"
            },
            "fourthnum": {
                required: "<br><small id=\"output\">Please type a number in the box</small>",
                maxlength: "<br><small id=\"output\">Please enter no number greater than 99,999</small>",
                number: "<br><small id=\"output\">You must only input a number value in the first box</small>"
            }
        }
    });

});
function myMultiplicationTable() {
    //read in information from the html form, assign them to unique variables
    var one = document.getElementById('firstnum').value;
    var two = document.getElementById('secondnum').value;
    var three = document.getElementById('thirdnum').value;
    var four = document.getElementById('fourthnum').value;
    //for loop counters
    var i;
    var j;
    //string which all html content will be placed into
    var string = "";
    //array containing all of the user entered numbers, array for easy iteration
    var array = [one, two, three, four];
    //if/else loop which ensures error proof
    if(!isNaN(one) & !isNaN(two) & !isNaN(three) & !isNaN(four)){


        //filling the string which we'll pass back to the HTML with HTML tags
        string = string + "<br>";
        string = string + "<table>";
        string = string + "<th>" + "?" + "</th>";
        //first for loop creates the first row of the table with the multipliers
        for(i = 0; i < array.length; i++) {
            string = string + "<th>" + array[i] + "</th>";

        }

        //this for loop creates the multiplication results table contents, along with the columns
        for(i = 0; i < array.length; i++){
            string = string + "<tr>";
            //column creation for multiplicands
            string = string + "<th>" + array[i] + "</th>";
            for(j = 0; j < array.length; j++){
                //result of multiplication string
                string = string + "<th>" + array[i] * array[j] + "</th>";
            }
            //ends the table row
            string = string + "</tr>";
        }
        //ends the table
        string = string + "</table>";
        //plants all of this string into content1 tag

        //instead of throwing it in the html, we call AddTab instead
        AddTab(string);
       // document.getElementById('content1').innerHTML = string;
    }else{
        //else statement which will run when the user inputs bologna
        var string3 = "Cannot generate table. Please enter numerical inputs only.";
        document.getElementById('content1').innerHTML = string3;


    }
}

//following few functions are the functions used to create/manage the jQuery sliders
$(function() {
    $( "#slider-range-min" ).slider({
        range: "min",
        value: 37,
        min: 1,
        max: 100,
        slide: function( event, ui ) {
            $( "#firstnum" ).val(ui.value );
        }
    });
    $( "#firstnum" ).val($( "#slider-range-min" ).slider( "value" ) );
});

$(function() {
    $( "#slider-range-min2" ).slider({
        range: "min",
        value: 37,
        min: 1,
        max: 100,
        slide: function( event, ui ) {
            $( "#secondnum" ).val(ui.value );
        }
    });
    $( "#secondnum" ).val($( "#slider-range-min" ).slider( "value" ) );
});

$(function() {
    $( "#slider-range-min3" ).slider({
        range: "min",
        value: 37,
        min: 1,
        max: 100,
        slide: function( event, ui ) {
            $( "#thirdnum" ).val(ui.value );
        }
    });
    $( "#thirdnum" ).val($( "#slider-range-min" ).slider( "value" ) );
});

$(function() {
    $( "#slider-range-min4" ).slider({
        range: "min",
        value: 37,
        min: 1,
        max: 100,
        slide: function( event, ui ) {
            $( "#fourthnum" ).val(ui.value );
        }
    });
    $( "#fourthnum" ).val($( "#slider-range-min" ).slider( "value" ) );
});

// This function was sourced from a stackoverflow link I found while researching
//http://stackoverflow.com/questions/23892420/javascript-tab-navigation-issue
//Out of respect for the author, I will leave his original documentation
// Wait until the DOM has loaded before querying the document
$(document).ready(function(){
    $('ul.tabs').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = $(this).find('a');

        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        // Bind the click event handler
        $(this).on('click', 'a', function(e){
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            // Make the tab active.
            $active.addClass('active');
            $content.show();

            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });
});

//function which wraps the jQuery add tab function, used so we can easily pass in strTable from the 
//mymultiplcation() function
function AddTab(strTable){
    //read in information from the html form, assign them to unique variables so we can label the tab
    var one = document.getElementById('firstnum').value;
    var two = document.getElementById('secondnum').value;
    var three = document.getElementById('thirdnum').value;
    var four = document.getElementById('fourthnum').value;
    var linkName = one + "x" + two + "x" + three +  "x" + four;
    var tab = "tab";
    totalTabs++;
    tab = tab + totalTabs;

    $(".tabs").tabs();
    //add the link inside the tab first
    $(".tabs").append(
        "<li><a href=" + "#" + tab + ">" + "<center>" + linkName + "</center>" + "</li>"
    );

    //after the appending has happened, add the multiplcation table
    $(".tabs").after(
        "<div class='content1' id=" + "\"" + tab + "\"" + ">" + "<p>" + strTable + "</p>" + "</div>"
    )

    $(".tabs").tabs("refresh");
}
//this function is the two way binding mechanism which makes it so the slider will move when
//values are manually inputted into the form
function setToPointVal(){

    //updating the slider value when the text box is manipulated
    $("#slider-range-min").slider('value',document.getElementsByName("firstnum")[0].value);
    $("#slider-range-min2").slider('value',document.getElementsByName("secondnum")[0].value);
    $("#slider-range-min3").slider('value',document.getElementsByName("thirdnum")[0].value);
    $("#slider-range-min4").slider('value',document.getElementsByName("fourthnum")[0].value);
}
