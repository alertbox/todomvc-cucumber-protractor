function listOf(delimitedValues) {
    return delimitedValues.split(',').map(function (value) { return value.trim(); });
}

exports = module.exports = { listOf };