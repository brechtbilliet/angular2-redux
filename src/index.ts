import "es6-shim";
import "rxjs";
import "reflect-metadata";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import {provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {TweetApp} from "./application/application.component";
import {store} from "./application/Store";
bootstrap(TweetApp, [
    provide("Store", {useValue: store})
]);