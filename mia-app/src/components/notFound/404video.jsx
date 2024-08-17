const video = "video/landingVideo.mp4";

export function Video404 () {
  return (
    <div className="landing-video">
      <video src={video} autoPlay loop muted playsInline></video>
      <div class="video-overlay"></div>
      <div class="video-overlay video-overlay--top"></div>
    </div>
  )
}