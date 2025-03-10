# Blurry Loading Effect

This repository contains an implementation of a **Blurry Loading Effect** using React and Vite. The effect gradually clears a blurry background as a loading percentage increases, creating a smooth and visually appealing transition.

## Demo
You can view the live demo of the blurry loading effect [here](https://krit-sh.github.io/blurry-loading/).

## Features
- Smooth transition from blurry to clear image
- Loading text that updates dynamically
- Simple and lightweight implementation

## Technologies Used
- **React**: Component-based UI development
- **Vite**: Fast build tool for modern frontend projects
- **CSS**: Styling and animations

## How It Works
1. A background image is initially blurred using CSS.
2. A loading percentage starts from 0% and gradually increases.
3. As the percentage increases, the blur effect reduces dynamically.
4. Once the loading reaches 100%, the image becomes clear.

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/krit-sh/blurry-loading.git
   ```
2. Navigate to the project directory:
   ```sh
   cd blurry-loading
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open the provided local URL in your browser.

## File Structure
```
blurry-loading/
│── public/          # Static assets
│── src/
│   │── components/  # React components
│   │── App.jsx      # Main component
│   │── main.jsx     # Entry point
│   │── styles.css   # CSS styles
│── index.html       # Main HTML file
│── vite.config.js   # Vite configuration
│── package.json     # Project dependencies
│── README.md        # Project documentation
```

## Customization
You can modify the following:
- **Background Image**: Replace the existing image in `styles.css`.
- **Loading Speed**: Adjust the timing logic in `App.jsx`.
- **Styling**: Customize the font, colors, and layout in `styles.css`.
