import { Outlet } from 'react-router-dom';
import useAuthenticated from '../hooks/useAuthenticated';

export default function AuthenticatedLayout() {
  const { isLogin } = useAuthenticated();

  if (!isLogin) return null;

  return <Outlet />;
}
