function produceDrivingRange(blocks) {return function(startBlock, endBlock) {
    const blockRange = parseInt(endBlock) - parseInt(startBlock)
    const withinRange = Math.abs(blockRange - blocks)
    return blockRange > blocks ? `${withinRange} blocks out of range`:`within range by ${withinRange}`
  }
}

