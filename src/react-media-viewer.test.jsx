import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ReactMediaViewer from './index';

describe('React Media Viewer', () => {
  it('should match its snapshot', () => {
    const component = shallow(<ReactMediaViewer />);

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
