import React from "react";
import { ArtistLinkWrapper } from "./ArtistLink.style";

function ArtistLink({ item }) {
  return (
    <ArtistLinkWrapper>
      <div className="artistDetails">
        <h2>art by {item.artist}</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.google.com/search?q=${item.artist} art`}
        >
          <div className="italicText">Search {item.artist} on Google</div>
        </a>
      </div>
    </ArtistLinkWrapper>
  );
}

export default ArtistLink;
