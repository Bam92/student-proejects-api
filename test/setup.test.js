// For basic test config like clear database before begin test
process.env.NODE_ENV = "test";
// For authentification and users interaction features test
import chai from "chai";
import chaiHttp from "chai-http";
// import { afterEach, beforeEach } from "mocha";
import app from "../app.js";
chai.use(chaiHttp);

// Will be execute before everything to truncate database
/* beforeEach((done) => {
    done();
}); */

// Will be execute after test to truncate database again
/* afterEach((done) => {
    done();
}); */
// It will be used to make http request in one instance
const request = chai.request(app).keepOpen();
export default request;
