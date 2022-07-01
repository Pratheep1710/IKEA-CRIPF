import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Middleware from "../../store/Middleware";
import Actions from "../../store/Actions";

import "./formInput.styles.scss";

const FORM_FEILDS = {
  textarea: "",
  market: "",
};

function FormInput() {
  const [formInput, setFormInput] = useState(FORM_FEILDS);
  const { textarea, market } = formInput;
  const dispatch = useDispatch();

  console.log(textarea, market);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  // let items;
  // const onKeyPress = (e) => {
  //   console.log(e.key);
  //   if (e.key === "Enter") {
  //     items = textarea.replace(new RegExp("[\r\n]", "gm"), ",");
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textarea, market);
    dispatch(Middleware.getItemsMarketData(textarea, market));
    dispatch(Actions.userInputAction());
  };

  // const submitClick = (result, market) => {
  //   console.log("onsubmit  " + market + "     ------" + result);

  //   dispatch(Middleware.getItemsMarketData(result, market));
  // };

  return (
    <div className="form-container">
      <p>*Kindly fill either the single or multiple market information</p>
      <p className="p-tag">For single market, provide information</p>
      <form onSubmit={handleSubmit} className="input-area">
        <div className="form-field">
          <div className="text-area label-wrapper label-wrapper--text-input">
            <label for="example-id" className="" title="Enter item No.">
              Enter item No.
            </label>
            <div className="text-area__wrapper">
              <textarea
                className="textArea"
                id="example-id"
                aria-describedby="helper-msg-id"
                aria-required="false"
                type="text"
                pattern="[0-9]*"
                placeholder="Example
                00455378
                00478718 "
                name="textarea"
                onChange={handleChange}
                value={textarea}
              ></textarea>
            </div>
          </div>
          <div className="form-field__content">
            <span
              id="helper-msg-id"
              aria-hidden="false"
              className="form-field__message-wrapper"
              type=""
            >
              <span className="form-field__message">(Max of 1000 items)</span>
            </span>
          </div>
        </div>
        <div className="text-field">
          <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
            <label for="example-id" className="" title="Enter market">
              Enter market
            </label>
            <div className="input-field__wrapper">
              <input
                className="input-text"
                type="text"
                id="example-id"
                aria-required="false"
                placeholder="Example:SE"
                name="market"
                onChange={handleChange}
                value={market}
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button
            aria-disabled="false"
            type="submit"
            className="btn btn--small btn--primary"
          >
            <span className="btn__inner">
              <span className="btn__label">Submit</span>
            </span>
          </button>
          <button
            aria-disabled="false"
            type="button"
            className="btn btn--small btn--secondary"
          >
            <span className="btn__inner">
              <span className="btn__label">Clear</span>
            </span>
          </button>
        </div>
      </form>

      <hr className="demo-divider__hr-horizonta2" />
    </div>
  );
}

export default FormInput;
