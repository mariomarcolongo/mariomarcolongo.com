import V from '../../data/video-artifacts.json';
import M from '../../data/work-media.json';
import R from '../../data/reel-artifacts.json';
export { V, M, R };
export const featuredVideos=M.featuredVideoIds.map(id=>V.videos.items.find(v=>v.id===id)!);
export const aircReels=R.items.filter(r=>r.airc);
