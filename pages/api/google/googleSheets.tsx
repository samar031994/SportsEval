import { google } from "googleapis";

export const getSheetData = async () => {
  const glAuth = await google.auth.getClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
      private_key_id: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
      //   private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, "\n"), //https://stackoverflow.com/questions/72332485/err-ossl-unsupported-when-trying-to-use-google-spreadsheet-library-with-typscrip
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const glSheets = google.sheets({ version: "v4", auth: glAuth });
  const data = await glSheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
    range: "responses!A:AL",
  });
  const sheetInfo = data.data.values.filter((row) => {
    return row[0] !== ''
  })
  return sheetInfo.slice(1);
};
