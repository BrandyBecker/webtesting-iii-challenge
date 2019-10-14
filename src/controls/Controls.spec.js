//Test away!
import React from 'react';
import {render} from '@testing-library/react';

import Controls from './Controls';

//create a snapshot of <Controls/>
test('Controls renders correctly!', ()=>{
    expect(render(<Controls/>)).toMatchSnapshot(); //creates snapshot after running test once, look in __snapshots__
    render(<Controls/>);
}) 