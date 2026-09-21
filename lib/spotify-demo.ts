export const tracks = [
  { title: 'Under Ground Kings', artist: 'Drake', image: '/assets/drake cover.jpg' },
  { title: 'The Color Violet', artist: 'Tory Lanez', image: '/assets/tory-cover.png' },
  { title: 'Funky Friday', artist: 'Dave', image: '/assets/DaveFredoFunkyFriday.png' },
  { title: 'Jungle', artist: 'Drake', image: '/assets/jungle-cover.jpg' },
]

// Preserve the original card's display duration for this visual demo.
export const demoDuration = 174
export const initialElapsed = 131

export function getDemoPlayback(elapsedSeconds: number) {
  const elapsed = Math.max(0, elapsedSeconds)
  return {
    trackIndex: Math.floor(elapsed / demoDuration) % tracks.length,
    position: elapsed % demoDuration,
  }
}

export function formatTime(seconds: number) {
  const wholeSeconds = Math.floor(seconds)
  return `${Math.floor(wholeSeconds / 60).toString().padStart(2, '0')}:${(wholeSeconds % 60).toString().padStart(2, '0')}`
}
