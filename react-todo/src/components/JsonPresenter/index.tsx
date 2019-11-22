import React, { useState } from "react";
import { Api } from "../../config/Api";

export const JsonPresenter = () => {
  const api = new Api();
  const [fileContent, setFileContent] = useState("");

  const call = async () => {
    const { message } = await api.getWelcomeMessage();
    setFileContent(message);
  };

  return (
    <>
      <div>elo</div>
      <button onClick={call}>Call API</button>
      {fileContent && (
        <div className="json-presenter__message">{fileContent} </div>
      )}
    </>
  );
};
