function init(): void {
  const csvParser = require("csv-parser");
  const fs = require("fs");
  const results: any = [];
  fs.createReadStream("distassets\4 vehs - Sheet1.csv")
    .pipe(csvParser())
    .on(
      "data",
      (data) => {
        results.push(data).on("end", () => {
          console.log(results);
        });
      },
      (err) => {
        console.log(err.message);
      }
    );
}
