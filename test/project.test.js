import chai, { expect } from "chai";
import { BASE_API } from "../utils/constants.js";
// For authentification and users interaction features test
import chaiHttp from "chai-http";
// import { afterEach, beforeEach } from "mocha";
import { describe, it } from "mocha";
import app from "../app.js";
chai.use(chaiHttp);
// It will be used to make http request in one instance
const request = chai.request(app).keepOpen();
describe("Project /api/v1/project", () => {
    it("Should give the list of project", async (done) => {
        try {
            const res = await request.get(BASE_API + "/project").send();
            expect(res.body).to.be.a("object");
            expect(res.status).to.be.equal(200);
            done();
        } catch (err) {
            console.error(err);
            throw err;
        }
    });
});
