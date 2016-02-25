import {Tweet} from "../entities/Tweet";
import * as _ from "lodash";
import {InitialState} from "../../application/appState";
import * as actionTypes from "../../application/actionTypes";
export function dataTweetsReducer(state: Array<Tweet> = InitialState.data.tweets,
                                  action: any = null): Array<Tweet> {
    switch (action.type) {
        case actionTypes.DATA_TWEETS_ADD:
            return [...state, action.payload];
        case actionTypes.DATA_TWEETS_TOGGLE_TWEET_STAR:
            state[action.payload] = <Tweet>_.assign({}, state[action.payload], {
                starred: !state[action.payload].starred
            })
            return state;
        default:
            return state;
    }
    return state;
}