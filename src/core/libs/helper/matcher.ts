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

export function sortByName<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
  ascending: boolean = true,
): T[] {
  return items.sort((a, b) => {
    const nameA = String(a[key]).toLowerCase(); // Konversi ke string dan huruf kecil
    const nameB = String(b[key]).toLowerCase();

    if (nameA < nameB) return ascending ? -1 : 1; // Urutan naik
    if (nameA > nameB) return ascending ? 1 : -1; // Urutan turun
    return 0; // Jika nama sama
  });
}

export function sortByDate<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
  ascending: boolean = true,
): T[] {
  return items.sort((a, b) => {
    const dateA = new Date(a[key]).getTime(); // Konversi tanggal ke timestamp
    const dateB = new Date(b[key]).getTime();

    if (dateA < dateB) return ascending ? -1 : 1; // Urutan naik
    if (dateA > dateB) return ascending ? 1 : -1; // Urutan turun
    return 0; // Jika tanggal sama
  });
}
