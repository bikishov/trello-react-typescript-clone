import * as React from 'react';
import { ColumnContainer, ColumnTitle } from './styles';

export interface IColumnProps {
  text?: string
}

export const Column = ({ text, children }: React.PropsWithChildren<IColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
}