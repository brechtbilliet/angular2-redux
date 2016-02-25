import {createAction} from "redux-actions";
import {Tweet} from "./entities/Tweet";
import * as types from "../application/actionTypes";

const pageTweetsToggleTopbar: any = createAction(
    types.PAGE_TWEETS_TOGGLE_TOPBAR
);
const pageTweetsToggleSidebar: any = createAction(
    types.PAGE_TWEETS_TOGGLE_SIDEBAR
);

const dataTweetsToggleTweetStar: any = createAction<number>(
    types.DATA_TWEETS_TOGGLE_TWEET_STAR,
    (index: number) => index
);
const dataTweetsAdd: any = createAction<Tweet>(
    types.DATA_TWEETS_ADD,
    (tweet: Tweet) => tweet
);

export{
    pageTweetsToggleTopbar,
    pageTweetsToggleSidebar,
    dataTweetsToggleTweetStar,
    dataTweetsAdd
}