async function fetchZenQuote() {
  const url = "https://zenquotes.io/api/random";
  const quote =
    "Just one small positive thought in the morning can change your whole day.”";
  const author = "Shaja Nasir";
  try {
    const response = await fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    const quote = data[0].q;
    console.log(data);
    const author = data[0].a;
    // const affirmationElement = document.getElementById("dailyAffirmation");
    // affirmationElement.textContent = quote;

    // const authorElement = document.getElementById("author");
    // authorElement.textContent = author;
  } catch (error) {
    console.log("Error fetching Zen quote:", error);
  }
  const affirmationElement = document.getElementById("dailyAffirmation");
  affirmationElement.textContent = quote;
  const authorElement = document.getElementById("author");
  authorElement.textContent = author;
}

fetchZenQuote();
