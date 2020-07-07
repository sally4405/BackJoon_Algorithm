const { reverseStrVersion } = require("./reversestrversion")
const { reverseIntVersion } = require("./reverseintversion")

test("reverse string version test", () => {
    expect(reverseStrVersion(-500234501)).toBe(-105432005);
})

test("reverse int version test", () => {
    expect(reverseIntVersion(-500234501)).toBe(-105432005);
})