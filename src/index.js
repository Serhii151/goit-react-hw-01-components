import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { ThemeProvider } from 'styled-components';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { theme } from './components/Utility/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <App />
      </StyleSheetManager>
    </ThemeProvider>
  </React.StrictMode>
);
