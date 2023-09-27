// script.js
document.addEventListener("DOMContentLoaded", function () {
    const markers = document.querySelectorAll(".marker");
    const popupContainer = document.getElementById("popup-container");
    const popupCard = document.getElementById("popup-card");
    const popupImage = document.getElementById("popup-image");
    const popupText = document.getElementById("popup-text");
    const popupCloseBtn = document.getElementById("popup-close-btn");
    const prevImageBtn = document.getElementById("prev-image-btn");
    const nextImageBtn = document.getElementById("next-image-btn");
    let currentMarkerIndex = 0;
    let currentimage=0
    // Select the close button for the non-image popup
const popupCloseNonImage = document.getElementById("popup-close-non-image");

// Add an event listener for the close button click
popupCloseNonImage.addEventListener("click", function () {
    // Select the non-image popup container
    const popupNonImage = document.getElementById("popup-non-image");

    // Hide the non-image popup by setting its display property to "none"
    popupNonImage.style.display = "none";
});

    const markerData = [
        {
            
            type: "image",
            images: ["LIB/WhatsApp Image 2023-08-02 at 4.48.05 PM (1).jpeg",
            "LIB/WhatsApp Image 2023-08-02 at 4.48.05 PM (2).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.16 PM.jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.15 PM.jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.15 PM (2).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.15 PM (1).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.16 PM (3).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.15 PM (7).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.16 PM (1).jpeg",
            "LIB/WhatsApp Image 2023-08-02 at 4.48.05 PM.jpeg",
            "LIB/WhatsApp Image 2023-08-02 at 4.48.06 PM.jpeg",
            "LIB/WhatsApp Image 2023-08-02 at 4.49.25 PM (4).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.15 PM (3).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.15 PM (4).jpeg",
            "LIB/LIB.jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.15 PM (5).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.15 PM (6).jpeg",
            "LIB/WhatsApp Image 2023-07-29 at 2.34.16 PM (2).jpeg"],
            description: "one.txt"
        
        },
        {
            
            type: "image",
            images: [
                "image2_1.jpg",
                "image2_2.jpg",
                // Add more image paths for Marker 2
            ],
            description: "seventeen.txt"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 3
            ],
            description: "https://www.torontomu.ca/housing/housing-alternatives/hoem/"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 4
            ],
            description: "https://www.torontomu.ca/housing/housing-alternatives/hoem/"
        },
        {
            type: "image",
            images: ["ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (8).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.25 PM (3).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.25 PM (2).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.25 PM.jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (4).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (7).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.25 PM (1).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (5).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (6).jpeg"
            ],
            description: "nine.txt"
        },
        {
            type: "image",
            images: [
                // Add image paths for Marker 6
                "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (8).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.25 PM (3).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.25 PM (2).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.25 PM.jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (4).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (7).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.25 PM (1).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (5).jpeg",
            "ENG/WhatsApp Image 2023-08-02 at 4.49.24 PM (6).jpeg"
                
            ],
            description: "thirteen.txt"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 7
            ],
            description: "https://www.archdaily.com/984274/why-urban-farms-and-indoor-planting-are-the-future?ad_campaign=normal-tag"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 8
            ],
            description: "How do humans value urban nature.pdf"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 9
            ],
            description: "Lighting in Schools.pdf"
        },
        {
            type: "youtube",
            images: [
                // Add image paths for Marker 10
            ],
            description: "k_GFq12w5WU?si=xLMyb3gsAUb1wGAe"
        },
        {
            type: "image",
            images: [
                // Add image paths for Marker 11
               "14-patterns-cover (1).jpg"
            ],
            description: "fourteen.txt"
        },
        {
            type: "image",
            images: [
                // Add image paths for Marker 12
            ],
            description: "Description 12"
        },
        {
            type: "image",
            images: ["KH/WhatsApp Image 2023-07-29 at 2.34.17 PM (1).jpeg",
            "KH/WhatsApp Image 2023-07-29 at 2.34.17 PM.jpeg",
            "KH/WhatsApp Image 2023-07-29 at 2.34.17 PM (2).jpeg",
            "KH/WhatsApp Image 2023-07-29 at 2.34.16 PM (4).jpeg",
            ],
            description: "four.txt"
        },
        {
            type: "image",
            images: [
                // Add image paths for Marker 14
            ],
            description: "Description 14"
        },
        {
            type: "image",
            images: [
                // Add image paths for Marker 15
                "SUN/1floor_solar analysis.jpg",
                "SUN/1.png",
                "SUN/2.png",
                "SUN/3.png",
                "SUN/4.png",
                "SUN/5.png",
                "SUN/6.png",
                "SUN/8.png",

                
            ],
            description: "ten.txt"
        },
        {
            type: "image",
            images: [
                ""
                // Add image paths for Marker 16
            ],
            description: "Description 16"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 17
            ],
            description: "https://www.torontomu.ca/classrooms/active-learning-classroom/mural/"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 18
            ],
            description: "https://globalwellnessinstitute.org/wp-content/uploads/2018/12/biophilicdesignguide-en.pdf"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 19
            ],
            description: "Overheating measurment and simulation in classroom.pdf"
        },
        {
            type: "youtube",
            images: [
                // Add image paths for Marker 20
            ],
            // description: "watch?v=YSOFd0YgpQQ"
            description: "YSOFd0YgpQQ?si=yxWD2lKFQmcz9lwV"
           
            
        },
        {
            type: "pdf",
            images: [
                // Add image paths for Marker 21
                
            ],
            description: "fifteen.txt",
            descriptions:"Indoor air quality in schools.pdf"
        },
        {
            type: "image",
            images: ["SLC/WhatsApp Image 2023-08-02 at 4.48.21 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-07-29 at 2.32.19 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.22 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.22 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.22 PM (2).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.24 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-07-29 at 2.32.20 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.21 PM (2).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.21 PM (3).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.21 PM (7).jpeg",
            "SLC/WhatsApp Image 2023-07-29 at 2.32.17 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.23 PM (4).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.24 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.21 PM (4).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.18 PM (2).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.21 PM (6).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.21 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.22 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-07-29 at 2.32.16 PM (2).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.23 PM (3).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.18 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.23 PM (5).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.20 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.22 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.22 PM (3).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.19 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.22 PM (2).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.21 PM (5).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.19 PM (2).jpeg",
            "SLC/SLC.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.18 PM (1).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.24 PM (2).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.19 PM.jpeg",
            "SLC/WhatsApp Image 2023-07-29 at 2.32.17 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.23 PM (2).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.22 PM (3).jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.20 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.48.21 PM.jpeg",
            "SLC/WhatsApp Image 2023-08-02 at 4.49.21 PM.jpeg"
                // Add image paths for Marker 22
            ],
            description: "two.txt"
        },
        {
            type: "image",
            images: [
                // Add image paths for Marker 23
            ],
            description: "five.txt"
        },
        {
            type: "image",
            images: ["RCC/WhatsApp Image 2023-07-29 at 2.34.19 PM (2).jpeg",
            "RCC/WhatsApp Image 2023-07-29 at 2.34.17 PM (3).jpeg",
            "RCC/WhatsApp Image 2023-07-29 at 2.34.19 PM (1).jpeg",
            "RCC/WhatsApp Image 2023-07-29 at 2.34.19 PM.jpeg",
            "RCC/WhatsApp Image 2023-07-29 at 2.34.20 PM (1).jpeg",
            "RCC/WhatsApp Image 2023-07-29 at 2.34.20 PM.jpeg",
            "RCC/WhatsApp Image 2023-07-29 at 2.34.22 PM.jpeg",
            "RCC/WhatsApp Image 2023-07-29 at 2.34.18 PM.jpeg",
            "RCC/WhatsApp Image 2023-07-29 at 2.34.22 PM (1).jpeg"
            ],
            description: "seven.txt"
        },
        {
            type: "image",
            images: [
                // Add image paths for Marker 25
            ],
            description: "eleven.txt"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 26
            ],
            description: "https://microhabitat.ca/our-cities-toronto/"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 27
            ],
            description: "https://www.torontomu.ca/university-business-services/event-space-reservations/lecture-halls/#!accordion-1525360472870-library-lecture-hall-lib-72"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 28
            ],
            description: "https://www.biophiliccities.org/pattern-library"
        },
        {
            type: "youtube",
            images: [
                // Add image paths for Marker 29
            ],
            description: "KAiWdme6EEM?si=6uyktTUS41ATSd7I"
        },
        {
            type: "youtube",
            images: [
                // Add image paths for Marker 30
            ],
            description: "vy2gOq6nTJY?si=eO7NxNMZvPNCJgqB"
        },
        {
            type: "image",
            images: [
                // Add image paths for Marker 31
                "figma_cover.png"
            ],
            description: "sixteen.txt"
        },
        {
            type: "image",
            images: ["CCB/WhatsApp Image 2023-07-29 at 2.29.02 PM (2).jpeg",
            "CCB/WhatsApp Image 2023-08-02 at 4.49.23 PM.jpeg",
            "CCB/WhatsApp Image 2023-07-29 at 2.29.02 PM (1).jpeg",
            "CCB/WhatsApp Image 2023-08-02 at 4.49.23 PM (1).jpeg",
            "CCB/WhatsApp Image 2023-07-29 at 2.29.02 PM (3).jpeg",
            "CCB/WhatsApp Image 2023-07-29 at 2.29.02 PM (5).jpeg",
            "CCB/WhatsApp Image 2023-07-29 at 2.29.02 PM.jpeg",
            "CCB/WhatsApp Image 2023-07-29 at 2.29.02 PM (4).jpeg"
            ],
            description: "three.txt"
        },
        {
            type: "image",
            images: ["EPH/WhatsApp Image 2023-08-02 at 5.50.43 PM.jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.48 PM (3).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.46 PM (1).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.46 PM.jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.47 PM (2).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.48 PM (2).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.43 PM (2).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.48 PM.jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.43 PM (1).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.41 PM.jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.43 PM (3).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.47 PM.jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.47 PM (1).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.44 PM.jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.48 PM (1).jpeg",
            "EPH/WhatsApp Image 2023-08-02 at 5.50.41 PM (1).jpeg"
                // Add image paths for Marker 33
            ],
            description: "six.txt"
        },
        {
            type: "image",
            images: ["DCC/WhatsApp Image 2023-07-29 at 2.32.22 PM (3).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.22 PM (2).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.22 PM.jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.26 PM (1).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.25 PM.jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.24 PM.jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.26 PM (2).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.28.57 PM (1).jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.23 PM (8).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.22 PM (1).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.20 PM (4).jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.22 PM (6).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.29.01 PM (2).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.28.57 PM (2).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.23 PM (2).jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.22 PM (8).jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.23 PM (6).jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.22 PM (7).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.23 PM.jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.22 PM (5).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.20 PM (3).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.29.01 PM (1).jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.24 PM (3).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.32.23 PM (1).jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.23 PM (7).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.29.00 PM.jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.28.57 PM (3).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.28.56 PM.jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.22 PM (9).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.28.57 PM.jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.29.00 PM (1).jpeg",
            "DCC/WhatsApp Image 2023-08-02 at 4.49.24 PM (1).jpeg",
            "DCC/WhatsApp Image 2023-07-29 at 2.29.00 PM (2).jpeg"
            ],
            description: "eight.txt"
        },
        {
            type: "image",
            images: [

             // Add image paths for Marker 35
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 12.17.06 PM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 9.55.18 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 1.08.03 PM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 1.08.04 PM (2).jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 1.08.07 PM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 1.08.08 PM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 10.04.34 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 10.04.47 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 10.41.03 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 10.41.33 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 10.41.51 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 10.43.16 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 10.47.47 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 10.48.00 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 11.00.24 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 11.01.12 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 12.17.05 PM (1).jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 12.17.08 PM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-17 at 9.55.19 AM.jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-19 at 10.24.40 AM (2).jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-19 at 10.24.40 AM (4).jpeg",
             "CLASSROOMS/WhatsApp Image 2023-07-19 at 10.24.40 AM.jpeg",
           ],
            description: "twelve.txt"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 36
            ],
            description: "https://www.torontomu.ca/university-business-services/urban-farm/our-produce/farmers-market/"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 37
            ],
            description: "https://www.torontomu.ca/classrooms/classroom-improvements/classroom-refresh/"
        },
        {
            type: "link",
            images: [
                // Add image paths for Marker 38
            ],
            description: "Indoor air quality in schools.pdf"
        },
        {
            type: "youtube",
            images: [
                // Add image paths for Marker 39
            ],
            description: "3QZp6smeSQA?si=PYG_TkYsUAE4fo-N"
        },
        {
            type: "youtube",
            images: [
                // Add image paths for Marker 40
            ],
            description: "BEBKC7Hqfr0?si=EqB5Zu72Kdha19te"
        }
        // Add more objects for additional markers with unique image and description
    ];
    
    

    // Function to close the pop-up
    function closePopup() {

        popupContainer.style.display = "none";
    }
    function loadDescription(markerIndex) {
        const descriptionFile = markerData[markerIndex].description;
    
        // Fetch the description file
        fetch(`descriptions/${descriptionFile}`)
        .then(response => response.text())
        .then(htmlContent => {
            // Update the description container with the loaded HTML content
            const popupRight = document.getElementById("popup-right");
            popupRight.innerHTML = htmlContent;
            // console.log(htmlContent)

                
            })
            .catch(error => {
                console.error("Error loading description:", error);
            });
    }
    
    // Usage: Call loadDescription(markerIndex) when a marker is clicked
    
    
    // Function to open the pop-up
    function openPopup(marker) {
        console.log("INSIDE OPEN POPUP")
        const popupTextContent = marker.getAttribute("data-popup");
        currentMarkerIndex = parseInt(marker.getAttribute("data-index"));
        
        loadDescription(currentMarkerIndex)
        

        popupImage.src = markerData[currentMarkerIndex].images[0];

        popupContainer.style.display = "flex";
    }
    
    function openPopup2(marker) {
        //marker -> div
        // marker -> index -> index
        // use ithis index markerData[index]
        // popupdata = markerData[index]
        const popupTextContent = marker.getAttribute("data-popup");
        currentMarkerIndex = parseInt(marker.getAttribute("data-index"));
        console.log("INSIDE OPEN POPUP 2")
        const popupNonImage = document.getElementById("popup-non-image");
        const popupNonImageContent = document.querySelector(".popup-non-image-content");
    
        // Clear previous content and add new content specific to the non-image marker
        popupNonImageContent.innerHTML = "";
        console.log(currentMarkerIndex, markerData[currentMarkerIndex])
        if (markerData[currentMarkerIndex].type === "youtube") {
            // Handle YouTube markers
            const youtubeVideoId = markerData[currentMarkerIndex].description;
            const iframe = document.createElement("iframe");
            iframe.width = "560";
            iframe.height = "315";
            
            iframe.src = `https://www.youtube.com/embed/${youtubeVideoId}`;
            console.log(iframe.src)
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            popupNonImageContent.appendChild(iframe);


         

        } else if (markerData[currentMarkerIndex].type === "link") {
            // Handle PDF markers
            const pdfUrl = markerData[currentMarkerIndex].description; // Replace with the actual URL to the PDF
            const iframe = document.createElement("iframe");
            iframe.width = "900";
            iframe.height = "500";
            iframe.src = pdfUrl;
            iframe.frameBorder = "0";
            popupNonImageContent.appendChild(iframe);
        }
        
        else if (markerData[currentMarkerIndex].type === "pdf") {
            // Handle PDF markers
            // loadDescription(currentMarkerIndex)
          
            // const pdfUrl = markerData[currentMarkerIndex].descriptions; // Replace with the actual URL to the PDF
            // const iframe = document.createElement("iframe");
            // console.log(pdfUrl)
            // iframe.width = "500";
            // iframe.height = "300";

            
            // iframe.src = pdfUrl;
            // iframe.frameBorder = "0";
            // popupNonImageContent.appendChild(iframe);
            var pdfIframe = document.getElementById("pdf-iframe");
            var pdfDescription = document.getElementById("pdf-description");

            // Set the PDF source
            console.log(pdfIframe )
            pdfIframe.src = markerData[currentMarkerIndex].descriptions;

            // Set the PDF description
            pdfDescription.textContent = markerData[currentMarkerIndex].description;

            // Show the popup
            var popup = document.getElementById("popup-non-imag");
            console.log(popup)
            popup.style.display = "block";
        
        
        } else if (marker.type === "otherType1") {
            // Handle otherType1 markers
            // You can add content specific to this type here
            const content = "Content for otherType1 marker";
            popupNonImageContent.innerHTML = content;
        } else if (marker.type === "otherType2") {
            // Handle otherType2 markers
            // You can add content specific to this type here
            const content = "Content for otherType2 marker";
            popupNonImageContent.innerHTML = content;
        }
    
        // Display the non-image pop-up
        popupNonImage.style.display = "block";
    }
    
    // Attach click event listeners to markers
    markers.forEach(function (marker, index) {
        marker.setAttribute("data-index", index);
        marker.addEventListener("click", function () {
            
            if (markerData[index].type === "image") {
                openPopup(marker);
                if (markerData[index].images.length ===1){
                    console.log(markerData[index].images.length ,markerData[index] )
                    prevImageBtn.style.display = "none";
                    nextImageBtn.style.display ="none";
                }
                else {
                // If there are multiple images, show the buttons
                prevImageBtn.style.display = "block"; // or "inline" or any appropriate display value
                nextImageBtn.style.display = "block"; // or "inline" or any appropriate display value
            }
                
            } else {
                console.log('hello');
                console.log(marker);
                openPopup2(marker);
            }
        });
    });

    // Attach click event listener to close button
    popupCloseBtn.addEventListener("click", function () {
        closePopup();
    });

    // Image navigation buttons
    prevImageBtn.addEventListener("click", function () {
        if (currentimage > 0) {
            currentimage--;}
        else {
            currentimage=markerData[currentMarkerIndex].images.length-1
        }
        currentimage = markerData[currentMarkerIndex].images.length - 1
            popupImage.src = markerData[currentMarkerIndex].images[currentimage];

        
    });

    nextImageBtn.addEventListener("click", function () {
        if (currentimage< markerData[currentMarkerIndex].images.length - 1) {
            currentimage++;}
        else
        { currentimage=0
        }
        popupImage.src = markerData[currentMarkerIndex].images[currentimage];

    
    });
});
