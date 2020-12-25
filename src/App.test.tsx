import React from "react";
import App from "./App";
import { configure, HTMLAttributes, mount, ReactWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Fixes to work with Polaris
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("<App />", () => {
  configure({ adapter: new Adapter() });
  const app = mount(<App />);

  describe("search input", () => {
    const movieSearchInput = app.find('input[type="search"]');

    it("should be present", () => {
      expect(movieSearchInput).toBeTruthy();
    });
  });

  describe("search button", () => {
    const searchButton = app.find("#search-button");

    it("should populate movie results on click when input is valid", () => {
      app.find('input[type="search"]').simulate("change", {
        target: {
          value: "validpassword",
        },
      });

      searchButton.simulate('click');

      const movieResults = app.find('#seach-results');
      expect(movieResults).toBeTruthy();
    });
  });
});
