import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";
import Information from "./information";

export function AboutContainer () {
  return (
    <div className="main-container">
      <div className="main">
        <LeftPanel/>
        <RightPanel/>
      </div>
      <Information/>
    </div>
  )
}