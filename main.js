function addPage(page, book) {
  // Create a new element for this page
  var element = $("<div />", {});

  // Add the page to the flipbook
  if (book.turn("addPage", element, page)) {
    // Add the initial HTML
    // It will contain a loader indicator and a gradient
    element.html('<div class="gradient"></div><div class="loader"></div>');

    // Load the page
    loadPage(page, element);
  }
}

function loadPage(page, pageElement) {
  // Create an image element

  var img = $("<img />");

  img.mousedown(function (e) {
    e.preventDefault();
  });

  img.load(function () {
    // Set the size
    $(this).css({ width: "100%", height: "100%" });

    // Add the image to the page after loaded

    $(this).appendTo(pageElement);

    // Remove the loader indicator

    pageElement.find(".loader").remove();
  });

  // Load the page

  img.attr("src", "pages/" + page + ".png");
}

function loadLargePage(page, pageElement) {
  var img = $("<img />");

  img.load(function () {
    var prevImg = pageElement.find("img");
    $(this).css({ width: "100%", height: "100%" });
    $(this).appendTo(pageElement);
    prevImg.remove();
  });

  // Loadnew page

  img.attr("src", "pages/" + page + "-large.png");
}

function loadSmallPage(page, pageElement) {
  var img = pageElement.find("img");

  img.css({ width: "100%", height: "100%" });

  img.unbind("load");
  // Loadnew page

  img.attr("src", "pages/" + page + ".png");
}

// http://code.google.com/p/chromium/issues/detail?id=128488
function isChrome() {
  return navigator.userAgent.indexOf("Chrome") != -1;
}

let imagesSize = 52;

const grid = document.getElementById("pages");

for (let i = 1; i <= imagesSize; i++) {
  let imPath = "./pages/" + i + ".png";
  let div = document.createElement("div");
  let style = "background-image: url(" + imPath + ")";
  div.setAttribute("style", style);
  grid.appendChild(div);
}
