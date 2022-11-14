import { useParams } from "react-router-dom";

export function Contact() {
  let { contactId } = useParams();

  return (
    <div>
      <h1>{`Contact Page ${contactId}`}</h1>
    </div>
  );
}
