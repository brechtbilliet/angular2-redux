import {Tweet} from "../tweets/entities/Tweet";
import {Spaceship} from "../starwars/entities/Spaceship";
import {Person} from "../starwars/entities/Person";
export interface IApplicationState {
    components: IApplicationComponentState;
    data: IApplicationDataState;
}

export interface IApplicationComponentState {
    pageTweets: IPageTweetsState;
    pageStarwars: IPageStarwarsState;
}

export interface IPageTweetsState {
    sidebarCollapsed: boolean;
    topbarCollapsed: boolean;
}

export interface IPageStarwarsState {
    selectedTab: string;
    loadingData: boolean;
}

export interface IApplicationDataState {
    tweets: Array<Tweet>;
    spaceships: Array<Spaceship>;
    people: Array<Person>;
}

export const InitialState: IApplicationState = {
    components: {
        pageTweets: {
            sidebarCollapsed: false,
            topbarCollapsed: false
        },
        pageStarwars: {
            selectedTab: "",
            loadingData: false
        }
    },
    data: {
        tweets: [],
        spaceships: [],
        people: []
    }
};