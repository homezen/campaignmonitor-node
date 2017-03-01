import fetch from 'node-fetch'

const getEncodedAuthString = (apiKey) => Buffer.from(`${apiKey}:empty-password`).toString('base64')

const getRequestHeaders = ({apiKey}) => ({
    'Content-Type': 'application/json',
    Authorization: `Basic  ${getEncodedAuthString(apiKey)}`,
})

const baseUrl = 'https://api.createsend.com/api/v3.1'


export const addSubscriber = (listId, details, options) => {
    return fetch(`${baseUrl}/subscribers/${listId}.json`, {
        method: 'POST',
        body: JSON.stringify(details),
        headers: getRequestHeaders(options),
    })
        .then((res) => res.json())
}
