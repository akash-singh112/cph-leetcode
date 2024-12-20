const vscode = require('vscode');
const {runPythonScript} = require('./index.js');
const fs = require('fs');
const path = require('path');
const {getName} = require('./helper-functions/fetchName.js');
const {runCodeCpp,runCodePython} = require('./codeExec.js');
/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

	console.log('Congratulations, your extension "cph-lc" is now active!');

	const formatName = (str) => {
		return str.toLowerCase().replace(/\s+/g, '-');
	};

	function getLanguage(filePath) {
		const extension = path.extname(filePath).toLowerCase();
		
		if (extension === '.cpp') {
			return 'cpp';
		} else if (extension === '.py') {
			return 'python';
		} else if (extension === '.js') {
			return 'javascript';
		} else {
			return 'unknown';
		}
	}

	const getCases = vscode.commands.registerCommand('cph-lc.FetchTestCases', async function () {
		
		const url = await vscode.window.showInputBox({
			prompt: 'Enter the problem URL',
    		placeHolder: 'https://example.com/problem/123'
		});

		const [inputArray,outputArray] = await runPythonScript(url);

		const problemName = formatName(getName(url));

		const testDataDir = path.join(__dirname, 'TestData');

		// Check if 'TestData' directory exists, create if it doesn't
		if (!fs.existsSync(testDataDir)) {
			fs.mkdirSync(testDataDir);
			console.log("'TestData' directory created.");
		}

		// Define the path for the problem-specific folder inside 'TestData'
		const problemDir = path.join(testDataDir, problemName);

		// Check if the problem folder exists, create if it doesn't
		if (!fs.existsSync(problemDir)) {
			fs.mkdirSync(problemDir);
			console.log(`Folder for problem "${problemName}" created.`);
		}

		let ct = 1;
		for(let ele of inputArray){
			// Define the file path where the content will be written
			const filePath = path.join(problemDir, `ip${ct++}.txt`);

			// Write text content to the file
			fs.writeFileSync(filePath, ele);
		}

		ct = 1;
		for(let ele of outputArray){
			// Define the file path where the content will be written
			const filePath = path.join(problemDir, `op${ct++}.txt`);

			// Write text content to the file
			fs.writeFileSync(filePath, ele);
		}

		vscode.window.showInformationMessage('Sample input and output are now present in TestData folder.')

	});

	const runCases = vscode.commands.registerCommand('cph-lc.RunTestCases',async function (){
		const editor = vscode.window.activeTextEditor;
			
		if (!editor) {
			vscode.window.showErrorMessage('No active editor found! Open your solution file.');
			return;
		}
			
		const userCode = editor.document.getText(); // Fetch code from the open editor
			
		if (!userCode || userCode.trim() === '') {
			vscode.window.showErrorMessage('Solution code is empty!');
			return;
		}

		// Path to the problem-specific folder
		let problemName = await vscode.window.showInputBox({
			prompt: "Enter the problem name"
		});
			  
		if (!problemName) {
			vscode.window.showErrorMessage('Problem name is required!');
			return;
		}
		
		problemName = formatName(problemName);
			  
		const problemFolderPath = path.join(__dirname, 'TestData', problemName);
		
		if (!fs.existsSync(problemFolderPath)) {
			vscode.window.showErrorMessage(`Test cases for "${problemName}" not found!`);
			return;
		}
		else{
			console.log("Found!");
		}

		let filePath = editor.document.uri.fsPath;
		const lang = getLanguage(filePath);

		if(lang == 'cpp'){
			const userSolutionFile = path.join(problemFolderPath, 'temp_solution.cpp');
			const executableFile = path.join(problemFolderPath, 'solution_exec.exe');
		
			fs.writeFileSync(userSolutionFile, userCode, 'utf8');

			await runCodeCpp(userSolutionFile,executableFile,problemFolderPath);
		}
		else{
			await runCodePython(filePath,problemFolderPath);
		}

	})

	context.subscriptions.push(getCases,runCases);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {activate,deactivate}
