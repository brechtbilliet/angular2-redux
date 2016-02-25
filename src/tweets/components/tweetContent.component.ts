import {Component, Inject, Input, ChangeDetectionStrategy} from "angular2/core";
import {IStore} from "redux/redux";
import {Tweet} from "../entities/Tweet";
import {IApplicationState} from "../../application/appState";
import * as actions from "../actions";

@Component({
    selector: "tweet-content",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            <h2>Feed</h2>
            <p>These are the most recent tweets</p>
            <div class="dp-tweets">
                <div class="row dp-tweet" *ngFor="#tweet of tweets; #i = index">
                    <div class="col-sm-8">
                        <h3>{{tweet.name}} tweeted</h3>
                        <p>{{tweet.content}}</p>
                        <i class="fa fa-reply dp-tweet-icon"></i>
                        <i class="fa fa-retweet dp-tweet-icon"></i>
                        <i class="fa fa-star dp-tweet-icon"></i>
                        <i class="fa fa-ellipsis-h dp-tweet-icon"></i>
                    </div>
                    <div class="col-sm-4">
                        <i class="fa fa-star pull-right"
                        [class.starred]="tweet.starred"
                        (click)="toggleStar(i)"></i>
                    </div>
                </div>
            </div>
        </div>`
})
export class TweetContent {
    @Input()
    public tweets: Array<Tweet>;

    constructor(@Inject("Store") private store: IStore<IApplicationState>) {
    }

    public toggleStar(index: number): void {
        this.store.dispatch(new actions.dataTweetsToggleTweetStar(index));
    }
}