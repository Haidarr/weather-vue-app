# Simple Weather App

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Install Dependencies
Ensure you have **pnpm** installed. If not, install it globally:

```sh
npm install -g pnpm
```

Then, install the project dependencies:

```sh
pnpm install
```

### 2. Copy Environment Variables
Create a `.env` file by copying from `.example.env`:

```sh
cp .example.env .env
```

Modify the `.env` file with the necessary configuration.

### 3. Run the Application
To start the development server:

```sh
pnpm dev
```

For production build:

```sh
pnpm build
pnpm start
```

---

### Notes
- Ensure all required environment variables are correctly set up in the `.env` file.
- Ensure you are using Node version 18 or above.
- Check the project documentation for additional configuration options.

