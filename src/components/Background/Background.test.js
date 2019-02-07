import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Background from './Background';
import Sunset from '../Backgrounds/Sunset';

configure({ adapter: new Adapter() });

describe('<Background />', () => {
    it('should render <Sunset /> component if case is equal to \'sunset\'', () => {
        const wrapper = shallow(<Background background={'sunset'} />);
        expect(wrapper.find(Sunset)).toHaveLength(1);
    });
});