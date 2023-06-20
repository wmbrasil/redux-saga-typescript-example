import React, { FunctionComponent } from "react";

import Lyrics from "./lyrics/LyricsContainer";
import Search from "./search/SearchContainer";

const App: FunctionComponent = props => {
  return (
    <div>
      <h1>Lyrics Search</h1>
      <Search />
      <Lyrics />
    </div>
  );
};

export default App;
