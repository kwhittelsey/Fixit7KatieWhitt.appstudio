let quoteString = 'Failure is simply the opportunity to begin again this time more intelligently.'

let upperCaseString= quoteString.toUpperCase()
alert(`Upper case string is: ${upperCaseString}`)

let authorString='-Henry Ford'

let completeString=quoteString + authorString
alert(`The string in quoteString is: ${completeString}`)

let secondQuote = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.-Stephen King'
let lowerCaseString = secondQuote.toLowerCase()
alert(`Lower case string is: ${lowerCaseString}`)

alert(`The character at location 3 is ${secondQuote.charAt(3)}`)

let findString=secondQuote.slice(35)
alert(`${findString}`)