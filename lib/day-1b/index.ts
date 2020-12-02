import { readFileSync } from 'fs'
import * as path from 'path'
import { compact, flatMap } from 'lodash'

const INPUT_FILEPATH = path.resolve(__dirname, "input.txt")
const INPUT_ENCODING = "utf-8" as const

const inputString = readFileSync(INPUT_FILEPATH, INPUT_ENCODING)
const inputArray = inputString.split("\n")

const TARGET_SUM = 2020
const inputNumbers = inputArray.map((line) => parseInt(line, 10))

const pairs = flatMap(inputNumbers, (numberA, indexA) => {
  return inputNumbers.map((numberB, indexB) => {
    if (indexA === indexB) return undefined

    return [numberA, numberB]
  })
})

const match = compact(pairs).find(
  ([numberA, numberB]) => numberA + numberB === TARGET_SUM
) 

if (!match) {
  throw new Error("No match found.")
}

const multipliedResult = match.reduce((acc, num) => acc * num, 1)

console.log(multipliedResult)