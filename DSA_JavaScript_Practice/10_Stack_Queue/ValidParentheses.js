/**
 * Topic: Valid Parentheses (Balanced Brackets)
 * Given a string of brackets, check if they are properly opened and closed.
 * "()[]{}" → true  |  "([)]" → false  |  "{[]}" → true
 */

/**
 * Stack approach — O(n) Time, O(n) Space
 */
function isValidParentheses(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch); // Push opening bracket
    } else {
      // Closing bracket — must match top of stack
      if (stack.length === 0 || stack[stack.length - 1] !== map[ch]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0; // Stack must be empty at the end
}

/**
 * Extended version — returns helpful error message
 */
function validateParentheses(s) {
  const stack = [];
  const openSet = new Set(["(", "{", "["]);
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (openSet.has(ch)) {
      stack.push({ ch, index: i });
    } else if (pairs[ch]) {
      if (stack.length === 0) {
        return { valid: false, error: `Unexpected closing '${ch}' at index ${i}` };
      }
      const top = stack.pop();
      if (top.ch !== pairs[ch]) {
        return {
          valid: false,
          error: `Mismatch: '${top.ch}' at ${top.index} vs '${ch}' at ${i}`,
        };
      }
    }
  }

  if (stack.length > 0) {
    const unmatched = stack[stack.length - 1];
    return { valid: false, error: `Unmatched '${unmatched.ch}' at index ${unmatched.index}` };
  }

  return { valid: true, error: null };
}

// Example usage
console.log("=== Basic Valid Parentheses ===");
console.log('"()[]{}": ', isValidParentheses("()[]{}"));  // true
console.log('"([])":    ', isValidParentheses("([])"));   // true
console.log('"([)]":    ', isValidParentheses("([)]"));   // false
console.log('"((":      ', isValidParentheses("(("));     // false
console.log('"":        ', isValidParentheses(""));       // true (empty)
console.log('"}{":      ', isValidParentheses("}{"));     // false

console.log("\n=== Extended Validation ===");
console.log(validateParentheses("()[]{}")); // { valid: true, error: null }
console.log(validateParentheses("([)]"));   // Mismatch error
console.log(validateParentheses("(("));     // Unmatched error
console.log(validateParentheses("}hi{"));   // Unexpected closing error
