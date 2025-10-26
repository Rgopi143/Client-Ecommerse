import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'buyer' | 'seller' | null;

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  userName: string;
  login: (email: string, password: string, role: 'buyer' | 'seller') => void;
  logout: () => void;
  switchRole: (role: 'buyer' | 'seller') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState('');

  const login = (email: string, password: string, role: 'buyer' | 'seller') => {
    // For demo purposes, we'll skip actual authentication
    setIsAuthenticated(true);
    setUserRole(role);
    setUserName(email.split('@')[0]);
    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, role, userName: email.split('@')[0] }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserName('');
    localStorage.removeItem('auth');
  };

  const switchRole = (role: 'buyer' | 'seller') => {
    setUserRole(role);
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsed = JSON.parse(authData);
      localStorage.setItem('auth', JSON.stringify({ ...parsed, role }));
    }
  };

  // Check localStorage on mount
  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsed = JSON.parse(authData);
      setIsAuthenticated(parsed.isAuthenticated);
      setUserRole(parsed.role);
      setUserName(parsed.userName);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, userName, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

