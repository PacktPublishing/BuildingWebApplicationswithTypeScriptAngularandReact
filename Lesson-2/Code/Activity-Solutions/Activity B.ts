import { Component } from '@angular/core';

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

@Component({
  selector: 'app-root',
  template: `
    {{ display }}
    <div style="flex: 1">
      <button (click)="previousTrack()">Previous</button>
      <button *ngIf="!isPlaying" (click)="play()">Play</button>
      <button *ngIf="isPlaying" (click)="pause()">Pause</button>
      <button (click)="nextTrack()">Next</button>
    </div>
    <div style="flex:1">
      <ul>
        <li *ngFor="let track of tracks">
          {{ track.title }} <span *ngIf="track == currentTrack">&lt;</span>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: 'app';
    tracks: Array<Track>;
    currentTrackIndex: number;
    playbackState: MediaPlayerState;

    constructor() {
        this.tracks = new Array<Track>();
        for(let i = 0; i < 10; i++) {
          this.tracks.push(new Track(`Example Song ${i}`));
        }
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

    get isPlaying() {
      return this.state == MediaPlayerState.Playing;
    }
    
    get display() {
        return `${this.currentTrack.title} - ${MediaPlayerState[this.state]}`;
    }
}
