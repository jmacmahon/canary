import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
const chaiSubset = require('chai-subset')
chai.use(chaiAsPromised)
// tslint:disable-next-line no-unsafe-any
chai.use(chaiSubset)
chai.should()
