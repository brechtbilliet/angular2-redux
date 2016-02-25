import {createStore, applyMiddleware, combineReducers, IStore, IReducer} from "redux";
import * as createLogger from "redux-logger";
import {componentsReducer} from "./reducers/componentsReducer";
import {dataReducer} from "./reducers/dataReducer";
import {IApplicationState} from "./appState";
import {IMiddleware} from "redux/redux";

const reducer: IReducer<IApplicationState> = combineReducers({
    components: componentsReducer,
    data: dataReducer
});
const logger: any = createLogger();
const createStoreWithMiddleware: any = applyMiddleware(logger)(createStore);
export var store: IStore<IApplicationState> = createStoreWithMiddleware(reducer);