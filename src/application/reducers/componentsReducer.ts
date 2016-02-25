import * as _ from "lodash";
import {IApplicationDataState, InitialState, IApplicationComponentState} from "../appState";
import * as actionTypes from "../actionTypes";
import {pageTweetsReducer} from "../../tweets/reducers/pageTweetsReducer";
import {pageStarwarsReducer} from "../../starwars/reducers/pageStarwarsReducer";
export function componentsReducer(state: IApplicationComponentState = InitialState.components,
                                  action: any = null): IApplicationComponentState {
    switch (action.type) {
        case actionTypes.PAGE_TWEETS_TOGGLE_TOPBAR:
        case actionTypes.PAGE_TWEETS_TOGGLE_SIDEBAR:
            state.pageTweets = pageTweetsReducer(state.pageTweets, action);
        case actionTypes.PAGE_STARWARS_SET_ACTIVE_TAB:
        case actionTypes.PAGE_STARWARS_START_LOADING:
        case actionTypes.PAGE_STARWARS_STOP_LOADING:
            state.pageStarwars = pageStarwarsReducer(state.pageStarwars, action);
        default:
            return state;
    }
    return state;
}