
//variable for first room

function getRoomIndex() {
    var element = document.getElementById("invisibleElement");
    console.log(element.textContent)
    return Number(element.textContent)
}

function updateRoomIndex(nextDirection) {
    var element = document.getElementById("invisibleElement");
    element.textContent = nextDirection;
}

function updateVisited(theRoom) {
    var element = document.getElementById("visited");
    element.textContent += "," + theRoom + ",";
}

//add to narration
function addToElement(additionalText) {
    var element = document.getElementById("narration");

    if (element) {
        element.innerHTML += additionalText;
    }
}



//process direction
function submitDirection() {
    var inputField = document.getElementById("myInput");
    var inputValue = inputField.value;

    //get "index" of current room
    var roomIndex = getRoomIndex()

    var regex = /^north$|^east$|^south$|^west$/i;

    //check that input is a direction
    if (regex.test(inputValue)) {

        //pass current room and next direction into function
        result = nextRoom(roomIndex, inputValue.toLowerCase());

        var flavor = `
        <div>
        <p id="choice">${inputValue}</p>
        ${result} 
        </div>
        `;


    } else {

        var flavor = `
        <div>
        <p id="choice">Please enter a direction; north, east, south, or west.</p>
        </div>
        `;

    }



    addToElement(flavor)

    // Do something with the input value
    //console.log("Input value:", inputValue);

    // Clear the input field
    inputField.value = "";
}

function nextRoom(roomIndex, inputValue) {

    //find json entry that matches current room "index"
    for (var i = 0; i < rooms.length; i++) {

        //when current room is found get the room "index" for the associated direction
        if (rooms[i].index === roomIndex) {
            nextDirection = rooms[i][inputValue];
        }
    };

    //find json entry for new room by matching "index"
    for (var i = 0; i < rooms.length; i++) {

        //if a json room is found with a matching "index"
        if (rooms[i].index === nextDirection) {

            console.log("this is nd " + nextDirection)

            //update the current room html holder to the new room
            updateRoomIndex(nextDirection);

            //check if room has been visited
            var visited_element = document.getElementById("visited");

            console.log(visited_element.textContent);

            if (visited_element.textContent.includes("," + nextDirection + ",")) {

                //if room has been visited before
                return `
                <p>${rooms[i]["transition_text"][roomIndex]}</p>
                <p><em>--You have already visited this location--</em></p>
                <p>${rooms[i]["description"]}</p>
                <p>${rooms[i]["doors"]}</p>
                `;

            } else {

                //if room has not been visited
                //update the visited html holder
                updateVisited(nextDirection)

                //return narration
                return `
            <p>${rooms[i]["transition_text"][roomIndex]}</p>
            <p>${rooms[i]["description"]}</p>
            <p>${rooms[i]["doors"]}</p>
            `;

            }

        }

    }

    //if there was no room with a matching "index" found that means the "index" is 
    //0 meaning there is no door in the inputted direction 
    return "There is no door in that direction."

}