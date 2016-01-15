import {Inject } from "angular2/core";
import {Component} from "angular2/core";
import {TweetStore} from "../stores/TweetStore";
import {CollapseStore, CollapsedState} from "../stores/CollapseStore";
import {addTweet} from "../actions/tweets";
import {toggleTopbar} from "../actions/collapse";
import {Tweet} from "../entities/Tweet";

@Component({
    selector: "tweet-topbar",
    providers: [TweetStore, CollapseStore],
    template: `
        <div>
            <div class="collapsed-content" *ngIf="!topbarCollapsed">
                <h1><i class="fa fa-twitter"></i>&nbsp;Post a new tweet</h1>
                <input class="form-control" [(ngModel)]="tweetContent"/><br/>
                <button class="btn btn-primary btn-lg" [disabled]="tweetContent === ''" (click)="post($event)">
                    <i class="fa fa-envelope"></i>&nbsp;Post
                </button>
            </div>
            <i class="fa dp-collapse dp-collapse-center"
                [class.fa-chevron-up]="!topbarCollapsed" [class.fa-chevron-down]="topbarCollapsed"
                (click)="toggleTopbar()"></i>
        </div>`
})
export class TweetTopbar {
    public tweetContent: string = "";
    public topbarCollapsed: boolean = false;

    constructor(@Inject(TweetStore) private tweetStore: TweetStore,
                @Inject(CollapseStore) private collapseStore: CollapseStore) {
        this.collapseStore.store.subscribe(() => {
            var state: CollapsedState = this.collapseStore.store.getState();
            this.topbarCollapsed = state.topbarCollapsed;
        });
    }

    public toggleTopbar(): void {
        this.collapseStore.store.dispatch(toggleTopbar());
    }

    public post(event: any): void {
        this.tweetStore.store.dispatch(addTweet(new Tweet("@user", this.tweetContent, false)));
        this.tweetContent = "";
    }
}
