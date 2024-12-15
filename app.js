// JavaScript for toggling active model selection
const modelButtons = document.querySelectorAll('.model-btn');
const humanizeBtn = document.getElementById('humanizeBtn');
const inputText = document.getElementById('inputText');
const outputBox = document.getElementById('outputBox');

// Toggle model selection
modelButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        modelButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');
    });
});

// Humanize button functionality
humanizeBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    
    if (text === "") {
        outputBox.textContent = "Please enter text to humanize.";
    } else {
        // For now, we will just display the entered text as "humanized" content
        outputBox.textContent = `Humanized Content: ${text}`;
    }
});

// JavaScript for chatbot functionality
document.addEventListener("DOMContentLoaded", function() {
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatboxContainer = document.getElementById('chatboxContainer');
    const closeChat = document.getElementById('closeChat');

    // Open chatbox on button click
    chatbotBtn.addEventListener('click', function() {
        chatboxContainer.style.display = 'flex';
    });

    // Close chatbox
    closeChat.addEventListener('click', function() {
        chatboxContainer.style.display = 'none';
    });
});

// JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode was previously enabled
let isDarkMode = localStorage.getItem('theme') === 'dark';

// Function to apply the correct theme
const applyTheme = (isDark) => {
    if (isDark) {
        document.body.style.backgroundColor = '#22031e';
        document.body.style.color = 'white';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.style.backgroundColor = '#277851';
        document.body.style.color = 'black';
        localStorage.setItem('theme', 'light');
    }
};

// Initially apply the theme based on the stored preference
applyTheme(isDarkMode);

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    applyTheme(isDarkMode);
});

// Include this script in your app.js or main JS file

// Elements
const selectRegionBtn = document.getElementById('selectRegionBtn');
const regionPopup = document.getElementById('regionPopup');
const selectedTime = document.getElementById('selectedTime');
let timeInterval; // To manage the time interval

// Show and hide popup
selectRegionBtn.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent event bubbling
  regionPopup.style.display = regionPopup.style.display === 'block' ? 'none' : 'block';
});

// Close popup when clicking outside
window.addEventListener('click', function(event) {
  if (!regionPopup.contains(event.target) && event.target !== selectRegionBtn) {
    regionPopup.style.display = 'none';
  }
});

// Update time based on selected region
regionPopup.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'LI') {
    const country = target.getAttribute('data-country');
    const timezone = target.getAttribute('data-timezone');
    selectRegionBtn.textContent = country; // Update button text to selected country
    regionPopup.style.display = 'none'; // Close the popup
    showTimeForRegion(country, timezone);
  }
});

// Function to show time for the selected region
function showTimeForRegion(country, timezone) {
  // Clear previous interval if any
  if (timeInterval) {
    clearInterval(timeInterval);
  }
  
  // Update time immediately
  updateTime();

  // Update time every second
  timeInterval = setInterval(updateTime, 1000);

  function updateTime() {
    const now = new Date();
    const options = { 
      timeZone: timezone, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    selectedTime.innerHTML = `${country}: ${timeString}`;
  }
}

// Redirect to login page when login button is clicked
loginBtn.addEventListener('click', function() {
  window.location.href = 'login.html';
});




