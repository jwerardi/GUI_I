/**
 James W Erardi
 jerardi@cs.uml.edu
 91.461 GUI Programming I
 Assignment:  Scrabble
 December 4th, 2015

 James Erardi, UMass Lowell Computer Science
 Copyright (c) 2015 by James W Erardi
 updated by JWE on December 4th, 2015 at 7:45 PM
 **/

var lettersOnDeck = 0;
var images = "";
var tcount = 0;
var tScore = 0;
var total_Score = 0;
var word = new Array(8); //the board where you put the tiles. this is for tracking the word
var scores = [
    {"letter": "A", "value": 1, "amount": 9},
    {"letter": "B", "value": 3, "amount": 2},
    {"letter": "C", "value": 3, "amount": 2},
    {"letter": "D", "value": 2, "amount": 4},
    {"letter": "E", "value": 1, "amount": 12},
    {"letter": "F", "value": 4, "amount": 2},
    {"letter": "G", "value": 2, "amount": 3},
    {"letter": "H", "value": 4, "amount": 2},
    {"letter": "I", "value": 1, "amount": 9},
    {"letter": "J", "value": 8, "amount": 1},
    {"letter": "K", "value": 5, "amount": 1},
    {"letter": "L", "value": 1, "amount": 4},
    {"letter": "M", "value": 3, "amount": 2},
    {"letter": "N", "value": 1, "amount": 5},
    {"letter": "O", "value": 1, "amount": 8},
    {"letter": "P", "value": 3, "amount": 2},
    {"letter": "Q", "value": 10, "amount": 1},
    {"letter": "R", "value": 1, "amount": 6},
    {"letter": "S", "value": 1, "amount": 4},
    {"letter": "T", "value": 1, "amount": 6},
    {"letter": "U", "value": 1, "amount": 4},
    {"letter": "V", "value": 4, "amount": 2},
    {"letter": "W", "value": 4, "amount": 2},
    {"letter": "X", "value": 8, "amount": 1},
    {"letter": "Y", "value": 4, "amount": 2},
    {"letter": "Z", "value": 10, "amount": 1}
] //for scores


$(document).ready(function () {
    // printTable();
    populateBoard(); //randomly populates the board with tiles
    JQueryDragDrop(); //initializes the draggables and droppables

});

/**
 * *
 * @param word to convert into score using the array values in scores
 */
function updateScore(word) {
    var totalScore = 0;
    var scoreToAdd = 0;
    var doubleword = 0;
    //look through the array
    for (var i = 0; i < word.length; i++) {
        //find the letter in the scores array
        for (var j = 0; j < scores.length; j++) {
            //if it's here
            if (word[i] != "" && (word[i] == scores[j].letter)) {
                //if i == 2 (double letter score) then double the value
                if (i == 2) {
                    scoreToAdd = scores[j].value * 2;
                    totalScore += scoreToAdd;
                }if (i == 5) {
                    doubleword++;
                    scoreToAdd = scores[j].value;
                    totalScore += scoreToAdd;
                }if(i!=2 && i!=5) //else, just add the score normally
                {
                    totalScore += scores[j].value;
                }
            }
        }
    }
    if(doubleword!=0)
    {
        totalScore = totalScore * 2;
    }
    //put it in the score div
    document.getElementById('score').innerHTML = totalScore.toString();
}

function JQueryDragDrop() {
    //allow the tiles to be dropped back on the rack
    $("#rack").droppable({accept: '.rack_blocks', out: Letters});
    function Letters(event, ui) {
        lettersOnDeck--;
    }

    //rack blocks (the letters) are draggable and snap to board blocks in the inside, if it's not a valid droppable then revert
    $(".rack_blocks").draggable({snap: ".board_blocks", snapMode: "inner", revert: 'invalid'});

    //if they're being dragged , make that array slot blank
    function Drag(event, ui) {
        if (ui.draggable.attr("id") == word[$(this).attr("id")]) {
            //remove tile from board
            word[$(this).attr("id")] = ""; //make it blank
            //tcount++;
        }
        updateWord(word);
    }

    //you can drag the rack blocks onto the board(.board_blocks)
    $(".board_blocks").droppable({accept: '.rack_blocks', drop: Drop, out: Drag});

    //run this function when a tile is dropped
    function Drop(event, ui) {
        var letter = ui.draggable.prop('id');          //take the ID of the draggable(letter tile) and assign it to letter
        var element = $(this).attr("id");              //take the ID of the droppable(the board tile) and assign it to element
        var number = parseInt(element);                 //make sure it's an int and not a string
        //a tile is added, increment tcount
        tcount++;

        if (typeof word[number - 1] === 'undefined' && typeof word[number + 1] === 'undefined' && tcount < 1) {
            console.log();
            console.log("tcount is:" + tcount);
            ui.draggable.draggable({revert: true});
        } else {
            word[number] = letter;
            updateWord(word);
        }


    }
}


//randomly pick tiles to add to board
function populateBoard() {
    var letter;
    var random;
    var lettersToAdd = 7 - lettersOnDeck;

    lockWord();
    //we want seven tiles so add seven
    for (var i = 0; i < lettersToAdd; i++) {
        random = Math.floor((Math.random() * 25));      //random number 1-25
        letter = scores[random].letter;                 //letter = the letter at the random spot in the scores array
        console.log(random);
        $("#rack").append(" <img id=\"" + letter + "\" class=\"rack_blocks\" src=\"images/" + letter + ".png\">") //dynamically create images in the #rack div
        lettersOnDeck++;
    }

    console.log(images);

    JQueryDragDrop(); //refresh the draggable code
}

//should be called lock down word but its not lol
function lockWord() {
    var object = "";
    //go through the entire word
    for (var i = 0; i <= word.length; i++) {
        //if the word slot isnt a letter do nothing
        if (typeof word[i] === 'undefined') {

        } else { //if it's a letter find that ID and make it undraggable (locked)
            $("#" + word[i]).draggable('disable')
        }
    }

}

//go through the board and search for a word
//this has a stupid parameter name
function updateWord(varDraggableId) {
    var currentword = "";
    for (var i = 0; i < varDraggableId.length; i++) {
        if (typeof varDraggableId[i] === 'undefined') {

        } else {
            currentword += varDraggableId[i];
        }
    }
    if (currentword) {
        document.getElementById('word').innerHTML = currentword;
        updateScore(word);
    }
}

//print table function, not really used
function printTable() {
    var string = "";
    var blank = "class=\"board_blocks\" src=\"images/blank.png\">";
    string = string + "<br>";
    string = string + "<table>"; //opening the table
    var tablecell = 0;
    for (var i = 0; i < 4; i++) {
        string = string + "<tr>";
        for (var j = 0; j < 4; j++) {
            tablecell++;
            string = string + "<th>";
            string = string + "<img id=\"" + tablecell + "\"" + blank;
            string = string + "</th>";
        }
        string = string + "</tr>";
    }
    string = string + "</table>";
    console.log(string);
    document.getElementById('board').innerHTML = string;
}

//the following dictonary related code was provided by Jason Downing via Piazza
// The dictionary lookup object
var dict = {};

// Do a jQuery Ajax request for the text dictionary
$.get( "dict/dictionary.txt", function( txt ) {
    // Get an array of all the words
    var words = txt.split( "\n" );

    // And add them as properties to the dictionary lookup
    // This will allow for fast lookups later
    for ( var i = 0; i < words.length; i++ ) {
        dict[ words[i] ] = true;

    }
});
function submitWord(){
    //first runs findword to check if the word is legitimate
    findWord();
    var submittedWord = document.getElementById('word').innerHTML;
    console.log("submitted word: " + submittedWord);
    //get the score for this word so we can print it out nicely
    var wordscore =  document.getElementById('score').innerHTML;
    //MUST make the word lowercase,
    submittedWord = submittedWord.toLowerCase();
    if ( dict[submittedWord] ) {
        //lock the word into the board
        lockWord();

        //prints to the user that their word is legitimate, shows them how many points they recieve
        console.log("this is a real word: " + submittedWord);
        document.getElementById('submission').innerHTML = 'You have submitted a correct word! Congratulations. <br> The Word is worth: ' + wordscore + ' points.';
        //increment total score by taking the score from the HTML element
        total_Score += parseInt(document.getElementById('score').innerHTML);
        document.getElementById('totalscore').innerHTML = '<br> Your Total score is: ' + total_Score;


    }else{
        //prints to user that their word is not legitimate. keeps displaying their total score.
        document.getElementById('submission').innerHTML = 'The word you have submitted is not a real word, sorry.';
        document.getElementById('totalscore').innerHTML = '<br> Your Total score is: ' + total_Score;
        console.log("this is a not a real word.");
    }

}

// Modified to only pass in one word, which can then be verified.
function findWord( word ) {
    // See if it's in the dictionary
    if ( dict[ word ] ) {
        // If it is, return that word
        return word;
    }

    // Otherwise, it isn't in the dictionary.
    return "_____";
}

function restart()
{
    var letter;
    var random;
    var lettersToAdd  = 7;
    var string ="";

    lettersOnDeck = 7;

    for(var i =0; i<word.length;i++)
    {
        word[i]="";
    }

    //we want seven tiles so add seven
    for(var i = 0; i < 7; i++)
    {
        random = Math.floor((Math.random() * 25));      //random number 1-25
        letter = scores[random].letter;                 //letter = the letter at the random spot in the scores array
        console.log(random);
        string = string + (" <img id=\""+ letter + "\" class=\"rack_blocks\" src=\"images/" + letter + ".png\">"); //dynamically create images in the #rack div
    }

    console.log(images);

    document.getElementById('rack').innerHTML = string;
    JQueryDragDrop(); //refresh the draggable code
    document.getElementById('submission').innerHTML = '';
    document.getElementById('score').innerHTML = " ";
    document.getElementById('word').innerHTML = " ";

}
