//Test away!
import React from 'react';
import {render} from '@testing-library/react';

import Controls from './Controls';

//create a snapshot of <Controls/>
test('Controls renders correctly!', ()=>{
    expect(render(<Controls/>)).toMatchSnapshot(); //creates snapshot after running test once, look in __snapshots__
    render(<Controls/>);
}) 

test("Provides Buttons to toggle the 'Closed' and 'Locked' states",()=>{
    const {getByText} = render(
        <Controls/>
    );
    getByText (/Lock Gate/)
    getByText (/Close Gate/)
})

test('should display "Lock Gate" and "Close Gate" when props are false', () => {
    const props = {
      locked: false,
      closed: false,
    };

    const controls = render(
      <Controls locked={props.locked} closed={props.closed} />,
    );

    expect(controls.getByText(/lock gate/i).textContent).toBe('Lock Gate');
    expect(controls.getByText(/close gate/i).textContent).toBe('Close Gate');
  });

test('should display "Unlocked Gate" and "Open Gate" when props are true', () => {
    const props = {
      locked: true,
      closed: true,
    };

    const controls = render(
      <Controls locked={props.locked} closed={props.closed} />,
    );

    expect(controls.getByText(/unlock gate/i).textContent).toBe('Unlock Gate');
    expect(controls.getByText(/open gate/i).textContent).toBe('Open Gate');
  });

test("The 'Closed' toggle button is Disabled if the Gate is Locked", ()=>{
    const {getByText} = render(
        <Controls closed={true} locked={true}/>
    );
    const openButton = getByText(/Open Gate/);
    expect(openButton.disabled).toBeTruthy();
})

test("The 'Locked' toggle button is disabled if the gate is 'Open'", ()=>{
    const {getByText} = render(
        <Controls closed={false} locked={false}/>
    );
    const lockButton = getByText(/Lock Gate/);
    expect(lockButton.disabled).toBeTruthy();
})