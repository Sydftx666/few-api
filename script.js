var inputBox;
var inputButton;
var result;

function setup() {
  inputBox = createInput("");
  inputButton = createButton("search");
  inputButton.mousePressed(changedInput);
  let cnv = createCanvas(400, 400);
  // cnv.position (100,200,'fixed')
}

function changedInput() {
  let query = inputBox.value();
  let secret = "QiiTg9XiQfGoV5jNnsAXi0WOAq3qJSkV";
  let server = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  let url = server + "?q=" + query + "&api-key=" + secret;
  loadJSON(url, gotData);
}

function gotData(data) {
  for (var i = 0; i < data.response.docs.length; i++) {
    var headline = data.response.docs[i].headline.main;
    console.log(headline);
    text(headline, 5, i * 15);
  }
}

// function draw() {
//   background(255);
//   inputBox.position(50, 250);
//   inputBox.size(150, 20);
//   inputButton.position(250, 250);
//   inputButton.size(80, 25);
// }
