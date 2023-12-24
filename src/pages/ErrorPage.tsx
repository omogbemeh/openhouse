import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const ErrorPage = () => {
  return (
    <>
      <h2 className="center-text my-4">
        Sorry, the page, your are looking for does not exist
      </h2>
      <Button className="mx-auto">
        <Link className="text-white" to="/">
          Go The Home Page
        </Link>
      </Button>
    </>
  );
};

export default ErrorPage;
