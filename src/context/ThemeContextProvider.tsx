import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { ReactNode } from 'react';
import { theme } from '../theme/theme';




// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


type Props = {
    children:ReactNode
}

function ThemeContextProvider(props:Props) {
  return (
    <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </CacheProvider>
  )
}

export default ThemeContextProvider
