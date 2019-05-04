'use strict'
const ud = require('urban-dictionary')

export function toSlang(input: string): string {
    return ud.random().then((result: { word: string; definition: string; example: string; }) => {
        return result.example
    }).catch((error: { message: string; }) => {
        console.error(error.message)
        return input
    })
}
