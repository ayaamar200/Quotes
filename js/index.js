//!.................. Loader Animation ..................//!
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

//!.................. Random Quote Generator ..................//!

var usedQuotes = new Set();
var listOfQuotes = [
  {
    quote:
      " “In three words I can sum up everything I've learned about life: it goes on.” ",
    author: "Robert Frost",
  },

  {
    quote: " “If you tell the truth, you don't have to remember anything.” ",
    author: "Mark Twain",
  },

  {
    quote:
      " “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ",
    author: "Maya Angelou",
  },

  {
    quote:
      " “A friend is someone who knows all about you and still loves you.” ",
    author: "Elbert Hubbard",
  },

  {
    quote:
      " “Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.” ",
    author: "Marilyn Monroe",
  },

  {
    quote:
      " “As he read, I fell in love the way you fall asleep: slowly, and then all at once.” ",
    author: "John Green",
  },

  {
    quote:
      " “Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.” ",
    author: "Bill Keane",
  },

  {
    quote:
      " “Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.” ",
    author: "Lao Tzu",
  },

  {
    quote:
      " “We shouldn't be looking for heroes, we should be looking for good ideas.” ",
    author: "Noam Chomsky",
  },

  {
    quote: " “It is never too late to be what you might have been.” ",
    author: "George Eliot",
  },
];

// Function to generate a random unique quote
function generateQuote() {
  if (usedQuotes.size === listOfQuotes.length) {
    // Reset the set once all quotes have been used
    usedQuotes.clear();
    alert("All quotes have been shown! Reshuffling...");
  }

  // Ensure the quote hasn't been used
  var randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * listOfQuotes.length); // Generate a random Number
  } while (usedQuotes.has(randomNumber));

  // Mark this quote as used
  usedQuotes.add(randomNumber);

  // Display the quote
  document.getElementById("quote").innerHTML = listOfQuotes[randomNumber].quote;

  // Display the quote Author
  document.getElementById("quoteAuthor").innerHTML =
    listOfQuotes[randomNumber].author;
}
