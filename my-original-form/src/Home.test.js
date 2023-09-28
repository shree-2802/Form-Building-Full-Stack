// import '@test';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('button work',()=>{
    const { getByText }=render(<BrowserRouter><Home /></BrowserRouter>);
    const nv =getByText(/Email/i);
    expect(nv).toBeInTheDocument();

})
test('Button click',()=>{
    const navigate=jest.fn();
    const { queryByText }=render(<BrowserRouter><Home navigate={navigate('/table')}/></BrowserRouter>);
    const button=queryByText('View Table');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledTimes(1);
})
test('Checking type of mobile number',()=>{
    const {getByText}=render(<BrowserRouter><Home /></BrowserRouter>);
     const ageLabel=getByText(/Mobile/i);

    // const input = getByLabelText(/Mobile/i);
    // expect(input).toHaveAttribute('type','text');
    
    // expect()
})

