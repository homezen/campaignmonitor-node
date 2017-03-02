/* eslint-env mocha */

import nock from 'nock'
import {SUCCESS} from 'http-status-codes'
import base64 from 'base-64'
import {expect} from '@homezen/hz-test-helpers'
import campaignMonitor, {
    BASE_URL,
    _getEncodedAuthString,
    _getRequestHeaders,
} from '.'

describe('subscribers', () => {
    context('getEncodedAuthString', () => {
        it('uses apiKey for username in base64 encoded auth string', () => {
            const encodedAuthString = _getEncodedAuthString('qwerty')
            const decodedAuthString = base64.decode(encodedAuthString, 'base64')
            expect(decodedAuthString).to.equal('qwerty:empty-password')
        })
    })

    context('getRequestHeaders', () => {
        it('sets Authorization header to basic auth with apiKey for username', () => {
            const headers = _getRequestHeaders({apiKey: 'qwerty'})
            expect(headers.Authorization).to.equal('Basic cXdlcnR5OmVtcHR5LXBhc3N3b3Jk')
        })
        it('sets Content-Type header to application/json', () => {
            const headers = _getRequestHeaders({apiKey: 'qwerty'})
            expect(headers['Content-Type']).to.equal('application/json')
        })
    })

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
            return expect(response).to.eventually.deep.equal({result: 'add-subscriber-test@me.com'})
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
