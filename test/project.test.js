import chai, { expect } from "chai";
import { BASE_API } from "../utils/constants.js";
chai.should();
// For authentification and users interaction features test
import chaiHttp from "chai-http";
// import { afterEach, beforeEach } from "mocha";
import { describe, it } from "mocha";
import app from "../app.js";
chai.use(chaiHttp);
// It will be used to make http request in one instance
const request = chai.request(app).keepOpen();
describe("Project /api/v1/project", () => {
    it("Should give the list of project", (done) => {
        request
            .get(BASE_API + "/projects")
            .send()
            .then((res) => {
                res.body.should.to.be.a("array");
                expect(res.status, "Should be and 200").equal(200);
                done();
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    });

    it("Should add a project", (done) => {
        let str = (Math.random() + 10).toString(36).substring(7);
        const project = {
            title: "Tchat app " + str,
            description: "Application de tchat en ligne " + str,
            tags: ["reactjs", "expressjs", "socket,io"],
            previewLink: "https://www.gda-preview.com",
            githubLink: "https://www.github.com/code",
            publish: "active",
            studentId: "88cb986a-b9aa-49ba-98f3-9249b367b7f0",
        };
        request
            .post(BASE_API + "/projects/add")
            .send(project)
            .then((res) => {
                expect(res.status).to.be.equal(201);
                done();
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    });
    it("should give a project", () => {
        const id = "9d229b21-3486-4c4e-a170-988330b3f7df";
        request
            .get(BASE_API + "/api/v1/projects/" + id)
            .send()
            .then((res) => {
                expect(res.body).to.be.a("object");
                expect(res.status).to.be.equal(200);
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    });
});
