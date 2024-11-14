"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      isDarkMode ? "#ededed" : "#0a0a0a"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      isDarkMode ? "#0a0a0a" : "#ededed"
    );
  }, [isDarkMode]);

  return (
    <StyledWrapper>
      <input
        type="checkbox"
        className="theme-checkbox"
        id="btn-theme"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .theme-checkbox {
    --toggle-size: 16px;
    appearance: none;
    margin-top: 6.4px;
    width: 4.25em;
    height: 2.125em;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 0;
    transition: 0.4s;
    border-radius: 99em;
    position: relative;
    cursor: pointer;
    font-size: var(--toggle-size);
  }

  .theme-checkbox::before {
    content: "";
    width: 1.25em;
    height: 1.25em;
    position: absolute;
    top: 0.438em;
    left: 0.438em;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 100%;
    border-radius: 50%;
    transition: 0.4s;
  }

  .theme-checkbox:checked::before {
    left: calc(100% - 1.25em - 0.438em);
    background-position: 0;
  }

  .theme-checkbox:checked {
    background-position: 100%;
  }
`;

export default Switch;
