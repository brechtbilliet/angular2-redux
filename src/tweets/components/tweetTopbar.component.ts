import {Component, Inject, Input, ChangeDetectionStrategy} from "angular2/core";
import {IApplicationState} from "../../application/appState";
import {IStore} from "redux/redux";
import * as actions from "../actions";
import {Tweet} from "../entities/Tweet";

@Component({
    selector: "tweet-topbar",
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    @Input()
    public topbarCollapsed: boolean;

    public tweetContent: string = "";

    constructor(@Inject("Store") private store: IStore<IApplicationState>) {
    }

    public toggleTopbar(): void {
        this.store.dispatch(new actions.pageTweetsToggleTopbar());
    }

    public post(event: any): void {
        this.store.dispatch(new actions.dataTweetsAdd(new Tweet("@brechtbilliet", this.tweetContent, false)));
        this.tweetContent = "";
    }
}
