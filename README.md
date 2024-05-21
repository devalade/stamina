## Stamina: A Streamlined AdonisJS Starter Kit

Stamina provides a robust and efficient foundation for building modern web applications using AdonisJS, Inertia.js, Tailwind CSS, and Resend. This starter kit streamlines development by offering pre-configured components and functionalities to jumpstart your project.

**Key Features:**

- **AdonisJS Framework:** - Leverage the power and flexibility of AdonisJS for building scalable and maintainable web applications.
- **Inertia.js Integration:** - Enjoy seamless server-side rendering and state management with Inertia.js, providing a reactive and intuitive user experience.
- **Tailwind CSS Styling:** - Craft beautiful and responsive UIs effortlessly using Tailwind's utility-first approach.
- **ShadCN UI:** - A collection of TailwindCSS components
- **Resend Integration:** - A transactional email service
- **Authentication (Optional):** - Easily integrate AdonisJS's built-in authentication features or explore third-party solutions for more complex needs.
- **Testing Support:** - Ensure code quality and maintainability with pre-configured testing tools.

**Getting Started:**

1. **Prerequisites:** Node.js (version 14 or later) and npm (or yarn) are required.
2. **Clone the Repository:**
   ```bash
   git clone https://github.com/devalade/stamina.git
    ```
3. **Install Dependencies:**
  ```bash
  cd stamina
  npm install
  ```

4. **Database Setup:**
- Configure your database connection details in `.env` (refer to AdonisJS documentation for specific instructions).
- Run migration: 
  ```bash
  node ace migration:run 
  ```
5. **Start the developpement server:**
  ```bash
  node ace serve
  ```

6. **Access the Application:**
- Open http://localhost:3333 (or your configured port) in your browser.

## Additional Notes:

- For more advanced usage and customization, refer to the official documentation for AdonisJS, Inertia.js, Tailwind CSS, and Resend.
- Feel free to contribute to this starter kit by creating pull requests!


## Contributing:
1. Fork the repository.
2. Create a new branch for your changes.
3. Implement your modifications and ensure proper testing.
4. Submit a pull request for review.

## License:
This project is open-source and available under the [MIT License](https://github.com/devalade/stamina/LICENSE).
