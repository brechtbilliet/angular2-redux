import {IApplicationDataState, InitialState} from "../appState";
import * as actionTypes from "../actionTypes";
import * as _ from "lodash";
import {dataTweetsReducer} from "../../tweets/reducers/dataTweetsReducer";
import {dataSpaceshipsReducer} from "../../starwars/reducers/dataSpaceshipsReducer";
import {dataPeopleReducer} from "../../starwars/reducers/dataPeopleReducer";
export function dataReducer(state: IApplicationDataState = InitialState.data, action: any = null): IApplicationDataState {
    switch (action.type) {
        case actionTypes.DATA_TWEETS_TOGGLE_TWEET_STAR:
        case actionTypes.DATA_TWEETS_ADD:
            return <IApplicationDataState> _.assign({}, state, {
                tweets: dataTweetsReducer(state.tweets, action)
            });
        case actionTypes.DATA_SPACESHIPS_SET:
            return <IApplicationDataState> _.assign({}, state, {
                spaceships: dataSpaceshipsReducer(state.spaceships, action)
            });
        case actionTypes.DATA_PEOPLE_SET:
            return <IApplicationDataState> _.assign({}, state, {
                people: dataPeopleReducer(state.people, action)
            });
        default:
            return state;
    }
    return state;
}
