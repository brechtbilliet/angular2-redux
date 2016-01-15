import {Injectable} from "angular2/core";
import {createStore, Store} from "redux";
import {Tweet} from "../entities/Tweet";
import {ADD_TWEET, TOGGLE_TWEET_STAR} from "../constants/ActionTypes";

function store(state: Array<Tweet>, action: any): Array<Tweet> {
    if (state === undefined) {
        state = [];
    }
    switch (action.type) {
        case ADD_TWEET:
            state.push(action.payload);
            return state;
        case TOGGLE_TWEET_STAR:
            state[Number(action.payload) - 1].isStarred = !state[Number(action.payload) - 1].isStarred;
            return state;
        default:
            return state;

    }
}
var createdStore: Store = createStore(store);
@Injectable()
export class TweetStore {
    public store: Store;

    constructor() {
        this.store = createdStore;
    }
}