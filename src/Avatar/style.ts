import { createUseStyles } from 'react-jss';

export default createUseStyles({
  responsive: {
    background: '#e5c2dc',
    color: 'rgba(#202020, 0.65)',
    height: '48px !important',
    width: '48px !important',
    fontSize: '32px !important',
    '@media (min-width: 1024px)': {
      height: '114px !important',
      width: '114px !important',
      fontSize: '76px !important',
      border: '4px solid white',
      boxShadow:
        '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    },
  },

  large: {
    background: '#e5c2dc',
    color: 'rgba(#202020, 0.65)',
    height: '114px !important',
    width: '114px !important',
    fontSize: '76px !important',
    border: '4px solid white',
    boxShadow:
      '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.12)',
  },
});
