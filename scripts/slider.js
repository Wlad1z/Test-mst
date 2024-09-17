const reviews = [
    {
        user: 'Emily Johnson',
        img: '1',
        review: `Norway is perfect for nature lovers! The fjords, mountains, and waterfalls were stunning. We spent most days hiking and exploring the countryside. The fjord cruise in Geirangerfjord was breathtaking, with crystal-clear waters and towering cliffs. Bergen's colorful houses and fish market were delightful. Yes, Norway is pricey, but the beauty and peacefulness are worth it. Staying in cozy cabins helped with costs, and the views were amazing. If you’re seeking adventure and tranquility, Norway is the place to go. Already planning my next visit!`
    },
    {
        user: 'Michael Davis',
        img: '2',
        review: `Our Norway trip was magical! Oslo’s Viking Ship Museum and Bergen's Bryggen Wharf were highlights. But the fjord tour was the real star – the cliffs and waterfalls left us speechless. Norway is costly, but shopping at markets and cooking our meals helped. The scenery and experiences were unforgettable, making every penny worth it. A highly recommended destination for adventure and nature enthusiasts!`
    },
    {
        user: 'Sophia Martinez',
        img: '3',
        review: `A fantastic family trip! We loved Oslo's Vigeland Park and the Norway in a Nutshell tour. The train ride through mountains and the fjord cruise were simply stunning. Flåm felt like a fairytale town. Renting a car allowed us to explore hidden gems. Although expensive, the natural beauty was worth every dollar. Norway is safe, friendly, and a must-see!`
    },
    {
        user: 'James Wilson',
        img: '4',
        review: `Norway is breathtaking! From Oslo’s museums to Bergen’s fish market, everything was amazing. The Nærøyfjord cruise was surreal; it felt like sailing through a painting. Yes, Norway is not cheap, but staying in Airbnbs and using public transport helped. If you love nature and tranquility, Norway should be on your bucket list. An unforgettable trip!`
    },
    {
        user: 'Olivia Brown',
        img: '5',
        review: `Norway was perfect for a romantic getaway! Oslo's Opera House at sunset was magical, and Bergen’s harbor was picture-perfect. The fjord cruise was peaceful and awe-inspiring. Though expensive, the food was top-notch, especially the seafood. Visit in summer for mild weather and long days. Norway is a paradise for nature lovers and adventure seekers!`
    },
    {
        user: 'Ethan Clark',
        img: '6',
        review: `Our road trip through Norway was unforgettable. Renting a car gave us the freedom to explore Trollstigen Mountain Road and the Lofoten Islands. Every stop had stunning views and friendly locals. While costs can add up, camping helped save money. If you love the outdoors, a road trip through Norway is a must!`
    },
    {
        user: 'Ava Lewis',
        img: '7',
        review: `Norway is an outdoor lover’s paradise! Hiking Preikestolen was challenging but rewarding, and kayaking in the fjords was so peaceful. Oslo and Bergen provided cultural balance to our nature adventures. Yes, it’s expensive, but hostels and self-cooked meals kept us on budget. Norway’s beauty is worth every effort – a trip of a lifetime!`
    },
    {
        user: 'Daniel Walker',
        img: '8',
        review: `My solo trip to Norway was magical. Oslo’s mix of history and modernity was fascinating, and the train ride to Bergen was breathtaking. The fjord cruise from Bergen was the highlight – surreal cliffs and waterfalls everywhere. Norway is expensive, but the stunning scenery and friendly locals made it worth every penny.`
    },
    {
        user: 'Emma Anderson',
        img: '9',
        review: `Norway is like a postcard! Oslo’s Viking Ship Museum and Vigeland Park were impressive. The scenic train ride to the fjords was unforgettable. The Sognefjord cruise offered dramatic cliffs and peaceful waters. Despite high costs, the natural beauty and delicious food made it worthwhile. Norway is a must-visit for stunning landscapes!`
    }
];


const slidesContainer = document.getElementById("slides");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dottedSlides = document.getElementById("dotted-slides");

let currentSlideIndex = 0;
let slidesToShow = 0;
let autoSlideInterval;
let radios = [];

function initSlides() {
    slidesContainer.innerHTML = '';
    dottedSlides.innerHTML = '';

    reviews.forEach((slide, index) => {
        const slideElement = document.createElement("div");
        slideElement.className = "slide";
        slideElement.innerHTML = `
            <div class="user">
                <img src="static/${slide.img}.jpg" alt="1">
                <p>${slide.user}</p>
            </div>
            <div class="review-text">
                <p>${slide.review}</p>
            </div>
        `;
        slidesContainer.appendChild(slideElement);

        const slideDot = document.createElement("input");
        slideDot.type = "radio";
        slideDot.name = "slide-selector";
        slideDot.className = "slide-dot";
        slideDot.id = `slide-dot-${index}`;
        const slideLabel = document.createElement("label");
        slideLabel.className = "slide-label";
        slideLabel.setAttribute('for', `slide-dot-${index}`);

        dottedSlides.appendChild(slideDot);
        dottedSlides.appendChild(slideLabel);
    });

    updateSlidePosition();
    radios = document.querySelectorAll('input[type="radio"]');
    updateButtons(currentSlideIndex);
    
    radios.forEach((radio, index) => {
        radio.addEventListener('click', function() {
            currentSlideIndex = index;
            updateSlidePosition();
            updateButtons(currentSlideIndex);
        });
    });
}



function updateSlidePosition() {
    const firstSlide = slidesContainer.querySelector('.slide');
    const slideWidth = firstSlide.getBoundingClientRect().width; 
    const slideMarginRight = parseFloat(window.getComputedStyle(firstSlide).marginRight);
    const totalSlideWidth = slideWidth + slideMarginRight; 

    slidesContainer.style.transform = `translateX(-${currentSlideIndex * totalSlideWidth}px)`;
}

function updateButtons(x) {
    prevButton.disabled = currentSlideIndex === 0;
    prevButton.classList.toggle('disabled', prevButton.disabled);

    nextButton.disabled = currentSlideIndex >= reviews.length-1;
    nextButton.classList.toggle('disabled', nextButton.disabled);

    radios[x].checked = true;
}



nextButton.addEventListener("click", function() {
    if (currentSlideIndex < reviews.length - 1) {
        currentSlideIndex++;
        updateSlidePosition();
        updateButtons(currentSlideIndex);
    }
});

prevButton.addEventListener("click", function() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlidePosition();
        updateButtons(currentSlideIndex);
    }
});

initSlides();

window.addEventListener('resize', function() {
    initSlides();
});