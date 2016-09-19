var vscode = require('vscode');

function activate(context) {
  var disposable = vscode.commands.registerCommand('extension.devDocs', function () {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
      return; // No open text editor
    }

    var selection = editor.selection;
    var text = editor.document.getText(selection);
    var url = "http://devdocs.io/#q=" + text.replace(' ', '%20')
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
  });

  context.subscriptions.push(disposable);
}

exports.activate = activate;
