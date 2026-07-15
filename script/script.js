let currentImageIndex = 0;
let images = [];

// Get the folder name from the URL
const pathParts = window.location.pathname.split("/").filter(Boolean);
const folderName = pathParts[pathParts.length - 1];

// Assume images are named 1.png, 2.png, etc.
const imageCount = 4; // 🔹 change this to however many you have
for (let i = 1; i <= imageCount; i++) {
    images.push(`./assets/${folderName}/${i}.png`);
}



function openModal(index) {
    currentImageIndex = index;
    document.getElementById("modal").style.visibility = "visible";
		document.getElementById("modal").style.opacity = 1;
    document.getElementById("expanded-img").src = images[currentImageIndex];
}

function closeModal() {
		document.getElementById("modal").style.opacity = 0;
    document.getElementById("modal").style.visibility = "hidden";
}

function moveImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById("expanded-img").src = images[currentImageIndex];
}
function keyListener(event) { 
    event = event || window.event; //capture the event, and ensure we have an event

    var key = event.key || event.which || event.keyCode; // Find the key that was pressed
    

    if(key === "ArrowLeft") { // Left arrow key
        moveImage(-1); //move left
    }
    if(key === "ArrowRight") { // Right arrow key
        moveImage(1); //move right
    }
		if(key === "Escape") { // Escape key
				closeModal(); //close the modal
		}
}

// Bind the event listener to the window object
window.addEventListener('keydown', keyListener, false);
