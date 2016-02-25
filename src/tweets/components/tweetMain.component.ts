import {Component, Inject, Input, ChangeDetectionStrategy} from "angular2/core";
import {TweetTopbar} from "./tweetTopbar.component";
import {TweetContent} from "./tweetContent.component";
import {IStore} from "redux/redux";
import {IApplicationState} from "../../application/appState";
import {Tweet} from "../entities/Tweet";

@Component({
    selector: "tweet-main",
    directives: [TweetTopbar, TweetContent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <tweet-topbar
        [class.topbar-collapsed]="topbarCollapsed"
        [topbarCollapsed]="topbarCollapsed">
    </tweet-topbar>
    <tweet-content [tweets]="tweets"></tweet-content>`
})
export class TweetMain {
    @Input()
    public topbarCollapsed: boolean;

    @Input()
    public tweets: Array<Tweet>;

    constructor(@Inject("Store") private store: IStore<IApplicationState>) {
    }
}