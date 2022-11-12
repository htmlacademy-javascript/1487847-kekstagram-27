import {createPhotos} from './data.js';
import {createMiniatures} from './PhotoUserList.js';

const miniatures = createPhotos();
// console.log(miniatures)
createMiniatures(miniatures);


