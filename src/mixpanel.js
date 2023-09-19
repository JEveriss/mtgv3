import mixpanel from "mixpanel-browser";

export function colourSelected(click) {
  mixpanel.track("Colour Selected", {
    "Colour Selected": click,
  });
}

export function newCardButtonClicked(cardData) {
  mixpanel.track("New Card Button Clicked", {
    "Card Name": cardData.name,
    "Card Type": cardData.type_line,
    "Card Artist": cardData.artist,
    "Card Colour": cardData.colors,
    "Link to Card": cardData.scryfall_uri
  });
}

export function cardArtStatus(status){
  mixpanel.track("Art Modal Opened", {
    "Modal Status": status,
  })
}

