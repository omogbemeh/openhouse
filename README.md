# OpenHouse.AI Front End Web Development Coding Exercise

This project is a web application built using React that retrieves and displays data from two RESTful endpoints. The application focuses on presenting a collection of geographic communities in alphabetical order, showcasing each community's name, an image, and the average price of all the associated homes.

## Getting Started

Please make sure youre using a current version of npm, then follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/omogbemeh/openhouse-ai-coding-exercise.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd openhouse
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the application:**

   ```bash
   npm run dev
   ```

   This will start the development server, and you can view the application at [http://localhost:5174](http://localhost:5174).

## Application Structure

The project is organized into components, services, and other relevant folders to maintain a clear and scalable structure.

- `src/components`: Contains React components responsible for rendering UI elements.
- `src/services`: Includes service functions to fetch data from the provided RESTful endpoints.
- `src/pages`: Includes the UI pages that are displayed on the browers. These pages make use of multiple components from the components folder
- `src/types`: Type definitions for the different community and home data

## How to Use

1. Upon launching the application, you will see a list of geographic communities displayed in alphabetical order.
2. Each community entry includes the community name, an image, and the average price of homes associated with that community.

## Additional Documentation

If given more time, the following improvements and considerations could be implemented:

- **Deploying**: I [deployed the application](https://main.d13ugdw3fieexl.amplifyapp.com/communities/) on AWS Amplify, but I could not get API requests to work because of CORS. I fixed this locally, but could not replicate it on the cloud. If I had more time, I would have spun up a proxy express server.
- **Error Handling**: I was able to check for invalid Image URL's, but I could not modify the UI to properly display the card, where the link was broken.
- **Robust Filtering For Communities**: I was able to create a Robust sort and filtering feature for the HomesPage, but I could not do the same for the Communities, I was however able to sort them alphabetically.
- **Unit Testing**: Develop unit tests to ensure the reliability of components and services.

## Evaluation Considerations

- **Robust Filtering For Homes**: I was able to create a Robust sort and filtering feature for the HomesPage.
- **Usability**: Information is presented in a clear and understandable manner.
- **Design**: The application considers user tasks, looks professional, and is polished.
- **Mobile-Friendly**: The design is responsive and considers mobile devices.
- **Error Handling**: Invalid url paths, Network errors and invalid data are appropriately handled.
- **Code Structure**: Code, components, and folders are organized thoughtfully.

Feel free to reach out with any questions or feedback!
