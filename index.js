function produceDrivingRange(blocks) {return function(blockRange) {
  return blockRange > blocks ? `${blockRange - blocks} out of range`:`within range by ${blockRange - blocks}`
  }
}