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


$("#searchBtn").on("click",testAPI)

//testGeoAPI()

navigator.geolocation.getCurrentPosition(function(position) {
    console.log("position", position.coords.latitude, position.coords.longitude);
})