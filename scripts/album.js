var createSongRow = function(songNumber, songName, songLength) {
                 var template =
                    '<tr class="album-view-song-item">'
                  + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>' 
                  + '  <td class="song-item-title">' + songName + '</td>'
                  + '  <td class="song-item-duration">' + songLength + '</td>'
                  + '</tr>'
                  ;

             
              var $row = $(template);
             
        

    var clickHandler = function() {
         // clickHandler logic
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
   currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
             updatePlayerBarSong();
	} 
 
  else if (currentlyPlayingSong === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		$(this).html(playButtonTemplate);
    $('.main-controls .play-pause').html(playerBarPlayButton);
		currentlyPlayingSong = null;
    currentSongFromAlbum = null;
	}
};
     };


        var onHover = function(event) {
            // Placeholder for function logic
             var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

          if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
    };
        };


        var offHover = function(event) {
         // Placeholder for function logic
            var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        } 
        };

  // #1
        $row.find('.song-item-number').click(clickHandler);
      // #2
        $row.hover(onHover, offHover);
      // #3
        return $row;   
      
       };


     
            var setCurrentAlbum = function(album) {
              currentAlbum = album;    

             
            // #1
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');

     
                 // #2
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);




                 // #3
     $albumSongList.empty();



               // #4
                 for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);

                 }
             };

 
     var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };


var updatePlayerBarSong = function() {

    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
    $('.main-controls .play-pause').html(playerBarPauseButton);
 
    
};
              
              
           

            var playerBarPlayButton = '<span class="ion-play"></span>';
            var playerBarPauseButton = '<span class="ion-pause"></span>';

           
            
            
            var currentAlbum = null;
            var currentSongFromAlbum = null;

           var $previousButton = $('.main-controls .previous');
           var $nextButton = $('.main-controls .next');

             $(document).ready(function() {
                    setCurrentAlbum(albumPicasso);
                    $previousButton.click(previousSong);
                    $nextButton.click(nextSong);


             }
             var albums =[albumPicasso, albumMarconi, albumEagles];
             var index =1;


              albumImage.addEventListener("click",function(event){
              setCurrentAlbum(album[index]);
              index++;
              if(index == album.length){
               index=0;
              }
           )};
        };