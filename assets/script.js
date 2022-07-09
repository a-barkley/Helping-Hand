var charityKey = "fbd3cad63742864f43fb09168db55be3"

var geoKey = "AIzaSyCwQ3_jDoe6wPIx_Ta8yKhGFEcjmfmXtjw"

var userInput = $("#search")
var savedChar = [];
var userLatitude
var userLongitude

function modal() {
    swal("Please enter a valid zip code")
}

function charityAPI(e) {
    e.preventDefault();
    if (userInput.val() == '') {
        modal();
        return;
    } else if (userInput.val().length != 5) {
        modal();
        return;
    } else if (isNaN(userInput.val())) {
        modal();
        return;
    } else {
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://data.orghunter.com/v1/charitysearch?user_key=fbd3cad63742864f43fb09168db55be3&zipCode=' + userInput.val())}`)
        .then(response => {
            if (response.ok) return response.json()
                throw new Error('Network response was not ok.')
            })
        .then(function(data){
            console.log(JSON.parse(data.contents))
            if (JSON.parse(data.contents).data.length == 0) {
                modal();
                return;
            } else {
                displayCards(JSON.parse(data.contents).data);
            }
        });
    }
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

        // create html elements
        var cardEl = $("<div>");
        cardEl.addClass("max-w-sm rounded overflow-hidden shadow-lg w-full bg-slate-100 hover:bg-blue-200 m-2");
        var cardBodyEl = $("<div>");
        cardBodyEl.addClass("px-6 py-4");
        var cardTitleEl = $("<div>");
        cardTitleEl.addClass("font-bold text-xl mb-2");
        cardTitleEl.text(name);
        var cardURLEl = $("<a>");
        cardURLEl.addClass("text-gray-700 hover:text-orange-500 text-base");
        cardURLEl.text(url);
        cardURLEl.attr("href", url)
        var cardCategoryEl = $("<p>");
        cardCategoryEl.addClass("text-gray-900 text-base");
        cardCategoryEl.text(category);
        var cardMSEl = $("<p>");
        cardMSEl.addClass("text-gray-700 text-base");
        cardMSEl.text(missionStatement);
        var cardBtn = $("<button>")
        cardBtn.addClass("saveBtn px-4 rounded-r-lg bg-orange-300 hover:bg-orange-400 text-gray-800 font-bold p-2 uppercase border-yellow-500 border-t border-b border-r rounded-l-lg")
        cardBtn.text("Save Charity")


        // append html elements
        cardBodyEl.append(cardTitleEl,cardURLEl,cardCategoryEl,cardMSEl,cardBtn);
        cardEl.append(cardBodyEl);
        $("#card-wrapper").append(cardEl);

        // saves favorite to local storage

    



    }
}

function saveFav() {

    
}


$("#locationBtn").on("click",currentLocation)

$(".saveBtn").on("click, ")
