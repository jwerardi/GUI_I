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
        document.getElementById('content1').innerHTML = string;
    }else{
        //else statement which will run when the user inputs bologna
        var string3 = "Cannot generate table. Please enter numerical inputs only.";
        document.getElementById('content1').innerHTML = string3;


    }
}
