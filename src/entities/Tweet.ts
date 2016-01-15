import * as _ from "lodash";
export class Tweet {
    public id: string = _.uniqueId();
    constructor(public user: string, public content: string, public isStarred: boolean) {
    }
}