var charityKey = "fbd3cad63742864f43fb09168db55be3"

var geoKey = "AIzaSyCwQ3_jDoe6wPIx_Ta8yKhGFEcjmfmXtjw"

var userInput = $("#search")

function testAPI(e) {
    e.preventDefault();
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://data.orghunter.com/v1/charitysearch?user_key=fbd3cad63742864f43fb09168db55be3&zipCode=' + userInput.val())}`)
    .then(response => {
	    if (response.ok) return response.json()
	        throw new Error('Network response was not ok.')
        })
    .then(function(data){
        console.log(JSON.parse(data.contents))
    });
}


function testGeoAPI() {
    fetch("https://cors-anywhere.herokuapp.com/corsdemo=https://www.googleapis.com/geolocation/v1/geolocate?key=" + geoKey)
    .then(function(response) {
        console.log(response)
        response.json().then(function (data) {
            console.log(data)
        })
    })
}

$("#searchBtn").on("click",testAPI)

//testGeoAPI()

