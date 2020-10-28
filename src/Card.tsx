import * as React from 'react';
import { CardContainer } from './styles';

interface ICardProps {
  text: string
}

const Card: React.FunctionComponent<ICardProps> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
