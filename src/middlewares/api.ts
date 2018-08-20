import fetch from 'cross-fetch';
import { Action, combineReducers } from 'redux';

const getCsrfToken = (): string => {
    return document.querySelector('meta[name="csrf-token"]')!.getAttribute('content') as string;
}

export const post = (uri: string, data = {}) => {
    const token = getCsrfToken();
    const headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
    });
    const init: RequestInit = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers,
    }
    return fetch(uri, init)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error
        });
};
