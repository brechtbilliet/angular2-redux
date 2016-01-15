import {Inject } from "angular2/core";
import {Component} from "angular2/core";
import {TweetTopbar} from "./tweetTopbar.component";
import {TweetContent} from "./tweetContent.component";
import {CollapseStore} from "../stores/CollapseStore";
import {CollapsedState} from "../stores/CollapseStore";

@Component({
    selector: "tweet-main",
    directives: [TweetTopbar, TweetContent],
    providers: [CollapseStore],
    template: `
    <tweet-topbar [class.topbar-collapsed]="topbarCollapsed"></tweet-topbar>
    <tweet-content></tweet-content>`
})
export class TweetMain {
    public topbarCollapsed: boolean = false;

    constructor(@Inject(CollapseStore) private collapseStore: CollapseStore) {
        this.collapseStore.store.subscribe(() => {
            console.log("test");
            var state: CollapsedState = this.collapseStore.store.getState();
            this.topbarCollapsed = state.topbarCollapsed;
        });
    }

}