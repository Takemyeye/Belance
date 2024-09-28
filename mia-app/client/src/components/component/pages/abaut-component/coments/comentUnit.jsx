import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export function ComentUnit({clientQuote, clientName, clientCompany }) {
  return (
    <div className="coments">
    <div className="clients-container">
      <div className="quoteRight">
        <FontAwesomeIcon icon={faQuoteRight}/>
      </div>
      <h3> {clientQuote} </h3>
    </div>
    <div className="clients">
      <h2> {clientName} </h2>
      <h3> {clientCompany} </h3>
    </div>
  </div>
  );
};