var expect = require('chai').expect,
    request = require('supertest'),
    app = require('../app'),
    animals = require('../models/methods'),
    Dog = require('../models/dog'),
    Cat = require('../models/cat'),
    agent = request.agent(app);

/**
 * Animal Universe Route Tests
 */
describe('Animal Universe Routes:', function () {

    /**
     * First we clear our animals array
     */
    beforeEach(function () {
        animals.clear();
    });

    /**
     * List all animals
     */
    describe('GET /api/animals', function () {
        it('responds with an array via JSON', function (done) {
            agent
                .get('/api/animals')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(function (res) {
                    // res.body is the JSON return object
                    expect(res.body).to.be.an.instanceOf(Array);
                    expect(res.body).to.have.length(0);
                })
                .end(done);
        });

        /**
        * Add an animal and check if it is saved
        */
        it('returns an animal if there is one in the array', function (done) {
            var newDog = new Dog(0, 'Snoopy', 'Dalmatian', 'White');
            animals.add(newDog);

            agent
                .get('/api/animals')
                .expect(200)
                .expect(function (res) {
                    expect(res.body).to.be.an.instanceOf(Array);
                    expect(res.body[0].name).to.equal('Snoopy');
                })
                .end(done);
        });

    });

    /**
     * List all dogs
     */
    describe('GET /api/animals/dogs', function () {
        it('only returns the dogs in the array', function (done) {
            var newDog = new Dog(0, 'Capi', 'Labrador', 'Black');
            var newCat = new Cat(1, 'KittyCat', 'Siamese', 'Gray');
            animals.add(newDog);
            animals.add(newCat);

            agent
                .get('/api/animals/dogs')
                .expect(200)
                .expect(function (res) {
                    expect(res.body).to.be.an.instanceOf(Array);
                    expect(res.body[0].species).to.equal('Dog');
                })
                .end(done);
        });

    });
});
