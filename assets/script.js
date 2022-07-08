var charityKey = "fbd3cad63742864f43fb09168db55be3"

var geoKey = "AIzaSyCwQ3_jDoe6wPIx_Ta8yKhGFEcjmfmXtjw"

var userInput = $("#search")

var userLatitude
var userLongitude


function charityAPI(e) {
    e.preventDefault();
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://data.orghunter.com/v1/charitysearch?user_key=fbd3cad63742864f43fb09168db55be3&zipCode=' + userInput.val())}`)
    .then(response => {
	    if (response.ok) return response.json()
	        throw new Error('Network response was not ok.')
        })
    .then(function(data){
        console.log(JSON.parse(data.contents))
        displayCards(JSON.parse(data.contents).data);
    });
}


$("#searchBtn").on("click",charityAPI)

//testGeoAPI()
function currentLocation(e){
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("position", position.coords.latitude, position.coords.longitude);
        var userLatitude = position.coords.latitude;
        var userLongitude = position.coords.longitude;
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://data.orghunter.com/v1/charitysearch?user_key=fbd3cad63742864f43fb09168db55be3&latitude=' + userLatitude + '&longitude=' + userLongitude)}`)
        .then(response => {
	        if (response.ok) return response.json()
	            throw new Error('Network response was not ok.')
            })
        .then(function(data){
            console.log(JSON.parse(data.contents))
            displayCards(JSON.parse(data.contents).data);
        });
    })
    

}

function displayCards(data) {
    console.log(data)
    for(var i = 0; i < data.length; i++){
        // get charity data
        var name = data[i].charityName;
        var url = data[i].url;
        var category = data[i].category;
        var missionStatement = data[i].missionStatement;

        

    }
}

$("#locationBtn").on("click",currentLocation)

