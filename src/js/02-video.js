import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VCT_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
  localStorage.setItem(currentTime, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

try {
  player.setCurrentTime(JSON.parse(localStorage.getItem(VCT_KEY)) || 0);
} catch (error) {
  console.log(error);
}
