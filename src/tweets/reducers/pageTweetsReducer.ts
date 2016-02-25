import * as _ from "lodash";
import * as actionTypes from "../../application/actionTypes";
import {IPageTweetsState, InitialState} from "../../application/appState";
export function pageTweetsReducer(state: IPageTweetsState = InitialState.components.pageTweets,
                                  action: any = null): IPageTweetsState {
    switch (action.type) {
        case actionTypes.PAGE_TWEETS_TOGGLE_SIDEBAR:
            return <IPageTweetsState> _.assign({}, state, {
                sidebarCollapsed: !state.sidebarCollapsed
            });
        case actionTypes.PAGE_TWEETS_TOGGLE_TOPBAR:
            return <IPageTweetsState> _.assign({}, state, {
                topbarCollapsed: !state.topbarCollapsed
            });
        default:
            return state;
    }
    return state;
}