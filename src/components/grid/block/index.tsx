import React, { FC } from 'react';
import { Container } from './styles';

interface Iprops {
    colIndex: number
    rowIndex: number
}

const Block: FC<Iprops> = ({ colIndex, rowIndex }) => {

    return <Container data-cy={`block-${rowIndex}-${colIndex}`}>0</Container>
      
}
   

export default Block;



