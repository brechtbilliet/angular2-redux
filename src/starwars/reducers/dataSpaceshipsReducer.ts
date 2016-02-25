import {Spaceship} from "../entities/Spaceship";
import {InitialState} from "../../application/appState";
export function dataSpaceshipsReducer(state: Array<Spaceship> = InitialState.data.spaceships,
                                      action: any = null): Array<Spaceship> {
    return state;
}