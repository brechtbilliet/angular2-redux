import {Inject } from "angular2/core";
import {Component} from "angular2/core";
import {TweetSidebar} from "./tweetSidebar.component";
import {TweetMain} from "./tweetMain.component";
import {CollapsedState, CollapseStore} from "../stores/CollapseStore";

@Component({
    selector: "tweet-app",
    providers: [CollapseStore],
    directives: [TweetSidebar, TweetMain],
    template: `
        <tweet-sidebar [class.sidebar-collapsed]="sidebarCollapsed"></tweet-sidebar>
        <tweet-main></tweet-main>`
})
export class TweetApp {
    public sidebarCollapsed: boolean = false;

    constructor(@Inject(CollapseStore) private collapseStore: CollapseStore) {
        this.collapseStore.store.subscribe(() => {
            var state: CollapsedState = this.collapseStore.store.getState();
            this.sidebarCollapsed = state.sidebarCollapsed;
        });
    }
}