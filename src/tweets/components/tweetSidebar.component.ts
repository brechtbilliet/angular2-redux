import {Component, Inject, Input, ChangeDetectionStrategy} from "angular2/core";
import {IStore} from "redux/redux";
import {Tweet} from "../entities/Tweet";
import {IApplicationState} from "../../application/appState";
import * as actions from "../actions";

@Component({
    selector: "tweet-sidebar",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <i class="fa dp-collapse dp-collapse-right"
        [class.fa-chevron-right]="sidebarCollapsed"
        [class.fa-chevron-left]="!sidebarCollapsed"
        (click)="toggleSidebar()"></i>
        <div class="collapsed-content" *ngIf="!sidebarCollapsed">
            <h2>Starred tweets</h2>
            <p>Here we have an overview of our starred tweets</p>
            <div *ngFor="#tweet of tweets">
                <div *ngIf="tweet.starred">
                    {{tweet.user}}: {{tweet.content}}
                </div>
            </div>
        </div>`
})
export class TweetSidebar {
    @Input()
    public sidebarCollapsed: boolean;

    @Input()
    public tweets: Array<Tweet> = [];

    constructor(@Inject("Store") private store: IStore<IApplicationState>) {
    }

    public toggleSidebar(): void {
        this.store.dispatch(new actions.pageTweetsToggleSidebar());
    }
}