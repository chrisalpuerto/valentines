function openDoor() {
    document.getElementById("click-door").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}


let noClickCount = 0;

const sadImages = [
    "/images/cry4.gif",
    "/images/cry1.jpeg",
    "/images/cry2.gif",
    "/images/cry3.gif",
    "/images/cry5.jpeg",
    "/images/cry6.jpeg",
    "/images/cry7.jpeg",
    "/images/cry8.gif",
    "/images/cry9.jpeg",
    "/images/cry10.jpeg",
];


function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        noClickCount++;

        if(noClickCount <= 5){
            document.getElementsByClassName("image")[0].src = sadImages[noClickCount - 1];
            document.getElementById("question").textContent =
            "Told ya, please be my Valentine ˙◠˙";
            document.getElementById("name").style.display = "none";
            document.getElementsByClassName("image2")[0].style.display = "none";

        } else {
            document.getElementsByClassName("image")[0].src = "/images/cat-cats.gif";
            const questionElement = document.getElementById("question");
            questionElement.textContent =  "Okay Pookie, sorry for insisting so much. Of course I respect your boundaries and I'm sorry if I was being too pushy. I hope you have a fantastic Valentine's Day! And don't forget to drink water 🥛"
            questionElement.className = "message-text";
            noClickCount = 0;


            document.getElementById("no-button").style.display = "none";
            document.getElementById("yesButton").style.display = "none";
        }

        noButton.style.position = "absolute";

        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";


    }
    if (response === "Yes") {
        // Hide the current content
        document.getElementById("main-content").style.display = "none";

        // Show the new content
        document.getElementById("new-page").style.display = "block";

        // Optionally, scroll to the new section
        document.getElementById("new-page").scrollIntoView({ behavior: 'smooth' });
    } 
}
    
    function showMessage2(newResponse) {
        if (newResponse === "Continue") {
            document.getElementById("new-page").style.display = "none";
            document.getElementById("main-content").style.display = "block";
            document.getElementById("yesButton").style.display = "none";

            document.getElementById("name").remove();
            document.getElementById("no-button").remove();

            document.getElementById("continue-button").remove();

            const yesMessage = document.getElementById("question");
            yesMessage.textContent = "YESSSSS, see you the 14th!!";
            yesMessage.style.display = "block";
            yesMessage.style.fontStyle = "normal";

            const existingImage = document.getElementsByClassName("image")[0];
            existingImage.parentNode.removeChild(existingImage);
            const existingImage2 = document.getElementsByClassName("image2")[0];
            existingImage2.parentNode.removeChild(existingImage2);

            const gifElement = document.createElement("img");
            gifElement.setAttribute("src", "/images/uwu2.gif");
            gifElement.className = "responsive-gif";
        
            const audioElement = document.createElement("audio");
            audioElement.setAttribute("controls", "");
            audioElement.setAttribute("autoplay", "");
            const sourceElement = document.createElement("source");
            sourceElement.setAttribute("src", "/images/rockurworld.mp3");
            sourceElement.setAttribute("type", "audio/mp3");
            audioElement.appendChild(sourceElement);

            audioElement.currentTime = 70;
        
            const container = document.querySelector(".container");
            container.appendChild(gifElement);
            container.appendChild(audioElement);



/*         document.getElementsByClassName("image")[0].src = "images/dance.gif"; */

    }

}
