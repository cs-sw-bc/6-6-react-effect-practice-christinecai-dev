# Assignment — iTunes Search App

Build a music search app using the iTunes API that lets users search for an artist or song and displays the results as a grid of track cards.

---

## API

```
https://itunes.apple.com/search?term=SEARCH_TERM&media=music&limit=10
```

Replace `SEARCH_TERM` with whatever the user typed. Each result in `response.results` contains:

| Field | Description |
|---|---|
| `trackName` | Song title |
| `artistName` | Artist name |
| `collectionName` | Album name |
| `artworkUrl100` | Album art image |
| `primaryGenreName` | Genre |
| `previewUrl` | 30 second audio preview |

---

## Starter File

Open `ItunesSearch.jsx`. The `TrackCard` component and the search form are already built. You are filling in the data fetching logic.

---

## Steps

**1. Declare your state variables**

You need three:
- one for the list of tracks
- one for the loading state
- one for any error message

**2. Write the fetch logic inside `handleSearch`**

- Build the URL by inserting `searchTerm` into the API URL above
- Use `async/await` with `try/catch/finally`
- Check `response.ok` before calling `.json()`
- The tracks array lives at `response.results`
- Set your state variables accordingly

**3. Handle the loading state**

While the fetch is in progress, render a loading indicator. Use MUI's `CircularProgress` component — find it at [mui.com](https://mui.com/material-ui/react-progress/).

**4. Handle the error state**

If the fetch fails, render the error message on screen.

**5. Render the results**

Use `.map()` over your tracks state to render a `TrackCard` for each result. Pass `title`, `artist`, `album`, `image`, and `genre` as props — check the `TrackCard` component at the top of the file to see what it expects.

---

## Expected Result

- Typing an artist name and clicking Search fetches and displays up to 10 track cards
- Each card shows the album art, song title, artist, and genre
- A loading spinner appears while the request is in progress
- A readable error message appears if the request fails
- Searching again replaces the previous results

---

## Bonus

- Add a result count e.g. `10 results for "Coldplay"`
- Use the `previewUrl` to add an audio player to each card so users can preview the track
- Disable the search button while loading so the user can't submit twice
