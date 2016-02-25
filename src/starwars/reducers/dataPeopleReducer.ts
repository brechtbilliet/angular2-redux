import {Person} from "../entities/Person";
import {InitialState} from "../../application/appState";
export function dataPeopleReducer(state: Array<Person> = InitialState.data.people,
                                  action: any = null): Array<Person> {
    return state;
}