**Project for Marquee Equity Internship Assessment**

**Live Deployed on Vercel** https://library-gamma-eight.vercel.app/

# Overview
This project is a React application that uses the Open Library API to allow users to search for books by title, author, or ISBN.

The user-friendly interface includes a search bar with debounced input for efficient searching. Search results are displayed as BookCard components, showcasing book details such as title, author, rating, and publication year. 

Additionally, users can add books of interest to their personalized bookshelf, stored locally using browser's localStorage. The project integrates responsive design and interactive functionalities, providing a seamless experience for book enthusiasts to discover, save, and manage their favorite books

# Functionality

**Debounced Search:** Uses lodash.debounce to debounce the search input, reducing API requests during rapid typing.

**Fetching Data:** Performs asynchronous fetch to the Open Library API, processes the response to extract book details.

**Search Trigger:** Handles search trigger on input change or search button click using useEffect and debouncedFetchData.

**Rendering Results:** Displays loading indicator during search and renders BookCard components for search results.




# Running the React Project Locally

# Prerequisites
Node.js and npm should be installed on your local machine. You can download Node.js from https://nodejs.org.

# Steps to Run the Project

**Clone the Repository:**

Open a terminal or command prompt on your local machine.

Run the following command to clone the GitHub repository:


git clone https://github.com/Anuragk7/Library


# Navigate to the Project Directory:

Change into the project directory using the cd command:
cd Library

# Install Dependencies:

Inside the project directory, run the following command to install project dependencies:

npm install
This command will install all the required npm packages specified in the package.json file.

# Start the Development Server:

After installing dependencies, start the development server by running:
npm start
This command will start the React development server and open your default web browser to http://localhost:3000.

#View the Application:

Once the development server is running, you can view the application in your web browser at http://localhost:3000.
Any changes you make to the source code will automatically reload the application in the browser.

# Additional Notes
If you encounter any errors during the installation or running of the project, check the terminal/console output for error messages. Common issues may include missing dependencies or conflicts in the project setup.
Make sure to have a stable internet connection during the initial setup and dependency installation process, as npm will download required packages from the npm registry.
If the project requires additional configuration or setup steps (e.g., environment variables, database connections), refer to the project's README or documentation for specific instructions.
By following these steps, users should be able to successfully clone, install dependencies, and run your React project on their local machine for development or testing purposes.
