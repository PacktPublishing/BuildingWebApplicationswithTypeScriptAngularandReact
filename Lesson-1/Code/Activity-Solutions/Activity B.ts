enum MediaPlayerState {
    Stopped,
    Playing,
    Paused
}

class Track {
    public title: string;

    constructor(title: string) {
        this.title = title;
    }
}

class MediaPlayer {
    private tracks: Array<Track>;
    private currentTrackIndex: number;
    private playbackState: MediaPlayerState;

    constructor() {
        this.tracks = new Array<Track>();
        this.playbackState = MediaPlayerState.Stopped;
        this.currentTrackIndex = 0;
    }

    addTrack(track: Track) {
        this.tracks.push(track);
    }

    play() {
        this.playbackState = MediaPlayerState.Playing;
    }

    pause() {
        this.playbackState = MediaPlayerState.Paused;
    }

    nextTrack() {
        this.currentTrackIndex = Math.min(this.tracks.length - 1, this.currentTrackIndex + 1);
    }

    previousTrack() {
        this.currentTrackIndex = Math.max(0, this.currentTrackIndex - 1); 
    }

    get state() {
        return this.playbackState;
    }

    get currentTrack() {
        return this.tracks[this.currentTrackIndex];
    }

    get display() {
        return `${this.currentTrack.title} - ${MediaPlayerState[this.state]}`;
    }
}

const mediaPlayer = new MediaPlayer();
mediaPlayer.addTrack(new Track("Hello, world!"));
mediaPlayer.addTrack(new Track("This is my jam."));
mediaPlayer.play();
console.log(mediaPlayer.display);
mediaPlayer.nextTrack();
console.log(mediaPlayer.display);
mediaPlayer.previousTrack();
mediaPlayer.pause();
console.log(mediaPlayer.display);
