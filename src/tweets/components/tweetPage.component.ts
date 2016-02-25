import "../styles/tweets.scss";

import {Component, Inject, OnDestroy} from "angular2/core";
import {TweetSidebar} from "./tweetSidebar.component";
import {TweetMain} from "./tweetMain.component";
import {IApplicationState} from "../../application/appState";
import {IStore} from "redux/redux";
import {IPageTweetsState} from "../../application/appState";
import {Tweet} from "../entities/Tweet";
@Component({
    selector: "tweet-page",
    directives: [TweetSidebar, TweetMain],
    template: `
        <tweet-sidebar
            [class.sidebar-collapsed]="pageTweetsState.sidebarCollapsed"
            [sidebarCollapsed]="pageTweetsState.sidebarCollapsed"
            [tweets]="tweets"></tweet-sidebar>
        <tweet-main
            [topbarCollapsed]="pageTweetsState.topbarCollapsed"
            [tweets]="tweets"></tweet-main>`
})
export class TweetPage implements OnDestroy {
    public pageTweetsState: IPageTweetsState;
    public tweets: Array<Tweet>;
    private unsubscribe: Function;

    constructor(@Inject("Store") private store: IStore<IApplicationState>) {
        this.setState();
        this.unsubscribe = this.store.subscribe(() => {
            this.setState();
        });
    }

    public ngOnDestroy(): any {
        this.unsubscribe();
    }

    private setState(): void {
        this.pageTweetsState = this.store.getState().components.pageTweets;
        this.tweets = this.store.getState().data.tweets;
    }
}