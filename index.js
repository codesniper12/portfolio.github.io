// Ordering Appearance

const icon = document.getElementById('iconfiver');
const orders = document.querySelector('.orderbtn');

order(icon,orders);

const icon1 = document.getElementById('iconfiver1');
const order1 = document.querySelector('.orderbtn1');

order(icon1,order1);

function order(icon,order){
    icon.addEventListener('mouseenter',()=>{
        order.style.display='block';
    });
    
    icon.addEventListener('mouseleave',()=>{
        order.style.display='none';
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const starIconClass = 'line-md:star-filled';
    const starCssClass = 'rateofstar';
    
    // Object to map the selectors for different skill ratings
    const ratingSelectors = {
        html: '.rating_html',
        css: '.rating_css',
        js: '.rating_js',
        php: '.rating_php',
        sql: '.rating_sql',
        laravel: '.rating_laravel'
    };
    
    // Object representing the skill ratings
    const ratemyself = {
        html: 4,
        css: 4,
        js: 3,
        php: 3,
        sql: 3,
        laravel: 2
    };

    // Object representing the colors for each skill
    const color = {
        html: 'rgb(225,78,29)',
        css: 'rgb(41,101,241)',
        js: 'rgb(232,162,31)',
        php: 'rgb(95 131 255)',
        sql: 'rgb(0 133 189)',
        laravel: 'rgb(225,78,29)'
    };

    // Function to append star icons with color according to the rating for each skill
    const appendStarIcons = (skillKey, selector) => {
        const ratingElement = document.querySelector(selector);
        if (ratingElement) {
            const rate = ratemyself[skillKey]; // Get the rating for the specific skill
            const skillColor = color[skillKey]; // Get the color for the specific skill

            // Append star icons according to the rating
            for (let i = 0; i < rate; i++) {
                const starIcon = document.createElement('iconify-icon');
                starIcon.setAttribute('icon', starIconClass); // Set the icon class
                starIcon.setAttribute('class', starCssClass); // Set CSS class for styling
                starIcon.style.color = skillColor; // Set the color for the star icon
                ratingElement.appendChild(starIcon); // Append the star icon to the rating element
            }
        } else {
            console.warn(`Rating element with selector '${selector}' not found.`);
        }
    };

    // Loop through each skill and selector to append star icons
    for (const key in ratingSelectors) {
        const selector = ratingSelectors[key];
        appendStarIcons(key, selector);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('video');
    
    function handleVideoVisibility(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        });
    }
    
    const observer = new IntersectionObserver(handleVideoVisibility, {
        root: null, // Observe within the entire viewport
        rootMargin: '0px', // No additional margin
        threshold: 0.5 // Trigger the callback when 50% of the video is visible
    });
    
    observer.observe(videoElement);
});



const element = document.getElementById("html");
const rect = element.getBoundingClientRect();

console.log("Left:", rect.left);
console.log("Top:", rect.top);
console.log("Width:", rect.width);
console.log("Height:", rect.height);

const textbox = document.querySelector(".html");

textbox.addEventListener("mouseenter", function(event) {
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    console.log("Cursor X:", cursorX);
    console.log("Cursor Y:", cursorY);
});

const hideableElement = document.querySelector('.content');
if (window.scrollY === 0) { // or window.pageYOffset === 0
    hideableElement.style.display = 'none';
}
function toggleVisibility() {
  if (window.scrollY === 0) { // or window.pageYOffset === 0
    hideableElement.style.display = 'none';
  } else {
    hideableElement.style.display = 'block'; // Adjust as needed (height of the element)
  }
}

// Add scroll event listener to the window
window.addEventListener('scroll', toggleVisibility);

