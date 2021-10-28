import * as vscode from 'vscode';
import { TopicsDataProvider } from './treeDataProvider';
import { Speaker } from './types/speaker';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.window.registerTreeDataProvider("treeViewDemo", new TopicsDataProvider()),
        vscode.commands.registerCommand("treeViewDemo.showProfile", (node: Speaker) => {
            vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(node.github));
        }),
    );
}

// this method is called when your extension is deactivated
export function deactivate() {}
