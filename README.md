
# Login Page Assignment

This project is a login page assignment built using **React** and **TypeScript**, with **Tailwind CSS** for responsive styling. The page includes fields for email and password, a language selection dropdown, and custom styles and validation as specified.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [File Structure](#file-structure)

## Project Structure

This project follows a modular structure to make components reusable and manageable. The primary components include:

- **Header**: Displays the company logo.
- **LoginForm**: Contains the login form fields and validation.
- **Footer**: Displays footer information at the bottom of the page.

## Features

- **Email Validation**: The email field only accepts valid corporate emails from domains like `@noventiq.com`, excluding public domains (e.g., Gmail, Outlook).
- **Password Masking**: Passwords are masked with an option to toggle visibility.
- **Language Selection**: The language dropdown defaults to the browser language and supports switching between English, Hindi, and other selected Indian languages.
- **Responsive Design**: The page is designed to be responsive and mobile-first using Tailwind CSS.
- **Testing**: Unit tests are written for components using Jest and React Testing Library.

## Installation

To run this project locally, you’ll need to have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm start
   ```
   
2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the login page.

3. **Build for production**:
   ```bash
   npm run build
   ```

## Testing

This project uses Jest and React Testing Library for unit testing.

- **Run all tests**:
  ```bash
  npm run test
  ```

### Test Coverage

- **Header Component**: Tests that the logo renders correctly.
- **Footer Component**: Tests that the footer text renders correctly.
- **Input Component**: Tests that input component works for all use cases.
- **LoginForm Component**: Tests the email and password fields, language dropdown, and button.
- **Footer Component**: Tests that the footer renders with the correct text.

## File Structure

Below is a simplified version of the file structure:

```
src
│
├── assets
│└── icon
│  └── EmailIcon.tsx             # Email Icon component used inside email component
│  └── EyeIcon.tsx               # Email Icon component used inside email component
│  └── EyeSlashIcon.tsx          # Email Icon component used inside email component       
│  └── LockIcon.tsx              # Email Icon component used inside email component       
│└── logo
│  └── logo.svg                        # Logo for the Header component
│
├── components
│   ├── Footer
│   │   └── footer.tsx                 # Footer component
│   │   └── footer.test.sx             # Footer Test component
│   └── Header
│   │   └── header.tsx                 # Header component
│   │   └── header.test.tsx            # Header Test component
│   └── Input
│       └── input.tsx                  # Reusable Input component
│       └── input.test.tsx             # Input Test component
│
├── pages
│   └── Login
│       ├── components
│       │   └── LoginForm.tsx          # Login form component
│       └── LoginPage.tsx              # Main login page component
│
├── utils
│   └── commonFunction.ts              #Used to write all genric function
|   └── language.tsx                   #Store constant json releated to language
|   └── languageCodes.ts               #store Language Codes of each supported language
|   └── regex.ts                       #all regex used in project
│
├── App.tsx                            # Main app component
└── index.tsx                          # Entry point
```


---

This `README` provides an overview of the project, instructions for setup and usage, testing details, and an outline of the file structure.