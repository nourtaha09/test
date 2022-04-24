/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Input: s ="({[}])"
Output: false

Input: s ="({[]})"
Output: true
 */
const isValid = function (s) {
    const openChars = []
    for(let i = 0; i < s.length; i++){
        const char = s[i]
        if(char === "{" || char === "(" || char === "["){
            openChars.push(char)
        }else{
            if(openChars.length > 0){
                const openChar = openChars[openChars.length - 1]
                if(openChar === "{"){
                    if(char === '}'){
                        openChars.splice(openChars.length - 1, 1)
                    }else{
                        return false
                    }
                }
                if(openChar === "("){
                    if(char === ')'){
                        openChars.splice(openChars.length - 1, 1)
                    }else{
                        return false
                    }
                }
                if(openChar === "["){
                    if(char === ']'){
                        openChars.splice(openChars.length - 1, 1)
                    }else{
                        return false
                    }
                }
            }
        }
    }
    if(openChars.length > 0){
        return false
    }
    return true
};
module.exports = isValid