// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    {title:"Peaceful", artist: "john smith", genre: "R&B" },
    {title:"Heaven", artist: "", genre: "Rock" },
    {title:"Calling My Phone", artist: "Lil Tjay", genre: "Pop" },
    {title:"Good Girls", artist: "Edwin Brown", genre: "Rock" },
    {title:"Get You The Moon", artist: "Kina", genre: "R&B" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return Object.entries(guardians).map(([guardian, genre ])=> {
        const playlist =songs.filter(song => song.genre === genre)
        
        
        return {
            guardian,  // Guardian's name
            genre,     // Guardian's preferred genre
            playlist
        };
    });
}

// Generate playlists for each Gurdian
const personalisedPlaylists = generatePlaylist(guardians, songs);

function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlist');

    playlistsContainer.innerHTML = '';

    playlists.forEach(playlist => {
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');

        const playlistHeader = document.createElement('h3');
        playlistHeader.innerText = `${playlist.guardian}'s Playlist (${playlist.genre})`;

        const songsList = document.createElement('ul');
        playlist.playlist.forEach(song => {
            const songItem = document.createElement('li');
            songItem.innerText = `"${song.title}" by ${song.artist}`;
            songsList.appendChild(songItem);
        });

            // Append the header and songs list to the playlist div
            playlistDiv.appendChild(playlistHeader);
            playlistDiv.appendChild(songsList);
    
            // Append the playlist div to the main container
            playlistsContainer.appendChild(playlistDiv);
});
}

console.log(personalisedPlaylists);
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);