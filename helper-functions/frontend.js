const vscode = require('vscode');
const path = require('path');

function getHTML(webview){
    const styleUri = webview.asWebviewUri(vscode.Uri.file(path.join(__dirname, 'app.css')));
    const scriptUri = webview.asWebviewUri(vscode.Uri.file(path.join(__dirname, 'script.js')));
    
    return(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML with Linked CSS and JS</title>
        <link rel="stylesheet" href="${styleUri}">
        </head>
        <body>
            <p id="p1">Paste problem URL to get test cases</p>
            <form id="fetchForm">
                <input id='urlInput' type="text" placeholder="https://www.leetcode.com/problems/problem_name">
                <br>
                <button type="submit" id="getButton">Fetch test cases</button>
            </form>
            <p id="fetchResult"></p>
            <br><br>
            <div class="run">
                <p>If you have fetched sample test cases then you can run your code on them locally</p>
                <p>Click below button to automatically execute your code against them</p>
                <form id="runForm">
                    <input id='nameInput' type="text" placeholder="Problem Name">
                    <br>
                    <button type="submit" id="runCode">Test</button>
                </form>
                <p id="runResult"></p>
            </div>
            <script src="${scriptUri}"></script>
        </body>
        </html>`
    )
}

module.exports = {getHTML}