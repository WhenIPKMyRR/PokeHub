import { useAuth } from "../../utils/useAuth";

interface IProtectedLayoutProps {
  children: JSX.Element;
}


const ProtectedLayout: React.FC<IProtectedLayoutProps> = ( { children } ) => {
  const auth = useAuth();

  if (!auth.email) {
    return (
        <h1>Voce não tem permissão para acessar essa página</h1>
    );
  }

  return children;
};

export default ProtectedLayout;
