import { useState, useEffect } from "react";

/** Returns a status string to be used in the input component, 
 * that repesent the input status (neutral, success, error)
 * @param {Object} isError
 * @returns {string} status
 */
export const useInputStatus = (isError) => {
  const [status, setStatus] = useState("");

  const updateStatus = () => {
    if (status === "") {
      setStatus("neutral");
      return;
    }

    if (isError) {
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  useEffect(updateStatus, [isError]);

  return { status };
};
