import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

describe("<App />", () => {
  configure({ adapter: new Adapter() });
  const app = shallow(<App />);

  describe("<Autocomplete.Textfield />", () => {
    it("should be present", () => {
      const autoCompleteTextfield = app.find("Autocomplete.Textfield");
      expect(autoCompleteTextfield).toBeTruthy();
    });

    // it('updates search query on change', () => {
    //   app.findAllByTestId()
    // });
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
