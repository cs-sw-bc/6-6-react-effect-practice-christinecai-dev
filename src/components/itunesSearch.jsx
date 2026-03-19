import { useState } from "react";

// iTunes Search API
// https://itunes.apple.com/search?term=SEARCH_TERM&media=music&limit=10
//
// Each track in response.results has:
//   trackName        — song title
//   artistName       — artist name
//   collectionName   — album name
//   artworkUrl100    — album art image (100x100)
//   primaryGenreName — genre
//   previewUrl       — 30 second audio preview URL

// ─── TrackCard component ──────────────────────────────────────────────────────
function TrackCard({ title, artist, album, image, genre }) {
  return (
    <div style={{
      width: "180px",
      border: "1px solid #eee",
      borderRadius: "10px",
      overflow: "hidden",
      background: "#fff",
    }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <p style={{ fontWeight: "500", fontSize: "14px", margin: "0 0 4px" }}>{title}</p>
        <p style={{ fontSize: "12px", color: "#888", margin: "0 0 2px" }}>{artist}</p>
        <p style={{ fontSize: "11px", color: "#aaa", margin: 0 }}>{genre}</p>
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

export default function ItunesSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  // TODO 1: Declare state variables for tracks, loading, and error

  // TODO 2: Write a useEffect that fetches when the component mounts
  //         OR write a handleSearch function that fetches on form submit
  //         - Build the URL using searchTerm
  //         - Use async / await with try / catch / finally
  //         - Check response.ok before parsing JSON
  //         - The tracks live in response.results

  // TODO 3: Handle loading state — render a loading indicator
  // TODO 4: Handle error state — render an error message

  function handleSearch(e) {
    e.preventDefault();
    // TODO: trigger your fetch here
  }

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "780px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "4px" }}>iTunes Search</h1>
      <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px" }}>Search for an artist or song</p>

      {/* Search form */}
      <form
        onSubmit={handleSearch}
        style={{ display: "flex", gap: "8px", marginBottom: "24px" }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="e.g. Taylor Swift, Coldplay..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#111",
            color: "#fff",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* TODO 5: Render TrackCards here once you have data
                 Use a .map() over your tracks state
                 Pass title, artist, album, image, genre as props to each TrackCard */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>

      </div>

    </div>
  );
}