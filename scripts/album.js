<<<<<<< HEAD
<<<<<<< HEAD
// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };
=======
var createSongRow = function(songNumber, songName, songLength) {
                 var template =
                    '<tr class="album-view-song-item">'
                  + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>' 
                  + '  <td class="song-item-title">' + songName + '</td>'
                  + '  <td class="song-item-duration">' + songLength + '</td>'
                  + '</tr>'
                  ;
>>>>>>> checkpoint19

 // Another Example Album
 var albumMstowe = {
     title: 'Narcissism',
     artist: 'Mike Stowe',
     label: 'ME',
     year: '1991',
     albumArtUrl: 'assets/images/album_covers/10.png',
     songs: [
         { title: 'Birth', duration: '3:42' },
         { title: 'The perfect baby', duration: '2:45' },
         { title: 'Early signs of genius', duration: '4:54'},
         { title: 'Bad boy phase', duration: '0:51' },
         { title: 'Continued genius', duration: '13:28'},
         { title: 'Death', duration: '3:19'},
         { title: 'Legacy', duration: '9:46'}
     ]
=======
 // Example Album
var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
   { title: 'Blue', duration: '4:26' },
   { title: 'Green', duration: '3:14' },
   { title: 'Red', duration: '5:01' },
   { title: 'Pink', duration: '3:21'},
   { title: 'Magenta', duration: '2:15'}
  ]
 };
 
 // Another Example Album
var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
   { title: 'Hello, Operator?', duration: '1:01' },
   { title: 'Ring, ring, ring', duration: '5:01' },
   { title: 'Fits in your pocket', duration: '3:21'},
   { title: 'Can you hear me now?', duration: '3:14' },
   { title: 'Wrong phone number', duration: '2:15'}
  ]
 };

 // Another Example Album
var albumMstowe = {
  title: 'Narcissism',
  artist: 'Mike Stowe',
  label: 'ME',
  year: '1991',
  albumArtUrl: 'assets/images/album_covers/10.png',
  songs: [
   { title: 'Birth', duration: '3:42' },
   { title: 'The perfect baby', duration: '2:45' },
   { title: 'Early signs of genius', duration: '4:54'},
   { title: 'Bad boy phase', duration: '0:51' },
   { title: 'Continued genius', duration: '13:28'},
   { title: 'Death', duration: '3:19'},
   { title: 'Legacy', duration: '9:46'}
  ]
>>>>>>> checkpoint18
 };

var albums = [albumPicasso, albumMarconi, albumMstowe];
var currentAlbum = 0;

<<<<<<< HEAD
var createSongRow = function(songNumber, songName, songLength) {
     var template =
=======
var createSongRow = function (songNumber, songName, songLength) {
  var template =
>>>>>>> checkpoint18
        '<tr class="album-view-song-item">'
     + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
<<<<<<< HEAD
     var $row = $(template);
 
      var clickHandler = function() {
         var songNumber = $(this).attr('data-song-number');

	if (currentlyPlayingSong !== null) {
		// Revert to song number for currently playing song because user started playing new song.
		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
		currentlyPlayingCell.html(currentlyPlayingSong);
	}
	if (currentlyPlayingSong !== songNumber) {
		// Switch from Play -> Pause button to indicate new song is playing.
		$(this).html(pauseButtonTemplate);
		currentlyPlayingSong = songNumber;
	} else if (currentlyPlayingSong === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		$(this).html(playButtonTemplate);
		currentlyPlayingSong = null;
	}// clickHandler logic
     };

 
     var onHover = function(event) {
         var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
     };
     var offHover = function(event) {
         var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
     };
 
     $row.find('.song-item-number').click(clickHandler);
     
     $row.hover(onHover, offHover);
     
     return $row;
 };

var setCurrentAlbum = function(album) {
     
      var $albumTitle = $('.album-view-title');
=======
  
  var $row = $(template);
 
  var clickHandler = function () {
         // clickHandler logic
   };
 
  
  var onHover = function (event) {
         // Placeholder for function logic
   };
  var offHover = function (event) {
         // Placeholder for function logic
   };
 
      //#1
  $row.find('.song-item-number').click(clickHandler);
     // #2
  $row.hover(onHover, offHover);
     // #3
  return $row;
 };

  

<<<<<<< HEAD
var setCurrentAlbum = function (album) {
     
=======
     
            var setCurrentAlbum = function(album) {
              currentAlbum = album;    

             
            // #1
>>>>>>> checkpoint19
     var $albumTitle = $('.album-view-title');
>>>>>>> checkpoint18
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
<<<<<<< HEAD
 
 
      $albumTitle.text(album.title);
=======

     
                 // #2
     $albumTitle.text(album.title);
>>>>>>> checkpoint19
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
 

      $albumSongList.empty();

     for (var i = 0; i < album.songs.length; i++) {
              var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };
<<<<<<< HEAD
     var clickHandler = function() {
         // clickHandler logic
     };


<<<<<<< HEAD
=======
var updatePlayerBarSong = function() {

    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
    $('.main-controls .play-pause').html(playerBarPauseButton);
 
    
};
              
              
           
>>>>>>> checkpoint19

=======

<<<<<<< HEAD
=======
           
            
            
            var currentAlbum = null;
            var currentSongFromAlbum = null;
>>>>>>> checkpoint19



    

>>>>>>> checkpoint18
 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>'; 
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 var currentlyPlayingSong = null;

<<<<<<< HEAD
 
   $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
    
<<<<<<< HEAD
   });

document.getElementsByClassName('album-cover-art')[0].onclick = function () {
=======
     
     
   
  });

 document.getElementsByClassName('album-cover-art')[0].onclick = function () {
>>>>>>> checkpoint18
    for (var i = 0; i < albums.length; i++) {
        if (albums[i] == currentAlbum) {
            setCurrentAlbum(albums[(i+1)%albums.length]);
            break;
        }
    }
<<<<<<< HEAD
 };
=======
 };
>>>>>>> checkpoint18
=======
              albumImage.addEventListener("click",function(event){
              setCurrentAlbum(album[index]);
              index++;
              if(index == album.length){
               index=0;
              }
           )};
        };
>>>>>>> checkpoint19
