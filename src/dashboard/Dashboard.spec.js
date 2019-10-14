// Test away!
import React from 'react';
import {render} from '@testing-library/React';

import Dashboard from './Dashboard';

//create a snapshot of <Dashboard/>
test('Dashboard renders correctly!',()=>{
    expect(render(<Dashboard/>)).toMatchSnapshot(); //creates snapshot after running test once, look in __snapshots__
})