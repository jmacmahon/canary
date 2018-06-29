import { random } from '../util'
import { DataStore, User } from '../../src/dataStore'
import { expect } from 'chai'

describe('data store', () => {
  describe('registration', () => {
    let dataStore: DataStore
    beforeEach(() => {
      dataStore = new DataStore()
    })

    it('should accept a valid registration', () => {
      const registrationData: User = {
        username: 'boshea',
        displayName: "Brendan O'Shea",
        email: 'brendan.bla.83+shea@a-domain-name.me.uk',
        checkInIntervalMinutes: random.integer(60, 7 * 24 * 60),
        contactEmail: 'contact.ice.22+shea@a-domain-name.xyz',
      }
      dataStore.register(registrationData)
    })

    it('should retrieve a user record by username', () => {
      const registrationData: User = {
        username: 'boshea',
        displayName: "Brendan O'Shea",
        email: 'brendan.bla.83+shea@a-domain-name.me.uk',
        checkInIntervalMinutes: random.integer(60, 7 * 24 * 60),
        contactEmail: 'contact.ice.22+shea@a-domain-name.xyz',
      }
      dataStore.register(registrationData)

      expect(dataStore.getUserByUserName('boshea')).to.deep.equal(registrationData)
    })

    it('should return undefined for no user', () => {
      expect(dataStore.getUserByUserName('nosuchuser')).to.equal(undefined)
    })
  })
})
