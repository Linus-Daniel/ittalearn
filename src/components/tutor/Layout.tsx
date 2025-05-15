import { Sidebar } from './SideBar';
import { Header } from './Header';
import { ProtectedRoute } from '../ProtectedRoute';

type TutorLayoutProps = {
  children: React.ReactNode;
};

export const TutorLayout = ({ children }: TutorLayoutProps) => {
  // const { data: session } = useSession();

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">
                Instructor Dashboard - {"Linus Daniel"}
              </h1>
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};