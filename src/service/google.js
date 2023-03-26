const { auth } = require("google-auth-library");
const { google } = require("googleapis");
const sheets = google.sheets("v4");

function getClient() {
  return auth.fromAPIKey(process.env.GOOGLE_API_KEY);
}

async function getSheetData(id) {
  const client = getClient();

  const request = {
    spreadsheetId: id,
    range: "Sheet1!A2:C",
    auth: client,
  };

  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;
    return response;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getSheetData };
