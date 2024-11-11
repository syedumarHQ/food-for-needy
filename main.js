// Initialize food list and requests
const foodList = JSON.parse(localStorage.getItem('foodList')) || [];
const foodRequests = JSON.parse(localStorage.getItem('foodRequests')) || [];

// Function to display the food donations
function displayFoodList() {
    const foodListElement = document.getElementById('food-list-content');
    foodListElement.innerHTML = ''; // Clear previous list

    foodList.forEach(food => {
        const li = document.createElement('li');
        li.textContent = `${food.item} - ${food.location} - ${food.quantity} - ${food.phone}`;
        foodListElement.appendChild(li);
    });
}

// Function to display the food requests
function displayFoodRequests() {
    const foodRequestListElement = document.getElementById('food-request-list');
    foodRequestListElement.innerHTML = ''; // Clear previous list

    foodRequests.forEach(request => {
        const li = document.createElement('li');
        li.textContent = `${request.item} - ${request.location} - ${request.phone}`;
        foodRequestListElement.appendChild(li);
    });
}

// Function to add food donations
function addFood() {
    const item = document.getElementById('food-item').value;
    const location = document.getElementById('location').value;
    const quantity = document.getElementById('quantity').value;
    const phone = document.getElementById('phone').value;

    const foodItem = { item, location, quantity, phone };
    foodList.push(foodItem);
    localStorage.setItem('foodList', JSON.stringify(foodList));  // Save to localStorage
    alert('Food added successfully!');
    displayFoodList();  // Refresh the list
}

// Function to request food
function requestFood() {
    const item = document.getElementById('request-item').value;
    const location = document.getElementById('request-location').value;
    const phone = document.getElementById('request-phone').value;

    const foodRequest = { item, location, phone };
    foodRequests.push(foodRequest);
    localStorage.setItem('foodRequests', JSON.stringify(foodRequests));  // Save to localStorage
    alert('Food request submitted successfully!');
    displayFoodRequests();  // Refresh the list
}

// Function to clear food donations
function clearFoodList() {
    if (confirm("Are you sure you want to clear all donations?")) {
        localStorage.removeItem('foodList');  // Clear donations from localStorage
        foodList.length = 0;  // Clear the array holding the donations
        displayFoodList();  // Refresh the list on the page
        alert('All food donations have been cleared!');
    }
}

// Function to clear food requests
function clearFoodRequests() {
    if (confirm("Are you sure you want to clear all requests?")) {
        localStorage.removeItem('foodRequests');  // Clear requests from localStorage
        foodRequests.length = 0;  // Clear the array holding the food requests
        displayFoodRequests();  // Refresh the list on the page
        alert('All food requests have been cleared!');
    }
}

// Call these functions to display the food list and requests on page load
document.addEventListener('DOMContentLoaded', () => {
    displayFoodList();
    displayFoodRequests();
});
