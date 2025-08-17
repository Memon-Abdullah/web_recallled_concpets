const userAge1 = 21
const userAge2 = 24

//  comparsion operators    

const isEqual = userAge1 == userAge2
const isStrictEqual = userAge1 === userAge2
const isNotEqual = userAge1 != userAge2
const isStrictNotEqual = userAge1 !== userAge2
const isGreaterThan = userAge1 > userAge2
const isLessThan = userAge1 < userAge2
const isGreaterThanOrEqual = userAge1 >= userAge2
const isLessThanOrEqual = userAge1 <= userAge2
const isBothEqual = userAge1 == userAge2 && userAge1 === userAge2
const isEitherEqual = userAge1 == userAge2 || userAge1 === userAge2
const isNotBothEqual = !(userAge1 == userAge2 && userAge1 === userAge2)
const isNotEitherEqual = !(userAge1 == userAge2 || userAge1 === userAge2)
console.log("isEqual:", isEqual)
console.log("isStrictEqual:", isStrictEqual)
console.log("isNotEqual:", isNotEqual)
console.log("isStrictNotEqual:", isStrictNotEqual)
console.log("isGreaterThan:", isGreaterThan)
console.log("isLessThan:", isLessThan)
console.log("isGreaterThanOrEqual:", isGreaterThanOrEqual)
console.log("isLessThanOrEqual:", isLessThanOrEqual)
console.log("isBothEqual:", isBothEqual)
console.log("isEitherEqual:", isEitherEqual)
console.log("isNotBothEqual:", isNotBothEqual)
console.log("isNotEitherEqual:", isNotEitherEqual)
console.log("userAge1:", userAge1)
console.log("userAge2:", userAge2)
console.log("Type of userAge1:", typeof userAge1)
