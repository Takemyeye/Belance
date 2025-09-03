import Link from "next/link";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RegHeader() {

  return(
    <div className="reg_header">
      <Link href="/home">
        <FontAwesomeIcon
          icon={faAlignLeft}
          size="2x"
          color="#ffffff"
          style={{ width: "24px", height: "24px" }}
        />
        <h2>Belance</h2>
      </Link>
    </div>
  )
}