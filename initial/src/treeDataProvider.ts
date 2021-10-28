import { Event, ProviderResult, TreeDataProvider, TreeItem } from "vscode";
import { Speaker } from "./types/speaker";
import { Topic } from "./types/topic";

export class TopicsDataProvider implements TreeDataProvider<Speaker | Topic> {
    getTreeItem(element: Speaker | Topic): TreeItem | Thenable<TreeItem> {
        throw new Error("Method not implemented.");
    }
    getChildren(element?: Speaker | Topic): ProviderResult<(Speaker | Topic)[]> {
        throw new Error("Method not implemented.");
    }

}
