import * as actions from "../actionTypes/lyricsActionTypes";

export interface LyricsState {
  lyrics: string;
}

const initialState: LyricsState = {
  lyrics: ""
};

export default function lyricsReducer(
  state: LyricsState = initialState,
  action: actions.LyricsAction
): LyricsState {
  switch (action.type) {
    case actions.SET_LYRICS:
    case actions.GET_LYRICS_SUCCESS:
      return {
        lyrics: action.lyrics
      };
    default:
      return state;
  }
}
