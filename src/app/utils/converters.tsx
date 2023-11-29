// export function formatDate(data: string) {
//   if (data) {
//     const inputDate = new Date(data);
//     const formattedDate = new Intl.DateTimeFormat("en-GB", {
//       day: "numeric",
//       month: "numeric",
//       year: "numeric",
//     }).format(inputDate);

//     return formattedDate;
//   }
//   return new Date().toISOString().split("T")[0];
// }
export function formatDateToInput(data: string) {
  if (data) {
    return new Date(data).toISOString().split('T')[0]
  }
  return new Date().toISOString().split('T')[0]
}

export function formatDate(data: string) {
  if (data) {
    const inputDate = new Date(data);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).format(inputDate);

    return formattedDate;
  }
  return new Date().toISOString().split("T")[0];
}

