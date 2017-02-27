'use strict;'

//var declarations
var apiURL = "https://www.googleapis.com/youtube/v3/search";

//onclick handler for submit button
$('#submit').click(function (e) {
    e.preventDefault();
    var userInput = $('#userInput').val();
    //define object called params, meaning all parameters for get call
    var params = {
        part: 'snippet',
        key: 'AIzaSyC00svZaMP9hk8x89HeqJpRZRz1wukYoPo',
        q: userInput
    };
    //get all the relevant data, and call the function renderData() as a param
    $.get(apiURL, params, renderData);
});

//new function renderData
function renderData(results) {
    //clear out whatever is in the results div
    $('#result').empty();
    //for each item in the snippets array, do something
    for (i = 0; i < results.items.length; i++) {
        //no linking to youtube
        //$('#result').append("<img src='" + results.items[i].snippet.thumbnails.medium.url + "'>");
        //linking to youtube
        $('#result').append("<a href='" + "https://youtube.com/watch?v=" + results.items[i].id.videoId +
            "'><img src='" + results.items[i].snippet.thumbnails.medium.url + "'>" + "</a>");
    }
}
//TODO: make this section appear as an overlay like in hot or cold
//onclick handler for "?"
/*$('#what').onclick{
<div id="description">
<p>Built using the YouTube API, this tool is meant to emulate the basic functions of YouTube.</p>
    <p> This was an assignemnt at Thinkful, an online coding bootcamp. </p>
        <p>This instance of the assignment was completed by Alison Stuart in Fall of 2016.</p>
            </div>

}*/
