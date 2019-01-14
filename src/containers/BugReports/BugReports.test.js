import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BugReports } from './BugReports'
import BugReport from '../../components/BugReport/BugReport';

configure({ adapter: new Adapter() });

const wrapper = shallow(<BugReports />);

describe('<BugReports />', () => {
    it('should render <BugReport /> if there are submitted bugs.', () => {
        wrapper.setState({bugs: [{ id: 'this-id', issue: 'this-issue'}]});
        expect(wrapper.find(BugReport)).toHaveLength(1);
    })
});


