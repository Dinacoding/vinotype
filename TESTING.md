
## Testing


## Table of Contents

1.[Table of Contents](#table-of-contents)
2. [Functionaly Testing](#functionality-testing)
3. [Responsiveness & Cross-Browser Compatibility](#responsiveness--cross-browser-compatibility)
4. [Performance & Accessibility Testing](#performance--accessibility-testing)
5. [JsHint ](#jshint)
6. [Manual Testing](#manual-testing)
7. [Automated Testing](#automated-testing)
8. [Lighthouse](#lighthouse)
9. [JsLint Testing](#jslint-testing)


### Functionality testing

| **Description of Test**                                           | **Passed (Yes/No)** | **Notes or Comments**                         |
|-------------------------------------------------------------------|---------------------|-----------------------------------------------|
| Is git setup and running in your VsCode editor | Yes | Tested and confirmed|
| Meta Tags are descriptive and they are present in file page | Yes                 | They are present and cohesive.                |
| BootStrap link is on the index.html page| Yes                | It is displaying and functional
| Create a list of variables in style.css | Yes                | It is on the top of the page|
| Display hamburger menu icon using Unidcode| Yes              | It is displaying correctly|
| Install the npm Jest into the project| Yes                   | It is installed correctly|
| Hamburger menu is responsive and toggle has been updated with JavaScript| Yes | Tested and confirmed|
| Data is being used on the display an array with wines| Yes| It has been tested in the console|
| Message of error fetching the data on the fetch function| Yes| It has been tested in the console|
| Live Link is present in the README.md | Yes                  | It is present and working|
| The button clear, removes all the results| Yes | It works and removes the results|
| Footer contains the social links and they redirect to the correct webpages| Yes| Accessibility and they redirect|
| Message of Wine not found appears if the wine is not present on the list | Yes | It appears on red below the search-bar|
| Wine.json has been updated to include pairing suggestions and tasting notes| Yes | It was updated and it is included in the index.js file|
|Test the console.log of the displayWineCard function, wine container and wineCard| Yes | Tested in the console|


###  **Responsiveness & Cross-Browser Compatibility**

| **Tested On** | **Status** | **Notes** |
|--------------|-----------|----------|
| Google Chrome | Passed | Fully functional |
| Mozilla Firefox | passed | Fully functional |
| Microsoft Edge | Passed |  |
| Mobile (iOS) | Passed | Responsive layout confirmed |

- [Chrome](documentation/browser-testing/chrome.png)
- [Edge](documentation/browser-testing/chrome.png)
- [Firefox](documentation/browser-testing/firefox.png)
- [IOS](documentation/browser-testing/ios.PNG)



### **Performance & Accessibility Testing**

| **Test Description** | **Status** | **Notes** |
|----------------------|-----------|----------|
| Page load speed | Passed | No significant delays in fetching data |
| Images have descriptive `alt` attributes | Passed | Verified for accessibility |
| Keyboard navigation works as expected | Passed | Users can navigate without a mouse |
| Contrast and readability checks | Passed | Text is legible with appropriate contrast |
| Screen reader compatibility | Passed | Tested with screen reader tools |



### JsHint 

The code has been tested and successfully passes JSHint without any critical issues. It follows modern ES6+ standards, utilizing const and let for variable declarations, ensuring better scope management.

![JSHint](documentation/browser-testing/testing.png)
![JSHint](documentation/browser-testing/testing-2.png)
![JSHint](documentation/browser-testing/testing-3.png)
![JSHint](documentation/browser-testing/testing-4.png)

### Manual Testing

To performe a comprehensive manual evalutation of the Vinotype website, it is important to start assessing its navigation functionality. Firstly, ensure that the logo within the header redirects users to the homepage, secondly the toggle button should be tested to ensute it propertly expands and collapses the navigation links. To assess the website's responsiveness, its interface should be tested on different screen sizes and devices. This involves verifying that the layout adapts based on already defined CSS media query breakpoints. At last, a comprehensive review of the color scheme and design consistency is essential to ensure that background images, text colors, and other visual elements align with the intended design specifications.

The wine search functionality must be tested. Users should be able to input the on the search bar to generate the search, such as wine names, countries, and grape varieties, into the search bar, and the displayed results should update in real time. Explore more possible test cases, including empty inputs, partial matches, and non-existent wines and check if the system provides an appropriate feedback, such as a "Wine not found!" notification when necessary. Clicking on a search result should display the corresponding wine card, which presents key details, including the name, vintage (year), color, country of origin, description, tasting notes, and recommended food pairings.

Test must be conducted to validate that the close button effectively removes the wine card from view and that the "Clear" button resets the search input while it conceals the results box. Throughout the process, it is necessary to inspect the browser console for any unexpected errors or warnings that could indicate technical issues.

To sum up, this manual testing will result in a fully operational website that provides a seamless user experience.

### Automated Testing

Automated testing is essential for maintaining the reliability and the quality of the code. Using the software tools we ensure the Vinotype application works perfectly across various scenarios. To execute tests and compare the results up against expected outcomes. Tests will verify that the function searchWines() returns the correct wines for the different search queries, it covers cases like misspelings or partial matches and that displayWineCard() function accurately gives wine information, such as names, years, and descriptions, along with associated images and tasting notes by fecthing the data on the wine.json.

It is highly suggested that you develop the testing while building the application, it helps prevent potential bugs early, ensures smoother integration of components and reduces the time spent debugging later in the development cycle.

Futhermore, automation extents to user interactions and confirms that elements like the search and clear buttons trigger the expected behaviour. The approach does not only provides repeatable, consistent testing and allows early stages of defecting
Integrating automated testing into the development workflow enables continuous integration, where tests are executed with each code change, ensuring that new updates do not introduce regressions and maintaining a stable, high-quality application.


### Lighthouse

On desktop, Vinotype web application demonstrates strong performance, scoring a perfect 100 in both Performance and Best Practices categories in the Lighthouse audit. The application also excels in SEO, achieving a 100 score, indicating excellent search engine optimization. While Accessibility scored a commendable 96, it suggests there's room for minor improvements to ensure a more inclusive user experience. Overall, these results highlight the application's robust technical foundation, efficient loading times, adherence to best web development practices, and strong visibility in search engines.

- [Desktop](documentation/lIghthouse/lighthouse-desktop.png)

On the phone,  web application showcases strong performance in key areas, as evidenced by the Lighthouse audit. Achieving a perfect 100 in both Best Practices and SEO demonstrates excellent adherence to web development standards and robust search engine optimization.  Accessibility scores a solid 96. While Performance scores 91, it still reflects a well-optimised application with room for further improvements to ensure optimal loading times and user experience. Overall, the Vinotype application demonstrates a solid foundation and a commitment to quality across critical web development metrics.

- [Phone](documentation/lighthouse/lighthouse-phone.png)


### JsLint Testing

The JSLint analysis of JavaScript code. The tool has identified several warnings, firstly related to code style and formatting. These include unexpected trailing spaces, lines exceeding 80 characters, and the use of single quotes instead of double quotes. While these warnings suggest improvements in code readability and maintainability, they do not indicate or affect critically  JavaScript code from functioning.

- [Jslint](documentation/JSlint.png)


### Validator Testing 

The HTML and CSS components of the Vinotype web application were subjected to rigorous validation using the W3C Markup Validation Service and the W3C CSS Validation Service, respectively. Both the HTML and CSS documents successfully passed validation, confirming adherence to established web standards. This validation process ensures the structural integrity and cross-browser compatibility of the application. . Compliance with W3C standards contributes to enhanced accessibility, improved performance, and a consistent user experience. The successful validation of the Vinotype application's codebase demonstrates a commitment to quality and best practices in web development.


![HTML](documentation/validator.w3.org_nu_%20(6).png)
![CSS](documentation/jigsaw.w3.org_css-validator_validator%20(3).png)
