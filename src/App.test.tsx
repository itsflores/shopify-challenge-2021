import React from "react";
import App from "./App";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("<App />", () => {
  configure({ adapter: new Adapter() });
  const app = mount(<App />);

  describe("<Autocomplete.Textfield />", () => {
    let movieSearchInput: any;

    beforeEach(() => {
      movieSearchInput = app.find("Autocomplete.Textfield");
    });

    it("should be present", () => {
      expect(movieSearchInput).toBeTruthy();
    });

    it("updates search query on change", () => {
      movieSearchInput.simulate("change", {
        target: {
          value: "star wars",
        },
      });
    });
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// it('should set the password value on change event with trim', () => {
//   container.find('input[type="password"]').simulate('change', {
//     target: {
//       value: 'somenewpassword  ',
//     },
//   });
//   expect(container.find('input[type="password"]').prop('value')).toEqual(
//     'somenewpassword',
//   );
// });
