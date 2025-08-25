🌸 Chaitali Parlour - Modern React Web Application

## Project Overview

This project is a comprehensive, responsive, and dynamic web application developed for "Chaitali Parlour," a ladies' beauty salon. The core objective was to establish a strong online presence, simplify client interactions, and beautifully showcase the parlour's range of services. It provides a seamless user experience from browsing services to booking appointments, all within a modern, aesthetically pleasing interface.

## ✨ Key Features

*   **Stunning & Responsive UI:** A clean, modern design built with Material-UI, enhanced with gradient backgrounds and glassmorphism effects for a visually stunning experience across all devices.
*   **Detailed Service & Offer Listings:** Dedicated sections for clients to explore all available beauty services and attractive promotional offers with dynamic layouts.
*   **Streamlined Online Appointment Booking:** An easy-to-use and visually appealing booking form for scheduling appointments, enhancing operational efficiency.
*   **Dynamic Gallery & Testimonials:** Engaging visual galleries showcasing transformations and client testimonials to build trust and highlight service quality.
*   **Informative Blog Section:** A curated blog offering beauty tips, industry trends, and parlour news to engage visitors and boost SEO.
*   **SEO Optimization:** Implemented using `react-helmet-async` for effective management of meta tags and structured data, crucial for search engine visibility.
*   **Interactive User Experience:** Smooth, modern animations powered by `framer-motion` and subtle `react-three-fiber` 3D accents create an engaging and contemporary feel.
*   **Direct Client Communication:** Integration of a floating WhatsApp button for instant and convenient client outreach.
*   **Robust Client-Side Routing:** Seamless single-page application navigation handled by `react-router-dom`.
*   **Image Fallbacks:** Graceful handling of missing images with placeholder fallbacks to ensure a polished look.

## 🚀 Technologies Used

*   **Frontend Framework:** React.js
*   **UI Library:** Material-UI (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`)
*   **Build Tool:** Vite
*   **Routing:** React Router DOM
*   **Animations:** Framer Motion
*   **3D Graphics:** React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
*   **Date Pickers:** Material-UI X Date Pickers (`@mui/x-date-pickers`) with `date-fns` adapter
*   **SEO Management:** React Helmet Async
*   **Carousel Component:** React Material-UI Carousel

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (comes with Node.js) or Yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/chaitali-parlour.git
    cd chaitali-parlour
    ```
    *(Replace the URL with your actual repository URL)*

2.  **Install dependencies:**
    Due to potential peer dependency conflicts with newer React versions, it's recommended to use the `--legacy-peer-deps` flag:
    ```sh
    npm install --legacy-peer-deps
    ```
    or with Yarn:
    ```sh
    yarn install
    ```

3.  **Static Assets:**
    Ensure your static assets in the `public/` directory are referenced correctly in `index.html` using root-relative paths (e.g., `/favicon.ico`).

### Running the Project

To start the development server:

```sh
npm run dev
```

The application will be accessible at http://localhost:5173.

## 🚀 Deployment

### Netlify

This project includes a `public/_redirects` file configured for deployment on Netlify. This ensures that client-side routing with React Router works correctly. The rule `/* /index.html 200` redirects all traffic to `index.html`, allowing React Router to handle the routing on the client-side.

To deploy on Netlify:

1.  Push your code to a GitHub repository.
2.  Connect your repository to Netlify.
3.  Set the build command to `npm run build` (or `yarn build`).
4.  Set the publish directory to `dist`.

Netlify will automatically detect and apply the redirect rule.

## 🎨 Customization & Data Management

This project uses local JavaScript files in the `src/data/` directory to manage content. You can easily update the parlour's information by editing these files.

*   **Services:** `src/data/services.js`
*   **Offers:** `src/data/offers.js`
*   **Testimonials:** `src/data/testimonials.js`
*   **Blog Posts:** `src/data/blog.js`

## 📂 Project Structure

```
chaitali-parlour/
├── public/                  # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/              # Images, fonts, etc.
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Common components (Header, Footer, Fallbacks, etc.)
│   │   ├── gallery/
│   │   ├── hero/
│   │   ├── services/
│   │   └── testimonials/
│   ├── context/             # React Context for global state
│   ├── data/                # Local data for services, offers, etc.
│   ├── pages/               # Top-level page components
│   ├── theme/               # Material-UI theme configuration
│   ├── App.jsx              # Main application component with routing
│   └── main.jsx             # Entry point for React application
├── .gitignore               # Files to be ignored by Git
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite build tool configuration
└── index.html               # Main HTML file
```

## 📄 License

This project is open-sourced under the MIT License.

## 🧑‍💻 Author

YourName/Alias

*   Initial Work - [YourGitHubProfile/LinkedInProfile](https://github.com/your-username)

Feel free to connect or provide feedback!
