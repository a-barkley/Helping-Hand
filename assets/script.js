var apiKey = "fbd3cad63742864f43fb09168db55be3"

function testAPI() {
    fetch("https://api.allorigins.win/raw?url=http://data.orghunter.com/v1/charitysearch?user_key=" + apiKey + "&zipCode=60626")
    .then(function(response) {
        console.log(response)
        response.json().then(function (data) {
            console.log(data)
        })
    })
}

testAPI()