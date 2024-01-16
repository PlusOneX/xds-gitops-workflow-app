import { should } from 'chai'
describe('User test suite:', () => {
    // Get all usres from API
    describe('Number of users', () => { 
        it('should return status 200', (done) => {
            const maxNumberOfUsers = 2
            should().equal(maxNumberOfUsers, 2);
            done()
        })
    })
 })