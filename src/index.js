import fetch from 'node-fetch'
import base64 from 'base-64'

export const _getEncodedAuthString = (apiKey) => base64.encode(`${apiKey}:empty-password`)

export const _getRequestHeaders = ({apiKey}) => ({
    'Content-Type': 'application/json',
    Authorization: `Basic ${_getEncodedAuthString(apiKey)}`,
})

export const BASE_URL = 'https://api.createsend.com/api/v3.1'


export async function addSubscriber (listId, details, options) {
    const response = await fetch(`${BASE_URL}/subscribers/${listId}.json`, {
        method: 'POST',
        body: JSON.stringify(details),
        headers: _getRequestHeaders(options),
    })
    return response.json()
}
