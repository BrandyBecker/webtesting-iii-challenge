// Test away!
import React from 'react';
import {render} from '@testing-library/react';

import Display from './Display';

test('Display renders correctly!', ()=>{
    expect(render(<Display/>)).toMatchSnapshot(); //creates snapshot after running test once, look in __snapshots__
    render(<Display/>)
})

test('displays if gate is open and if it is unlocked', () => {
    let props = {
      closed: false,
      locked: false,
    };

    const display = render(
      <Display closed={props.closed} locked={props.locked} />,
    );

    expect(display.queryByText(/unlocked/i)).toBeTruthy();
    expect(display.queryByText(/open/i)).toBeTruthy();
  });

test('displays if gate is open and if it is unlocked', () => {
    let props = {
      closed: true,
      locked: true,
    };

    const display = render(
      <Display closed={props.closed} locked={props.locked} />,
    );

    expect(display.queryByText(/locked/i)).toBeTruthy();
    expect(display.queryByText(/closed/i)).toBeTruthy();
  });

test('when locked or closed use the red-led class', () => {
    let props = {
      closed: true,
      locked: true,
    };

    const { container } = render(
      <Display closed={props.closed} locked={props.locked} />,
    );

    const buttons = container.querySelectorAll('.led.red-led');
    const locked = buttons[0];
    const closed = buttons[1];

    expect(locked.textContent).toBe('Locked');
    expect(closed.textContent).toBe('Closed');
  });

test('when unlocked or open use the green-led class', () => {
    let props = {
      closed: false,
      locked: false,
    };

    const { container } = render(
      <Display closed={props.closed} locked={props.locked} />,
    );

    const buttons = container.querySelectorAll('.led.green-led');
    const locked = buttons[0];
    const closed = buttons[1];

    expect(locked.textContent).toBe('Unlocked');
    expect(closed.textContent).toBe('Open');
  });