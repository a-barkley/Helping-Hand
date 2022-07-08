var charityKey = "fbd3cad63742864f43fb09168db55be3"

var geoKey = "AIzaSyCwQ3_jDoe6wPIx_Ta8yKhGFEcjmfmXtjw"

var userInput = $("#search").val()

function testAPI() {
    fetch("https://api.allorigins.win/raw?url=http://data.orghunter.com/v1/charitysearch?user_key=" + charityKey + "&city=Miami" + userInput)
    .then(function(response) {
        console.log(response)
        response.json().then(function (data) {
            console.log(data)
            console.log(userInput)
        })
    })
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

$("#searchBtn").click(testAPI())

testGeoAPI()

