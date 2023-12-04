# SCHIPHOL

This project is an application developed using React, taking as a reference the official website of the popular airport Schiphol. By integrating data from Schiphol's Flight V4 API, it aims to offer users the ability to keep track of weather, flight information and other relevant information.

## Technologies and Libraries Used

* REACT

* TAILWIND CSS

* MATERIAL UI

* REACT-ICONS

* REDUX-TOOLKIT-THUNK

## Project Description

The project pulls dynamic data from Schiphol's Flight V4 API, allowing users to access up-to-date information about the airport.I used React as the basis of the project. I mainly used Tailwind CSS in the design part. I used Material UI for tools in required areas like tabs and textfield. I used React-icons for the icons in the project. Additionally, the app has a responsive design so users have a seamless experience across different devices. I used Redux-Toolkit-Thunk for API integration.


## **! Read this section carefully!**

### - Failure to Receive Data and Access Control-Allow-Headers Error !

#### If the data does not arrive when you run your project and you receive an "Access-Control-Allow-Headers" error in the browser, you can follow the steps below to solve this problem:

* Open the command prompt on your computer (Cmd or Terminal).
* Navigate to the file path of Chrome.exe.
* Start Chrome browser in private mode by entering the following command:
### chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

This command bypasses CORS (Cross-Origin Resource Sharing) restrictions by disabling the browser's security measures. However, be aware that there may be security risks when browsing in this mode. It is recommended for use only during the development phase.

After following these steps, check your project again and see if the data is arriving properly.