import chai, { expect } from "chai";
import { describe, it } from "mocha";
import { BASE_API } from "../utils/constants.js";
// For authentification and users interaction features test
import chaiHttp from "chai-http";
// import { afterEach, beforeEach } from "mocha";
import app from "../app.js";
chai.use(chaiHttp);
// It will be used to make http request in one instance
const request = chai.request(app).keepOpen();
describe("Project /api/v1/project", () => {
    it("Should give the list of project", (done) => {
        request
            .get(BASE_API + "/project")
            .then((res) => {
                console.log(res.body);
                expect(res.body).to.be.a("object");
                expect(res.status).to.be.equal(400);
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
                throw err;
            });
    });
});
