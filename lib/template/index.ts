import { readFileSync } from 'fs'
import * as path from 'path'

const INPUT_FILEPATH = path.resolve(__dirname, "input.txt")
const INPUT_ENCODING = "utf-8" as const

const inputString = readFileSync(INPUT_FILEPATH, INPUT_ENCODING)
const inputArray = inputString.split("\n")

inputArray.forEach((line) => {
  console.log(line)
})