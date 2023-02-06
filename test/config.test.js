import chai from "chai";
import chaiHttp from "chai-http";
// import { after, before } from "mocha";
import server from "../app.js";
chai.use(chaiHttp);
/* before((done) => {
    sequelize.sync({ alter: true }).then(() => {
        done();
    });
});
after((done) => {
    sequelize.sync({ force: true }).then(() => {
        done();
    });
}); */

const request = chai.request(server).keepOpen();
export default request;
