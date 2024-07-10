# Budget Tracker Frontend

This project is the frontend portion of a Budget Tracker application, built using React. The application allows users to view, add, edit, and delete budget items. It utilizes React Router for client-side routing and fetches data from a backend API.

## Features

- **View Budget Items**: List all budget items on the homepage.
- **Add Budget Item**: Add a new budget item using a form.
- **Edit Budget Item**: Edit an existing budget item.
- **Delete Budget Item**: Delete a budget item.
- **Responsive Design**: Ensures good user experience on both desktop and mobile devices.

## Project Structure

src/
│
├── components/
│ ├── NavBar.jsx
│ ├── NavBar.css

│
├── pages/
│ ├── Home.jsx
│ ├── Home.css
│ ├── Show.jsx
│ ├── Show.css
│ ├── Edit.jsx
│ ├── Edit.css
│ ├── InputForm.jsx
│ ├── InputForm.css

│
├── App.jsx
├── index.jsx
├── App.css
├── main.jsx

└── index.html


## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/budget-tracker-frontend.git
    cd budget-tracker-frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Environment Variables**:

    Create a `.env` file in the root directory and add your backend API URL:

    ```env
    VITE_BASE_URL=http://your-backend-api-url
    ```

4. **Run the application**:

    ```bash
    npm run dev
    ```

## Usage

1. **Home Page**:

    The home page displays a list of budget items. Each item links to a detailed view of the item.

2. **Show Page**:

    The show page displays detailed information about a single budget item. You can also delete the item or navigate to the edit page.

3. **Edit Page**:

    The edit page allows you to modify the details of an existing budget item and save the changes.

4. **Add New Item**:

    You can add a new budget item by navigating to the input form page.

## Components

- **NavBar**: Navigation bar for navigating between pages.
- **Home**: Lists all budget items.
- **Show**: Displays details of a single budget item.
- **Edit**: Allows editing of a budget item.
- **InputForm**: Form for adding a new budget item.

## Dependencies

- React
- React Router DOM
- CSS for styling

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


