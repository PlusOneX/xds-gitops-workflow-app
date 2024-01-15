// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';// Configure chai
chai.use(chaiHttp);
chai.should();

describe('User test suite:', () => {
    // Get all usres from API
    describe('Get /', () => { 
        it('should return status 200', (done) => {
           
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                 });
        })
    })
 })