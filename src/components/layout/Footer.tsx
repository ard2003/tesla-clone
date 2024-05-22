import React from "react";

export const Footer = () => {
  return (
    <footer className=" flex  bg-black text-white justify-center p-8 font-medium text-sm flex-col space-y-8">
      <div className="  flex-row justify-center  text-center">
        <ul className=" space-y-4 ">
          <li>
            <p>
              ¹ Excludes taxes and fees with price subject to change. Available
              in select states and requires credit <br /> approval. Est. gas
              savings is $100/month. <br /> See Details
            </p>
          </li>

          <li>
            <p>
              Price before estimated savings is $38,990, excluding taxes and
              fees. Subject to change. <br />
              Learn about est. gas savings.
            </p>
          </li>

          <li>
            <p>
              ³ Price before estimated savings is $77,990, excluding taxes and
              fees. Subject to change. <br />
              Learn about est. gas savings.
            </p>
          </li>

          <li>
            <p>
              ⁴ Price before estimated savings is $72,990, excluding taxes and
              fees. Subject to change. <br />
              Learn about est. gas savings.
            </p>
          </li>
        </ul>
      </div>

      <div className=" flex justify-center ">
        <ul className="  md:flex flex-wrap space-x-3  flex-row space-y-2">
          <li>
            <p>Tesla © 2024</p>
          </li>
          <li>
            <p>Privacy & Legal</p>
          </li>
          <li>
            <p>Vehicle Recalls</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <p>News</p>
          </li>
          <li>
            {" "}
            <p>Get Updates</p>
          </li>
          <li>
            {" "}
            <p>Locations</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};
