import { Spinner } from "react-bootstrap";

function Loading ({ className }) {
  return (
    <div className={`text-center w-100 ${className}`}>
      <Spinner animation="grow" variant="primary" size="sm" />
      <Spinner className="mx-2" animation="grow" variant="secondary" size="sm" />
      <Spinner animation="grow" variant="success" size="sm" />
    </div>
  )
}

export default Loading;
