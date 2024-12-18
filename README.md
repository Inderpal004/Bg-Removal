# Bg Removal

A React.js-based web application that allows users to upload an image, remove its background, and download the processed image. The project leverages Clerk for authentication and provides a smooth user experience for managing uploads, processing, and downloads.

---

## Features

1. **Authentication**:
   - Users must be signed in to access the functionality of the app.
   - Utilizes Clerk for seamless user authentication.

2. **Upload and Process Images**:
   - Users can upload an image from their device.
   - The app processes the image to remove its background using the ClipDrop API.

3. **Image Result Display**:
   - Displays the original uploaded image alongside the processed (background-removed) image.
   - Shows a loading spinner while processing the image.

4. **Direct Image Download**:
   - Allows users to download the processed image directly without redirecting to the file URL.

---

## Tech Stack

- **Frontend**: React.js with TailwindCSS for styling
- **Authentication**: Clerk
- **API**: ClipDrop Remove Background API
- **Routing**: React Router

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the project root.
   - Add the following variables:
     ```env
     VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-frontend-api>
     VITE_CLIPDROP_KEY=<your-clipdrop-api-key>
     ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Access the application at:
   ```
http://localhost:5173
   ```

---

## File Structure

```
.
├── src
│   ├── assets
│   ├── components
│   │   ├── Home.jsx
│   │   ├── Result.jsx
│   ├── context
│   │   ├── Context.jsx
│   ├── styles
│   ├── App.js
│   ├── index.js
├── public
├── .env
├── package.json
└── README.md
```

---

## Usage

1. **Sign In**:
   - Users must sign in or create an account to access the image upload functionality.

2. **Upload an Image**:
   - On the home page, click the "Upload your image" button and select an image from your device.

3. **View Results**:
   - After uploading, you will be redirected to the `/result` page.
   - The original image will be displayed on the left, and the processed image will appear on the right after loading.

4. **Download the Processed Image**:
   - Click the "Download Image" button to save the processed image directly to your device.

---

## API Reference

### ClipDrop API

- **Endpoint**: `https://clipdrop-api.co/remove-background/v1`
- **Method**: POST
- **Headers**:
  - `x-api-key`: Your ClipDrop API key
- **Body**:
  - FormData with the uploaded image file

---

## Known Issues

- Ensure proper API keys are set in the `.env` file for both Clerk and ClipDrop.
- Large image files may take longer to process.

---

## License

This project is licensed under the MIT License.