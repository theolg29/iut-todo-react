import { useRoutes } from 'raviger'
import App from './App';
import EditTask from './components/EditTask';

const routes = {
    '/': () => <App />,
    '/edit/:taskId': ({ taskId }) => <EditTask id={taskId} />
  }

const Router = () => {

    let route = useRoutes(routes);

    return (
        <div>
        {route}
      </div>    
    );
};

export default Router;