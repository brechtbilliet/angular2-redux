import {createStore, Store} from "redux";
import {Injectable} from "angular2/core";
import {TOGGLE_TOPBAR, TOGGLE_SIDEBAR} from "../constants/ActionTypes";

export class CollapsedState {
    public topbarCollapsed: boolean;
    public sidebarCollapsed: boolean;

    constructor() {
        this.topbarCollapsed = false;
        this.sidebarCollapsed = false;
    }
}
function store(state: CollapsedState, action: any): CollapsedState {
    if (state === undefined) {
        state = new CollapsedState();
    }
    switch (action.type) {
        case TOGGLE_TOPBAR:
            state.topbarCollapsed = !state.topbarCollapsed;
            return state;
        case TOGGLE_SIDEBAR:
            state.sidebarCollapsed = !state.sidebarCollapsed;
            return state;
        default:
            return state;

    }
}
var createdStore: Store = createStore(store);
@Injectable()
export class CollapseStore {
    public store: Store;

    constructor() {
        this.store = createdStore;
    }
}