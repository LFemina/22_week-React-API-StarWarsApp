import React from "react";

const Loading = () => <div id="loading" className="reqItems">Идёт загрузка...</div>;
const Result = ({ result }) => <div id="result" className="result">{result}</div>;
const Error = ({ error }) => <div id="error" className="error reqItems">{error}</div>;

export { Loading, Result, Error };