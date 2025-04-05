// Create a new XMLHttpRequest object for API communication
var xhr = new XMLHttpRequest();
// Define the URL to fetch health-related JSON data
var url = `https://raw.githubusercontent.com/ezegeorgechukwuma/javaScriptEssential/refs/heads/master/newsArticle/newsArticle.json`;

// Initialize a GET request to the URL (true indicates asynchronous)
xhr.open('GET', url, true);

// Set the expected response type as JSON
xhr.responseType = 'json';

// Send the HTTP request
xhr.send();

// Event handler that runs when the request is complete
xhr.onload = function() {
    // Extract the articles array from the response
    var articles = xhr.response.articles;
    // Get the container element where articles will be appended
    var articlesDiv = document.getElementById('articles');

    // Loop through each article in the array
    articles.forEach(function(article) {
        // Create a div element for the current article
        var articleDiv = document.createElement('div');
        // Add the 'article' class to the div for styling
        articleDiv.classList.add('article');

        // Create and set the article title
        var title = document.createElement('h2');
        title.textContent = article.title;

        // Create and set the article description
        var description = document.createElement('p');
        description.textContent = article.description;

        // Create a header for the "Ways to Achieve" section
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        // Create an unordered list for ways to achieve
        var waysList = document.createElement('ul');
        // Loop through each way and add as list items
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        // Create a header for the "Benefits" section
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        // Create an unordered list for benefits
        var benefitsList = document.createElement('ul');
        // Loop through each benefit and add as list items
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // Append all elements to the article div in the correct order
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // Add the complete article to the main articles container
        articlesDiv.appendChild(articleDiv);
    });
}