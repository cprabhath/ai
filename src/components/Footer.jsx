import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setYear(year);
  }, []);

  return (
    <footer className="bg-body-tertiary text-center mt-1">
      <div className="text-center p-3">
        © {year} Copyright <br/> Design and Developed By: {""}
        <a className="text-body fw-bold" href="https://cprabhath.github.io/" target="_blank" rel="noreferrer">
          Prabhath Hettiarachchi
        </a> | 
        version 1.2.1
      </div>
    </footer>
  );
};

export default Footer;
