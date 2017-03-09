/* eslint-env mocha */

import nock from 'nock'
import {SUCCESS} from 'http-status-codes'
import {expect} from '@homezen/hz-test-helpers'
import campaignMonitor, {
    BASE_URL,
} from '.'

describe('subscribers', () => {
    context('addSubscriber', () => {
        const api = campaignMonitor({apiKey: 'qwerty'})
        const listId = '1234567'
        const getDetails = () => ({
            EmailAddress: 'add-subscriber-test@me.com',
            Name: 'John Smith',
        })

        afterEach(nock.cleanAll)

        it('calls api with listId', () => {
            nock(BASE_URL)
                .post('/subscribers/1234567.json')
                .reply(SUCCESS, {})
            return api.addSubscriber(listId, getDetails())
        })

        it('calls api with correct auth header', () => {
            nock(BASE_URL)
                .matchHeader('Authorization', 'Basic cXdlcnR5OmVtcHR5LXBhc3N3b3Jk')
                .post('/subscribers/1234567.json')
                .reply(SUCCESS, {})
            return api.addSubscriber(listId, getDetails())
        })

        it('returns successful response', () => {
            const mockResponse = {result: 'add-subscriber-test@me.com'}
            nock(BASE_URL)
                .post('/subscribers/1234567.json', getDetails())
                .reply(SUCCESS, mockResponse)
            const response = api.addSubscriber(listId, getDetails())
            return expect(response)
                .to.eventually.have.property('body')
                .that.deep.equals({result: 'add-subscriber-test@me.com'})
        })

        it('throws on failed response', () => {
            nock(BASE_URL)
                .post('/subscribers/1234567.json', {})
                .replyWithError('error occurred')
            const response = api.addSubscriber(listId, getDetails())
            return expect(response).to.eventually.be.rejectedWith('error occurred')
        })

    })
})
