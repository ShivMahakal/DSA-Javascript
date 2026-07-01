function findFirstRepeatedWord(str) {
  const seen = new Set();
  let word = "";

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // agar character letter hai → word banao
    if (char >= "a" && char <= "z") {
      word += char;
    } else {
      // word complete ho gaya
      if (word) {
        if (seen.has(word)) {
          return word;
        }
        seen.add(word);
        word = "";
      }
    }
  }

  // last word check (edge case)
  if (word && seen.has(word)) {
    return word;
  }

  return null;
}

// Hinglish Explanation (Interview Style)

// 👉 Approach:

// Ek Set use karenge → fast lookup (O(1))
// String ko character by character traverse karenge
// Har word manually build karenge
// Jaise hi word complete ho:
// Agar already seen hai → return kar do
// Nahi → set mein add karo
// 🔥 Important Points (Interviewer ko impress karne ke liye)
// Case-insensitive handling → .toLowerCase()
// Punctuation ignore kiya (., ! etc.)
// Time Complexity → O(n)
// Space Complexity → O(n) (Set ke liye)
// ⚡ Simple Line

// 👉 “String ko scan karo, word banao, aur jo pehle repeat ho usko turant return karo”
