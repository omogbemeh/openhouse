import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return <div>{error.message || error.statusText}</div>;
};

export default ErrorPage;
