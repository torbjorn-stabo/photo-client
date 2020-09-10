import React, { Component } from 'react';

import styled from 'styled-components';

import SortedListItem from './SortedListItem';
import './SortedList.scss';

function handleSelectFunc(e) {
    if (!isItemOrChildOf(e.target)) {
        return;
    }

    console.log(e.target);
    console.log(isItemOrChildOf(e.target));
    console.log('');

}

function isItemOrChildOf(e) {
    while(e) {
        if (e.classList && e.classList.contains('item')) {
            return true;
        }

        e = e.parentNode;
    }

    return false;
}

class SortedList extends Component {
    render() {
        // const StyledWrap = styled.div.attrs(props => ({
        //     className: "sortedlist"
        //   }))`
        //     display: grid;
        //     grid-template-columns: repeat(${this.props.headers.length}, 1fr);
        // `;
        const StyledWrap = styled.table.attrs(props => ({
            className: "sortedlist"
          }))``;

        console.log(this.props.items);

        return (
            <StyledWrap onClick={handleSelectFunc}>
                <thead>
                    <tr className="header">
                        {this.props.columns.map((v, k) => <th key={k}>{v.human}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map((item,k) => <SortedListItem key={k} data={item}></SortedListItem>)}
                </tbody>
            </StyledWrap>
        );
    }
}

export default SortedList;