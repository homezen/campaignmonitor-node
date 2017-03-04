import {get} from 'lodash'
import agent from './agent'

export const BASE_URL = 'https://api.createsend.com/api/v3.1'


async function addSubscriber (options, listId, body) {
    const response = await agent.post(`${BASE_URL}/subscribers/${listId}.json`)
        .type('application/json')
        .auth(`${get(options, 'apiKey')}:empty-password`)
        .send(body)
    return get(response, 'body')
}

export default (options) => ({
    addSubscriber: (...args) => addSubscriber(options, ...args),
})
