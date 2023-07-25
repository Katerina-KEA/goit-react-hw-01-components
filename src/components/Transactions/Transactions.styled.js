import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 300px;
  border: 1px solid gray;
  margin: 40 auto;
  table-layout: auto;
  align-items: center;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.5);
`
export const HeaderTable = styled.th`
  background-color: #c3a07f;
`
export const TableRow = styled.tr`
  background-color: lightblue;
  :nth-child(2n)  {
    background-color: beige; 
  }
`
export const TableData = styled.td`
  padding: 12px 24px;
  text-align: center;
  font-size: 20px;
`
