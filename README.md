# User Directory App

A small React app that fetches and displays a list of users from the JSONPlaceholder API.

## Features

- Fetches users with `axios`
- Uses `useEffect` to load data when the component mounts
- Uses `useState` to store users, loading state, and error state
- Displays users in responsive React Bootstrap cards
- Includes a clean, modern UI with custom styling

## Tech Stack

- React
- Vite
- Axios
- React Bootstrap
- Bootstrap

## API Used

- `https://jsonplaceholder.typicode.com/users`

## Project Structure

```text
src/
  App.jsx
  App.css
  UserList.jsx
  index.css
  main.jsx
```

## Getting Started

1. Install dependencies:

	```bash
	npm install
	```

2. Start the development server:

	```bash
	npm run dev
	```

3. Build for production:

	```bash
	npm run build
	```

## How It Works

- `App.jsx` renders the page header and the `UserList` component.
- `UserList.jsx` fetches API data and maps each user into a Bootstrap card.
- `main.jsx` loads Bootstrap CSS globally.
- `App.css` and `index.css` handle the custom look and layout.

## Notes

- The app uses mock data from JSONPlaceholder, so no authentication is required.
- If the API request fails, the app shows a simple error message.
