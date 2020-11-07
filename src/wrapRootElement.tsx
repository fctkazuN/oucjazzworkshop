import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';

type Props = {
    element: React.ReactNode
}

const WrapRootElement: React.FC<Props> = ({ element }) => {
    return <Provider store={store}>{element}</Provider>;
  };

export default WrapRootElement