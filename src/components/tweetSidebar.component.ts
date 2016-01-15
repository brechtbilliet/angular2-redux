import {Inject } from "angular2/core";
import {Component} from "angular2/core";
import {Tweet} from "../entities/Tweet";
import {TweetStore} from "../stores/TweetStore";
import {CollapseStore, CollapsedState} from "../stores/CollapseStore";
import {toggleSidebar} from "../actions/collapse";
@Component({
    selector: "tweet-sidebar",
    providers: [CollapseStore, TweetStore],
    template: `
        <div>
            <div>
                <i class="fa dp-collapse dp-collapse-right"
                [class.fa-chevron-right]="sidebarCollapsed"
                [class.fa-chevron-left]="!sidebarCollapsed"
                (click)="toggleSidebar()"></i>
                <div class="collapsed-content" *ngIf="!sidebarCollapsed">
                    <h2>Starred tweets</h2>
                    <p>Here we have an overview of our starred tweets</p>
                    <div *ngFor="#tweet of tweets">
                        <div *ngIf="tweet.isStarred">
                            {{tweet.user}}: {{tweet.content}}
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})
export class TweetSidebar {
    public tweets: Array<Tweet> = [];
    public sidebarCollapsed: boolean = false;

    constructor(@Inject(CollapseStore) private collapseStore: CollapseStore,
                @Inject(TweetStore) private tweetStore: TweetStore) {
        this.tweetStore.store.subscribe(() => {
            this.tweets = this.tweetStore.store.getState();
        });
        this.collapseStore.store.subscribe(() => {
            var state: CollapsedState = this.collapseStore.store.getState();
            this.sidebarCollapsed = state.sidebarCollapsed;
        });
    }

    public toggleSidebar(): void {
        this.collapseStore.store.dispatch(toggleSidebar());
    }
}