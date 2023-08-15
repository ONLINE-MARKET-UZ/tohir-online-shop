import React from "react";

import "./style.scss";
const index = () => {
  return (
    <section className="offerformsec h-[446px] mt-[51px] rounder-lg">
      <ul>
        <li>
          <ul>
            <h2></h2>
            <p></p>
          </ul>
        </li>
        <li>
          <ul>
            <h3></h3>
            <input type="text" />
            <textarea ></textarea>
            <input type="number" placeholder="Quantity" />
            <select name="" id="">
                <option value="Pcs">Pcs</option>
                <option value="Pcs">Pcs</option>

            </select>
            <button>Send inquiry</button>
          </ul>
        </li>
      </ul>
    </section>
  );
};
export default index;
