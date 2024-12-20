/**
 * Mencari keyword dalam sebuah teks menggunakan regex.
 * @param {string} text - Teks yang akan dicari.
 * @param {string} keyword - Kata kunci yang akan dicocokkan.
 * @param {boolean} partialMatch - True untuk mencocokkan sebagian kata, false untuk kata utuh.
 * @returns {boolean} True jika keyword ditemukan, false jika tidak.
 */
export function searchKeyword(
  text: string,
  keyword: string,
  partialMatch: boolean = true,
): boolean {
  if (!text || !keyword) return false;

  // Escaping karakter khusus regex dari keyword
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Membuat regex untuk mencocokkan kata kunci
  const regexPattern = partialMatch
    ? escapedKeyword // Cocokkan sebagian
    : `\\b${escapedKeyword}\\b`; // Cocokkan kata utuh (gunakan boundary \b)

  const regex = new RegExp(regexPattern, "i"); // Regex dengan flag case-insensitive

  return regex.test(text); // Return true jika ada kecocokan
}
