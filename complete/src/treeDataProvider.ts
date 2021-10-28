import { Event, ProviderResult, ThemeIcon, TreeDataProvider, TreeItem, TreeItemCollapsibleState, Uri } from "vscode";
import { Speaker } from "./types/speaker";
import { Topic } from "./types/topic";

export class TopicsDataProvider implements TreeDataProvider<Speaker | Topic> {
    getTreeItem(element: Speaker | Topic): TreeItem | Thenable<TreeItem> {
        if (element instanceof Speaker) {
            const item = new TreeItem(element.name, TreeItemCollapsibleState.Collapsed);
            // item.command = {
            //     title: "Open profile",
            //     command: "treeViewDemo.showProfile",
            //     arguments: [element],
            // };
            item.contextValue = "speaker";
            item.iconPath = new ThemeIcon("account");
            return item;
        } else if (element instanceof Topic) {
            const item = new TreeItem(element.topic);
            item.iconPath = new ThemeIcon("book");
            return item;
        }

        throw new Error("Invalid element data");
    }
    getChildren(element?: Speaker): ProviderResult<(Speaker | Topic)[]> {
        if (!element) {
            const speakers: any[] = require("../resources/speakers.json");
            return speakers.map((s) => {
                return new Speaker(s.id, s.name, s.github);
            });
        }

        const topics: any[] = require("../resources/topics.json");
        const speakerId: string = element.id;
        return topics.filter((t) => {
            return t.speakerId === speakerId;
        }).map((t) => {
            return new Topic(t.id, t.topic);
        });
    }
}
