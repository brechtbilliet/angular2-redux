import {createAction} from "redux-actions";
import * as types from "../application/actionTypes";
import {Spaceship} from "./entities/Spaceship";
import {Person} from "./entities/Person";

const pageStarwarsSetActiveTab: any = createAction<string>(
    types.PAGE_STARWARS_SET_ACTIVE_TAB,
    (tab: string) => tab
);
const pageStarwarsStartLoading: any = createAction<string>(
    types.PAGE_STARWARS_START_LOADING
);
const pageStarwarsStopLoading: any = createAction<string>(
    types.PAGE_STARWARS_STOP_LOADING
);
const dataSpaceshipsSet: any = createAction<Array<Spaceship>>(
    types.DATA_SPACESHIPS_SET,
    (data: Array<Spaceship>) => data
);
const dataPeopleSet: any = createAction<Array<Person>>(
    types.DATA_PEOPLE_SET,
    (data: Array<Person>) => data
);

export{
    pageStarwarsSetActiveTab,
    pageStarwarsStartLoading,
    pageStarwarsStopLoading,
    dataSpaceshipsSet,
    dataPeopleSet
}