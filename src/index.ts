require("es6-shim");
import "rxjs";
require("reflect-metadata");
require("bootstrap/dist/css/bootstrap.css");
require("font-awesome/css/font-awesome.css");
require("./styles/screen.scss");
import {bootstrap}   from "angular2/platform/browser";
import {TweetApp} from "./components/tweetApp.component";
bootstrap(TweetApp);