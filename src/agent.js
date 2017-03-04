import Promise from 'bluebird'
import superagent from 'superagent'
import saPromise from 'superagent-promise'

export default saPromise(superagent, Promise)

