"use client"
import { Sidebar } from './SideBar';
import { Header } from './Header';
import { ProtectedRoute } from '../ProtectedRoute';
import { useState } from 'react';
import { MobileMenu } from './StudentMobileMenu';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMobile,setIsMobile] = useState<boolean>(false)

  return (
    <ProtectedRoute allowedRoles={['STUDENT']}>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        <Sidebar />
        
        <div className="flex-1 relative flex flex-col overflow-hidden">
          <Header onToggleMenu={()=>(setIsMobile(!isMobile))} />
            <MobileMenu isOpen={isMobile} onClose={()=>setIsMobile(!isMobile)} />

          
          <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">
                Welcome back, {"Linus"}
              </h1>
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};