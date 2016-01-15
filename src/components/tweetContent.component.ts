import {Inject } from "angular2/core";
import {Component} from "angular2/core";
import {TweetStore} from "../stores/TweetStore";
import {Tweet} from "../entities/Tweet";
import {toggleTweetStar} from "../actions/tweets";

@Component({
    selector: "tweet-content",
    providers: [TweetStore],
    template: `
        <div>
            <h2>Feed</h2>
            <p>These are the most recent tweets</p>
            <div class="dp-tweets">
                <div class="row dp-tweet" *ngFor="#tweet of tweets">
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
                        [class.starred]="tweet.isStarred"
                        (click)="toggleStar(tweet)"></i>
                    </div>
                </div>
            </div>
        </div>`
})
export class TweetContent {
    public tweets: Array<Tweet> = [];

    constructor(@Inject(TweetStore) private tweetStore: TweetStore) {
        this.tweetStore.store.subscribe(() => {
            this.tweets = this.tweetStore.store.getState();
        });
    }

    public toggleStar(tweet: Tweet): void {
        this.tweetStore.store.dispatch(toggleTweetStar(tweet.id));
    }
}