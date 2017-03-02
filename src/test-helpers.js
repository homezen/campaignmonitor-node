/* eslint-env mocha */

try {
    require('source-map-support')()
} catch (e) {
    /* NOOP */
}

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
chai.config.includeStack = true

export {expect} from 'chai'
