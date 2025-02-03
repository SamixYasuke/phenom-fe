const API_KEY = "$2a$10$RWtdv8ayQT1c82vtr2xoV.N9h1YvfpiSioSGGtLwrIQZ3ad7fdvmO";
let BIN_ID = "67a1366facd3cb34a8d7cb71";
const BASE_URL = "https://api.jsonbin.io/v3";

// Initialize bin with default structure if BIN_ID is missing
async function initializeBin() {
  if (!BIN_ID) {
    console.log("Creating a new JSONBin...");
    const response = await fetch(`${BASE_URL}/b`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
      body: JSON.stringify({ socialLinks: [], coupon: "" }),
    });

    const json = await response.json();
    BIN_ID = json.metadata.id;
    console.log("New Bin ID:", BIN_ID);

    // In production, you should manually update .env.local with this BIN_ID
  }
}

// Fetch data from JSONBin
async function fetchData() {
  await initializeBin();
  const response = await fetch(`${BASE_URL}/b/${BIN_ID}/latest`, {
    headers: { "X-Master-Key": API_KEY },
  });
  const json = await response.json();
  return json.record;
}

// Update data in JSONBin
async function updateData(newData) {
  await fetch(`${BASE_URL}/b/${BIN_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify(newData),
  });
}

export { fetchData, updateData };
