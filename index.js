// Ordering Appearance

const icon = document.getElementById('iconfiver');
const order = document.querySelector('.order');

icon.addEventListener('mouseenter',()=>{
    order.style.display='block';
});

icon.addEventListener('mouseleave',()=>{
    order.style.display='none';
});

// document.addEventListener('DOMContentLoaded', () => {
//     const starIconClass = 'line-md:star-filled';
//     const starCssClass = 'rateofstar';
    
//     // Object to map the selectors for different skill ratings
//     const ratingSelectors = {
//         html: '.rating_html',
//         css: '.rating_css',
//         js: '.rating_js',
//         php: '.rating_php',
//         sql: '.rating_sql'
//     };
    
//     // Object representing the skill ratings
//     const ratemyself = {
//         html: 4,
//         css: 4,
//         js: 3,
//         php: 3,
//         sql: 3
//     };

//     // Object representing the colors for each skill
//     const color = {
//         html: 'rgb(225,78,29)',
//         css: 'rgb(41,101,241)',
//         js: 'rgb(232,162,31)',
//         php: 'rgb(95 131 255)',
//         sql: 'rgb(0 133 189)'
//     };

//     // Function to append star icons with color according to the rating for each skill
//     const appendStarIcons = (skillKey, selector) => {
//         const ratingElement = document.querySelector(selector);
//         if (ratingElement) {
//             const rate = ratemyself[skillKey]; // Get the rating for the specific skill
//             const skillColor = color[skillKey]; // Get the color for the specific skill

//             // Append star icons according to the rating
//             for (let i = 0; i < rate; i++) {
//                 const starIcon = document.createElement('iconify-icon');
//                 starIcon.setAttribute('icon', starIconClass); // Set the icon class
//                 starIcon.setAttribute('class', starCssClass); // Set CSS class for styling
//                 starIcon.style.color = skillColor; // Set the color for the star icon
//                 ratingElement.appendChild(starIcon); // Append the star icon to the rating element
//             }
//         } else {
//             console.warn(`Rating element with selector '${selector}' not found.`);
//         }
//     };

//     // Loop through each skill and selector to append star icons
//     for (const key in ratingSelectors) {
//         const selector = ratingSelectors[key];
//         appendStarIcons(key, selector);
//     }
// });
