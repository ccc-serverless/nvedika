import { useEffect } from "react";
const XLSX = require("xlsx");

export default function SheetDownloader({ data, headers, fileName }) {
  useEffect(() => {
    let wb = XLSX.utils.book_new();

    let ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, `Users_Registeed_`);

    XLSX.writeFile(wb, fileName);
  }, []);

  return <div></div>;
}
