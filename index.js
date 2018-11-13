function produceDrivingRange(blocks) {return function(blockRange) {
const blocksToIntegers = parseInt(blockRange)
console.log(blocksToIntegers[0])
  return blocksToIntegers > blocks ? `${blockRange - blocks} out of range`:`within range by ${blockRange - blocks}`
  }
}