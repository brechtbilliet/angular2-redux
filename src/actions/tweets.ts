import {createAction} from "redux-actions";
import * as types from "../constants/ActionTypes";
import {Tweet} from "../entities/Tweet";

const addTweet: any = createAction<Tweet>(
    types.ADD_TWEET,
    (tweet: Tweet) => tweet
);

const toggleTweetStar: any = createAction<string>(
    types.TOGGLE_TWEET_STAR,
    (id: string) => id
);

export{
    addTweet,
    toggleTweetStar
}