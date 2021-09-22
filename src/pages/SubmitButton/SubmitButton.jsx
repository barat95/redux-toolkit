import React from "react";
import { Button, Spinner } from "react-bootstrap";

const SubmitButton = ({loader, text, buttonClass=""}) => {
  return (
    <Button type="submit" variant="primary" className={buttonClass} disabled={loader && true}>
      {loader && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}
      <span className="pl-1">{text}</span>
    </Button>
  );
};

export default React.memo(SubmitButton);
