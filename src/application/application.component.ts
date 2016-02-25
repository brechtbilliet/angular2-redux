import {Component} from "angular2/core";
import {TweetPage} from "../tweets/components/tweetPage.component";
@Component({
    selector: "application",
    providers: [],
    directives: [TweetPage],
    template: `
        <tweet-page></tweet-page>
    `
})
export class TweetApp {
    public sidebarCollapsed: boolean = false;

    constructor() {

    }
}