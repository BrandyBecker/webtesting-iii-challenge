// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/React';

import Dashboard from './Dashboard';

//create a snapshot of <Dashboard/>
test('Dashboard renders correctly!',()=>{
    expect(render(<Dashboard/>)).toMatchSnapshot(); //creates snapshot after running test once, look in __snapshots__
    render(<Dashboard/>)
})

test('defaults to open and unlocked', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Open/);
    getByText(/Unlocked/);
  });

test('cannot be closed or opened if it is locked', () => {
    const dashboard = render(<Dashboard />);

    expect(dashboard.queryByText(/Open Gate/i)).toBeFalsy();

    fireEvent.click(dashboard.getByText(/Close Gate/i));
    fireEvent.click(dashboard.getByText(/Lock Gate/i));

    expect(dashboard.queryByText(/Open Gate/i)).toBeTruthy();

    expect(
      dashboard.queryByText(/Open Gate/i).hasAttribute('disabled'),
    ).toBeTruthy();

    expect(
      dashboard.queryByText(/Unlock Gate/i).hasAttribute('disabled'),
    ).toBeFalsy();
  });