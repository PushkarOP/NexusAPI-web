# Nexus API Flask Application

This repository contains a Flask application that interacts with an external API. The application has two routes: `/` and `/guide`. The `/` route supports both GET and POST methods.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.6+
- Flask
- Requests

### Installation

1. Clone the repository
    ```
    git clone https://github.com/yourusername/nexus-api-flask.git
    ```
2. Navigate into the cloned repository
    ```
    cd nexus-api-flask
    ```
3. Install the required Python packages
    ```
    pip install -r requirements.txt
    ```
4. Run the Flask application
    ```
    python main.py
    ```

## Usage

The `home.html` template contains a form where users can input their API key, a question, select a model, and depending on the model, input a product or select whether they have internet or not. When the form is submitted, the data is sent to the Flask application.

The `script.js` file contains JavaScript code that handles form submission, saving and loading form data from localStorage, showing and hiding form fields based on the selected model, updating the product value, and copying the output to the clipboard.

## File Structure

- `main.py`: This is the main Flask application file. It defines the routes and handles the form submission and API interaction.
- `home.html`: This is the HTML template for the home page. It includes a form for the user to input their data and a section to display the output.
- `script.js`: This is the JavaScript file that handles form interactions on the client side.
- `style.css`: Webpage design

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
