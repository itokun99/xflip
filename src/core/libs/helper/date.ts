export function formatDate(dateString: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0"); // Tambahkan nol di depan jika hari kurang dari 10
  const month = months[date.getMonth()]; // Ambil nama bulan dari array
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
