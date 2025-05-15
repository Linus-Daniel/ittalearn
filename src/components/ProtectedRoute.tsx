"use client"
import { useRouter } from 'next/navigation';
import { ReactNode,  } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles?:[string];
};

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const router = useRouter();
  const session = {
    user:{
        role:""
    }
  }

//   useEffect(() => {
//     if (status === 'loading') return;

//     if (!session) {
//       router.push(`/auth/signin?callbackUr`);
//     } else if (allowedRoles && !allowedRoles.includes(session.user.role)) {
//       router.push('/unauthorized');
//     }
//   }, [session, status, router, allowedRoles]);

//   if (status === 'loading' || !session) {
//     return <div>Loading...</div>;
//   }

//   if (allowedRoles && !allowedRoles.includes(session.user.role)) {
//     return <div>Checking permissions...</div>;
//   }

  return <>{children}</>;
};