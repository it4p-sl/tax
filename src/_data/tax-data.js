const { getSheetData } = require("../service/google");

module.exports = async function () {
  const data = await getSheetData(process.env.SHEET_ID);
  return data.values;
};
