import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setYear(year);
  }, []);

  return (
    <footer className="bg-body-tertiary text-center mt-1 text-black">
      <div className="text-center p-3 text-black">
        © {year} Copyright <br/> Design and Developed By: {""}
        <a className="text-body fw-bold text-black" href="https://cprabhath.github.io/" target="_blank" rel="noreferrer">
          Prabhath Hettiarachchi
        </a> | 
        version 1.3.0
      </div>
    </footer>
  );
};

export default Footer;
