import ColumnPage from 'components/column-page/ColumnPage';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import { Footer, Header, Home, MyRecords } from 'components';

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/column-page', element: <ColumnPage /> },
    { path: '/my-records', element: <MyRecords /> }
  ]);
  return routes;
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="outlet-content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
