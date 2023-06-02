import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { client } from './graphql/apollo-client';
import Notifications from './pages/Notifications/Notifications';
import Overview from './pages/Overview/Overview';
import Settings from './pages/Settings/Settings';
import SpaceX from './pages/SpaceX/SpaceX';
import { StoreProvider } from './store/Store';
import theme from './theme/theme';

const App = () => {
  return (
    <StoreProvider>
      <ApolloProvider client={client}>
        <ConfigProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Overview />} />
              <Route path='/notifications' element={<Notifications />} />
              <Route path='/spacex' element={<SpaceX />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </ApolloProvider>
    </StoreProvider>
  );
};

export default App;
