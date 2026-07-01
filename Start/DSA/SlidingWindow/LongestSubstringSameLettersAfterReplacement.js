function characterReplacement(s, k) {
  let low = 0;
  let maxFreq = 0;
  let maxLength = 0;
  let charMap = {};
  let startIndex = 0;
  console.log(`🚀 START: String = "${s}", k = ${k}\n`);

  for (let high = 0; high < s.length; high++) {
    const charAtHigh = s[high];

    // 1️⃣ Current character ka count badhao
    // Agar pehle se exist nahi karta toh 0 se start karo
    charMap[charAtHigh] = (charMap[charAtHigh] || 0) + 1;

    // 2️⃣ Window me jo character sabse zyada baar aaya hai uski frequency track karo
    // Ye important hai kyunki isi ke basis pe decide hoga kitne replacements chahiye
    maxFreq = Math.max(maxFreq, charMap[charAtHigh]);

    // 3️⃣ Current window size
    let windowSize = high - low + 1;

    // 4️⃣ Kitne characters replace karne padenge?
    // Formula:
    // Total window size - most frequent character count
    let replacementsNeeded = windowSize - maxFreq;

    // LOGGING STATUS
    console.log(`Step (high=${high}): Add '${charAtHigh}'`);
    console.log(
      `   Window: "${s.substring(low, high + 1)}" (Indices ${low} to ${high})`,
    );
    console.log(`   Map: ${JSON.stringify(charMap)}`);
    console.log(
      `   MaxFreq ('${Object.keys(charMap).find((key) => charMap[key] === maxFreq)}'): ${maxFreq}`,
    );
    console.log(
      `   Size: ${windowSize}, Need Replacements: ${replacementsNeeded} (Allowed: ${k})`,
    );

    // 5️⃣ Agar replacements allowed se zyada ho gaye
    // Toh window invalid hai → left se shrink karo
    if (replacementsNeeded > k) {
      console.log(
        `   ❌ INVALID (Needs ${replacementsNeeded} > ${k}). Shrinking window from left...`,
      );

      const charAtLow = s[low];

      charMap[charAtLow]--; // Left char ka count kam karo
      low++; // Window ko right shift karo

      console.log(`   🔽 Removed '${charAtLow}'. New Window Start: ${low}`);
    } else {
      console.log(`   ✅ VALID Window.`);
    }

    // 6️⃣ Max length update
    // Note: Hum length tabhi update karte hain jab window valid hoti hai,
    // par mathematically agar invalid bhi hui toh purana maxLength hi rahega.
    if (high - low + 1 > maxLength) {
      maxLength = high - low + 1;
      startIndex = low;
      console.log(`   🏆 New Max Length Record: ${maxLength}`);
    }

    console.log("-".repeat(40));
  }

  // ⭐ Final substring nikal lo
  const maxSubstring = s.substring(startIndex, startIndex + maxLength);

  return { maxLength, maxSubstring };
}

const result = characterReplacement("ABABABBA", 1);
console.log("\n🏁 Final Answer:", result);
