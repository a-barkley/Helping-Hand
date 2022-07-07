var charityKey = "fbd3cad63742864f43fb09168db55be3"

var geoKey = "AIzaSyCwQ3_jDoe6wPIx_Ta8yKhGFEcjmfmXtjw"

// function testAPI() {
//     fetch("https://api.allorigins.win/raw?url=http://data.orghunter.com/v1/charitysearch?user_key=" + charityKey + "&zipCode=60626")
//     .then(function(response) {
//         console.log(response)
//         response.json().then(function (data) {
//             console.log(data)
//         })
//     })
// }


function testGeoAPI() {
    fetch("https://cors-anywhere.herokuapp.com/corsdemo=https://www.googleapis.com/geolocation/v1/geolocate?key=" + geoKey)
    .then(function(response) {
        console.log(response)
        response.json().then(function (data) {
            console.log(data)
        })
    })
}
// testAPI()
testGeoAPI()