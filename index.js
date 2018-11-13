function produceDrivingRange(blocks) {return function(startBlock, endBlock) {
const startBlockToInteger = parseInt(startBlock)
const endBlockToInteger = parseInt(endBlock)
const blockRange = endBlockToInteger - startBlockToInteger
const withinRange = Math.abs(blockRange - blocks)
  return blockRange > blocks ? `${withinRange} out of range`:`within range by ${withinRange}`
  }
}