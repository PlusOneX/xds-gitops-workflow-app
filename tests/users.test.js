import { should } from 'chai'
describe('👋 User test suite:', () => {
    it('🧪 Should have a max of 2 ', (done) => {
        const maxNumberOfUsers = 2
        should().equal(maxNumberOfUsers, 2);
        done()
    })
 })