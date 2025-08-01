# 👋 To the Clever Team

Hello!

Thank you for the opportunity to interview with Clever. So far, the process has been great. I’m excited to continue getting to know the team especially the guy in the green costume from Glassdoor 👽.

## 📱 App Preview

[Live Demo](https://cleverphotos.netlify.app/)
Note: Due to a peculiarity of Netlify, directly accessing /all-photos (e.g., via brute-forcing the URL) will return a 404 error. However, it works as expected in the local development environment.

## 🚀 How to Run the App Locally

1. Clone the repository
2. Create a `.env` file in the root of the project using `.env.example` as a reference
3. Install the dependencies and start the development server:

```bash
npm install
```

```bash
npm run dev
```

## 🧪 How to run tests

```bash
npm run test
```

## 📊 How to check test coverage

```bash
npm run coverage
```

## 🕹️ How to run e2e tests

1. Make sure you your computer meets the [requirements](https://docs.cypress.io/app/get-started/install-cypress#System-requirements) to run Cypress.

2. If you're using linux, you need to install the following [dependencies](https://docs.cypress.io/app/get-started/install-cypress#Linux-Prerequisites)

3. Start the cypress app with the following command

```bash
npm run e2e
```

4. Click E2E testing

5. Pick Electron

6. Run individually user flows by clicking on each test file

## 🛠️ What I Would Do to Make This a Production-Ready App

- Integrate a database to persist user data and credentials
- Implement authentication using JWT or another secure method
- Store JWT tokens in **httpOnly** cookies for enhanced security
- Add logout functionality
- Add pagination with **infinite scroll** to the photo feed
- Implement email workflows for account confirmation and password recovery
- Improve error handling and display user-friendly messages
- Add a **profile/settings page** for users to manage their account
- Create a **"Liked Photos"** page for users to view their favorites
- I would use a library like **React Query** to handle the data fetching and caching
- Would add a search and sort functionality to the photo gallery with a debounce to avoid unnecessary re-renders and api calls.

## 📝 Notes

- I could't find a good use case for useMemo in this project for the lack of expensive operations, so i'm not using it. (but i do understand the importance of it and i'm aware of the performance benefits)

- For this project, the app only saves one user in the local storage, so if you forget your credentials, just click the "Forgot password" link and you'll be able to sign in again saving new credentials.

- Breakpoints are set to 1200px for the desktop version, cause it provided the best experience for the user in different screen sizes.

## 🧠 My Approach

1. On login, if user is not found in local storage, save it, in scenarios where user is saved but credentials are not correct, block the login and show an error message.
2. Authentication is done by comparing the credentials sent by the user with the ones saved in local storage.
3. useAuth hook is used to abstract the authentication logic from the components.
4. Context is used to store if the user is authenticated or not, and if the user is authenticated, the app will redirect to the home page.
5. Authentication required routes are protected by a private template that redirects to the login page if the user is not authenticated, making it easy to implement more routes in the future.

### 🛠️ Tech Stack

- **React**, **TypeScript**, and **Vite** for building a fast and modern frontend
- **React Router** for client-side navigation
- **React Context** for managing authentication state
- **React Hook Form** for performant form handling
- **Axios** for API requests
- **Styled Components** for scoped and maintainable styles
- **Local Storage** for storing user credentials
- **Vitest**/**React Testing Library** for unit and integrationtesting
- **Cypress** for end-to-end testing

### ✨ Key Features

- Sign-in page with password reset functionality
- Fully accessible and keyboard-friendly UI
- Reusable components for consistency and scalability
- Lazy-loaded images for performance optimization
- Memoized image gallery to avoid unnecessary re-renders
- Template for protected routes
- Responsive design for all screen sizes
- Pixel-perfect layout based on the provided mockups
- Relevant ports of the app are covered by tests (80%)
- End-to-end tests are implemented to ensure the main user flows work as expected

Let me know if you'd like me to walk through any part of the codebase or decisions in more detail!

Best regards,  
**Isaac Melo**
