# NIBM Computing Society Website

Welcome to the NIBM Computing Society website repository. This website is built using Next.js as the frontend framework and Sanity as the content management system (CMS).

## About NIBM Computing Society

[NIBM Computing Society](https://nibmcs.org) is a student community organization for the National Institute of Business Management (NIBM) in Sri Lanka. Our mission is to enable students to learn, share, and build their careers in the field of computing and technology.

## Features

- Responsive and modern web design
- Dynamic content management using Sanity CMS
- Upcoming events and news updates
- Membership and contact information
- Community leaderboard

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for building fast and scalable applications.
- [Sanity](https://www.sanity.io/) - A headless CMS that provides a powerful and flexible content backend.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone this repository to your local machine:**

   ```bash
   git clone https://github.com/nibmcs/nibmcs.org.git
   cd nibmcs.org
   ```

2. **Install the dependencies:**

   Before running the application, you need to install the project's dependencies. This can be done using Node.js. If you haven't already installed Node.js, you can download it from the [official website](https://nodejs.org/).

   ```bash
   npm install
   ```

3. **Configure Sanity:**

   To manage content for the NIBM Computing Society website, you'll need to set up your own Sanity account and project.

   Create an account & make a new project. Get project ID and run this:

   ```bash
   npm create sanity@latest -- --project zn7egx85 --dataset production --provider google
   ```

   If you have questions or need assistance with Sanity, please refer to the official [Sanity documentation](https://www.sanity.io/docs) or contact Sanity support for guidance.

4. **Local Development**:

   You can choose one of the following methods for local development:

   **Using Docker**:

   If you prefer to use Docker for local development, follow these steps:

   ```bash
   # Build the Docker image
   docker build -t nibmcs-website .

   # Run the Docker container
   docker run -p 3000:3000 nibmcs-website
   ```

   This will build a Docker image for the website and run it on port 3000. After running the container, you can access the website by opening your web browser and visiting http://localhost:3000.

   **Local Development (Without Docker)**:

   If you prefer not to use Docker, you can run the application using Node.js. Make sure you have Node.js installed on your machine. Just run:

   ```bash
   # Start the development server
   npm run dev
   ```

   This will start the application without Docker, and you can access it by opening your web browser and visiting http://localhost:3000.

## Contributing

We welcome contributions from the community to improve the NIBM Computing Society website. If you'd like to contribute, please follow these guidelines:

1. Fork this repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/issue-number`.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork: `git push origin feature/your-feature-name`.
5. Open a pull request to the `main` branch of this repository.

We will review your pull request and collaborate with you to merge it into the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, suggestions, or need assistance, please feel free to contact us:

- Email: [info@nibmcs.org](mailto:info@nibmcs.org)
- Twitter: [@nibmcs](https://twitter.com/nibmcs)
- LinkedIn: [NIBM Computing Society](https://www.linkedin.com/company/nibmcs/)

We look forward to hearing from you and appreciate your contributions!
