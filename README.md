# CPH Leetcode Extension for VS Code

[![Version](https://vsmarketplacebadge.apphb.com/version/undefined_publisher.cph-lc.svg)](https://marketplace.visualstudio.com/items?itemName=undefined_publisher.cph-lc)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/undefined_publisher.cph-lc.svg)](https://marketplace.visualstudio.com/items?itemName=undefined_publisher.cph-lc)
[![Rating](https://vsmarketplacebadge.apphb.com/rating-star/undefined_publisher.cph-lc.svg)](https://marketplace.visualstudio.com/items?itemName=undefined_publisher.cph-lc)

**CPH Leetcode** is a Visual Studio Code extension designed to streamline competitive programming workflows by integrating Leetcode functionalities directly into the editor. Solve problems, fetch test cases, and run solutions—all without leaving VS Code!

---

## Features

- Works with LeetCode
- Fetch sample test cases for problems and store them locally.  
- Run solutions against fetched test cases directly in VS Code with real-time results.  
- Access features through the **CPH Leetcode** UI in the VS Code activity bar.
- Shows discrepancies if actual output does not match expected output.

---

## Screenshots

### Custom UI in Activity Bar
![Custom UI](https://github.com/akash-singh112/cph-leetcode/blob/main/images/UI.png)

---

## Installation

1. Open Visual Studio Code.
2. Go to the **Extensions** view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for `CPH Leetcode`.
4. Click **Install** to install the extension.

Alternatively, you can install directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=undefined_publisher.cph-lc).

---

## How to Use

1. After installation, navigate to the **CPH Leetcode** view in the activity bar.
2. Use the following commands from the Command Palette:
   - **CPH: Fetch Test Cases**: Fetch sample test cases for a problem.
   - **CPH: Run Test Cases**: Execute your code against the fetched test cases.

Alternatively, you can interact with the UI in the activity bar and perform the same actions.

---

## Supported Languages

1. C++
2. Python

---

## Project Structure

- **icons/**: Contains the logo and icons for the extension.
- **helper-functions/**: Includes utility functions for test case fetching, test case execution, and to fetch HTML for the UI of Extension.
- **extension.js**: Main Logic for the extension goes here.
- **final.py**: Python script to fetch sample test cases from desired URL.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

Made with ❤️ by Akash. If you find this extension helpful, please give it a ⭐ on [GitHub](https://github.com/akash-singh112).

Also, if you encounter any issues, feel free to open an [issue](https://github.com/akash-singh112/issues) on GitHub. Feedback and suggestions are welcome!
