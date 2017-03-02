import fetch from 'node-fetch'

export const _getEncodedAuthString = (apiKey) =>
    Buffer.from(`${apiKey}:empty-password`).toString('base64')

export const _getRequestHeaders = ({apiKey}) => ({
    'Content-Type': 'application/json',
    Authorization: `Basic ${_getEncodedAuthString(apiKey)}`,
})

export const BASE_URL = 'https://api.createsend.com/api/v3.1'


export const addSubscriber = (listId, details, options) => {
    return fetch(`${BASE_URL}/subscribers/${listId}.json`, {
        method: 'POST',
        body: JSON.stringify(details),
        headers: _getRequestHeaders(options),
    })
        .then((res) => res.json())
}
