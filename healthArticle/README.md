# Health Articles Fetcher

## Overview
This project fetches and displays health-related articles from an external JSON API. The webpage dynamically creates and populates HTML elements to present health information in an organized, user-friendly format.

## Features
- Asynchronous data fetching using XMLHttpRequest
- Dynamic DOM manipulation
- Organized display of health articles with:
  - Title
  - Description
  - Ways to achieve health goals
  - Benefits of each health practice

## How It Works
1. The application makes an AJAX request to fetch JSON data from an IBM Skills Network cloud storage endpoint
2. Once data is received, it parses the JSON response
3. For each article in the dataset, the script creates HTML elements and populates them with content
4. The complete article elements are then appended to a container div in the DOM

## Code Structure
- Uses vanilla JavaScript (no frameworks)
- Follows DOM manipulation best practices
- Organizes content hierarchically with appropriate HTML elements (h2, h3, p, ul, li)

## Setup Instructions
1. Include the JavaScript file in your HTML document:
   ```html
   <script src="script.js"></script>
   ```

2. Add a container div with the ID "articles" to your HTML:
   ```html
   <div id="articles"></div>
   ```

3. Make sure your page has access to the internet to fetch the data

## Data Source
The application fetches data from:
```
https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json
```

## Example JSON Structure
The API returns data in the following format:
```json
{
  "articles": [
    {
      "title": "Article Title",
      "description": "Article description text",
      "ways_to_achieve": [
        "Way 1",
        "Way 2"
      ],
      "benefits": [
        "Benefit 1",
        "Benefit 2"
      ]
    }
  ]
}
```

## Styling
Add your own CSS to style the articles by targeting the "article" class and other HTML elements.

## Browser Compatibility
This code works in all modern browsers that support ES5+ JavaScript.
