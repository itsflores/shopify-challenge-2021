import React from "react";
import App from "./App";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { searchMock } from "./mock/mockrequest";

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

  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(searchMock);
  });

  describe("search input", () => {
    const movieSearchInput = app.find('input[type="search"]');

    it("should be present", () => {
      expect(movieSearchInput).toBeTruthy();
    });
  });

  describe("search button", () => {
    const searchButton = app.find("#search-button").at(0);

    it("should populate movie results on click when input is valid", () => {
      searchButton.prop('onClick');

      const movieResults = app.find('#search-results');
      expect(movieResults).toBeTruthy();
    });
  });
});
