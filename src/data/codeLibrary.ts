
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Smartphone, 
  Palette, 
  Layout, 
  Shield,
  Cloud,
  Layers
} from 'lucide-react';

export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  filename?: string;
  tags: string[];
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  tags: string[];
  snippets: CodeSnippet[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: any;
  subcategories: Subcategory[];
}

export const codeLibrary: Category[] = [
  {
    id: 'html-semantics',
    title: 'HTML Semantics & Modern Elements',
    description: 'Complete HTML semantic elements with their modern 2025 equivalents',
    icon: Globe,
    subcategories: [
      {
        id: 'document-structure',
        title: 'Document Structure & Metadata',
        description: 'Core document elements and meta information',
        tags: ['HTML5', 'SEO', 'Accessibility'],
        snippets: [
          {
            id: 'html-boilerplate',
            title: 'Modern HTML5 Boilerplate',
            description: 'Complete HTML5 document structure with modern meta tags',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Your page description">
  <meta name="author" content="Your Name">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Your Title">
  <meta property="og:description" content="Your Description">
  <meta property="og:image" content="https://example.com/image.jpg">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Your Title">
  <meta name="twitter:description" content="Your Description">
  
  <title>Your Page Title</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="/favicon.ico">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="main.js"></script>
</body>
</html>`,
            language: 'html',
            filename: 'index.html',
            tags: ['boilerplate', 'meta', 'seo']
          },
          {
            id: 'module-imports',
            title: 'Modern ES Module Imports',
            description: 'Import maps and module preloading for 2025',
            code: `<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@18",
    "react-dom": "https://esm.sh/react-dom@18",
    "lodash": "https://esm.sh/lodash@4"
  }
}
</script>

<link rel="modulepreload" href="/src/main.js">
<link rel="modulepreload" href="/src/utils/helpers.js">

<script type="module">
  import React from 'react';
  import { createRoot } from 'react-dom';
  import App from './App.js';
  
  const root = createRoot(document.getElementById('root'));
  root.render(React.createElement(App));
</script>`,
            language: 'html',
            filename: 'module-setup.html',
            tags: ['modules', 'imports', 'performance']
          }
        ]
      },
      {
        id: 'semantic-structure',
        title: 'Semantic Structure Elements',
        description: 'Modern semantic HTML for better accessibility and SEO',
        tags: ['Semantics', 'Accessibility', 'Structure'],
        snippets: [
          {
            id: 'semantic-layout',
            title: 'Complete Semantic Page Layout',
            description: 'Full page structure using semantic HTML5 elements',
            code: `<body>
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main role="main">
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">Welcome to Our Website</h1>
      <p>Your journey starts here.</p>
    </section>
    
    <aside role="complementary" aria-label="Related content">
      <h2>Related Articles</h2>
      <article>
        <h3>Article Title</h3>
        <time datetime="2025-01-01">January 1, 2025</time>
        <p>Article summary...</p>
      </article>
    </aside>
  </main>

  <footer role="contentinfo">
    <p>&copy; 2025 Your Company. All rights reserved.</p>
  </footer>
</body>`,
            language: 'html',
            filename: 'semantic-layout.html',
            tags: ['semantic', 'accessibility', 'structure']
          },
          {
            id: 'search-element',
            title: 'Modern Search Container',
            description: 'New semantic search element for site search functionality',
            code: `<search role="search" aria-label="Site search">
  <form action="/search" method="get">
    <label for="search-input" class="sr-only">Search our site</label>
    <input 
      type="search" 
      id="search-input"
      name="q" 
      placeholder="Search..."
      aria-describedby="search-help"
      autocomplete="off"
      spellcheck="false"
    >
    <button type="submit" aria-label="Submit search">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </button>
    <div id="search-help" class="sr-only">
      Search across all pages and content
    </div>
  </form>
</search>`,
            language: 'html',
            filename: 'search-element.html',
            tags: ['search', 'semantic', 'form']
          }
        ]
      },
      {
        id: 'interactive-elements',
        title: 'Interactive & Media Elements',
        description: 'Modern interactive components and media handling',
        tags: ['Interactive', 'Media', 'UX'],
        snippets: [
          {
            id: 'details-summary',
            title: 'Accessible Accordion with Details/Summary',
            description: 'Native HTML accordion without JavaScript',
            code: `<details class="accordion-item">
  <summary class="accordion-trigger">
    <span>Frequently Asked Question</span>
    <svg class="accordion-icon" aria-hidden="true">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  </summary>
  <div class="accordion-content">
    <p>This is the answer to the question. The details element provides 
    native disclosure functionality without requiring JavaScript.</p>
    <ul>
      <li>Fully accessible by default</li>
      <li>Keyboard navigation included</li>
      <li>Screen reader compatible</li>
    </ul>
  </div>
</details>

<style>
.accordion-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.accordion-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  background: #f8fafc;
  border: none;
  width: 100%;
  text-align: left;
}

.accordion-icon {
  transition: transform 0.2s;
  width: 1rem;
  height: 1rem;
}

details[open] .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
}
</style>`,
            language: 'html',
            filename: 'native-accordion.html',
            tags: ['accordion', 'details', 'accessibility']
          },
          {
            id: 'dialog-modal',
            title: 'Native Modal Dialog',
            description: 'Modern HTML dialog element for modals',
            code: `<button onclick="openModal()" class="open-btn">Open Modal</button>

<dialog id="modal" class="modal">
  <div class="modal-content">
    <header class="modal-header">
      <h2>Modal Title</h2>
      <button onclick="closeModal()" class="close-btn" aria-label="Close modal">
        ×
      </button>
    </header>
    <main class="modal-body">
      <p>This is a native HTML dialog element. It includes:</p>
      <ul>
        <li>Built-in focus management</li>
        <li>Escape key handling</li>
        <li>Backdrop click closing</li>
        <li>Accessibility features</li>
      </ul>
    </main>
    <footer class="modal-footer">
      <button onclick="closeModal()" class="btn-secondary">Cancel</button>
      <button class="btn-primary">Confirm</button>
    </footer>
  </div>
</dialog>

<script>
function openModal() {
  document.getElementById('modal').showModal();
}

function closeModal() {
  document.getElementById('modal').close();
}

// Close on backdrop click
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});
</script>

<style>
.modal {
  border: none;
  border-radius: 8px;
  padding: 0;
  max-width: 500px;
  width: 90vw;
}

.modal::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
}
</style>`,
            language: 'html',
            filename: 'native-modal.html',
            tags: ['dialog', 'modal', 'native']
          },
          {
            id: 'popover-element',
            title: 'Popover API Implementation',
            description: 'Modern popover attribute for lightweight pop-ups',
            code: `<button popovertarget="my-popover" class="trigger-btn">
  Show Popover
</button>

<div id="my-popover" popover="auto" class="popover">
  <div class="popover-content">
    <h3>Popover Title</h3>
    <p>This is a lightweight popover using the new popover API.</p>
    <button popovertarget="my-popover" popovertargetaction="hide">
      Close
    </button>
  </div>
</div>

<!-- Manual popover control -->
<button onclick="showPopover()">Show Manual Popover</button>
<button onclick="hidePopover()">Hide Manual Popover</button>

<div id="manual-popover" popover="manual" class="popover">
  <div class="popover-content">
    <h3>Manual Popover</h3>
    <p>This popover requires manual JavaScript control.</p>
  </div>
</div>

<script>
function showPopover() {
  document.getElementById('manual-popover').showPopover();
}

function hidePopover() {
  document.getElementById('manual-popover').hidePopover();
}

// Listen for popover events
document.addEventListener('toggle', (event) => {
  if (event.target.matches('[popover]')) {
    console.log('Popover toggled:', event.newState);
  }
});
</script>

<style>
.popover {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.popover-content {
  padding: 1rem;
  min-width: 250px;
}

.trigger-btn {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>`,
            language: 'html',
            filename: 'popover-api.html',
            tags: ['popover', 'api', 'lightweight']
          }
        ]
      }
    ]
  },
  {
    id: 'react-components',
    title: 'React Components & Hooks',
    description: 'Modern React patterns, hooks, and component examples',
    icon: Code,
    subcategories: [
      {
        id: 'modern-hooks',
        title: 'Modern React Hooks',
        description: 'Latest React hooks and patterns for 2025',
        tags: ['React', 'Hooks', 'State Management'],
        snippets: [
          {
            id: 'use-state-hook',
            title: 'useState with Complex State',
            description: 'Managing complex state with useState hook',
            code: `import { useState, useCallback } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'light',
      notifications: true
    }
  });

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  const updatePreferences = useCallback((newPrefs: Partial<User['preferences']>) => {
    setUser(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        ...newPrefs
      }
    }));
  }, []);

  const toggleTheme = useCallback(() => {
    updatePreferences({
      theme: user.preferences.theme === 'light' ? 'dark' : 'light'
    });
  }, [user.preferences.theme, updatePreferences]);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      
      <div className="preferences">
        <h3>Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={user.preferences.notifications}
            onChange={(e) => updatePreferences({ notifications: e.target.checked })}
          />
          Enable Notifications
        </label>
        
        <button onClick={toggleTheme}>
          Switch to {user.preferences.theme === 'light' ? 'dark' : 'light'} theme
        </button>
      </div>
    </div>
  );
};

export default UserProfile;`,
            language: 'typescript',
            filename: 'UserProfile.tsx',
            tags: ['useState', 'useCallback', 'typescript']
          },
          {
            id: 'custom-hooks',
            title: 'Custom Hooks Collection',
            description: 'Reusable custom hooks for common functionality',
            code: `import { useState, useEffect, useCallback, useRef } from 'react';

// useLocalStorage hook
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
};

// useDebounce hook
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// useFetch hook
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ 
          data: null, 
          loading: false, 
          error: error instanceof Error ? error.message : 'An error occurred' 
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

// useIntersectionObserver hook
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};

// Usage example component
const HooksExample = () => {
  const [name, setName] = useLocalStorage('userName', '');
  const debouncedName = useDebounce(name, 500);
  const { data: users, loading, error } = useFetch('/api/users');
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1
  });

  useEffect(() => {
    if (debouncedName) {
      console.log('Searching for:', debouncedName);
      // Perform search API call here
    }
  }, [debouncedName]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      
      {loading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}
      {users && <p>Found {users.length} users</p>}
      
      <div 
        ref={elementRef} 
        style={{ height: '100px', background: isVisible ? 'green' : 'red' }}
      >
        {isVisible ? 'Visible!' : 'Not visible'}
      </div>
    </div>
  );
};

export default HooksExample;`,
            language: 'typescript',
            filename: 'CustomHooks.tsx',
            tags: ['custom-hooks', 'localStorage', 'debounce', 'fetch']
          },
          {
            id: 'context-provider',
            title: 'Context API with useReducer',
            description: 'Global state management with Context and useReducer',
            code: `import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// State shape
interface AppState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  theme: 'light' | 'dark';
  notifications: Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
    timestamp: number;
  }>;
  isLoading: boolean;
}

// Action types
type AppAction =
  | { type: 'SET_USER'; payload: AppState['user'] }
  | { type: 'SET_THEME'; payload: AppState['theme'] }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<AppState['notifications'][0], 'id'> }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR_NOTIFICATIONS' };

// Initial state
const initialState: AppState = {
  user: null,
  theme: 'light',
  notifications: [],
  isLoading: false
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.payload,
            id: Date.now().toString(),
          }
        ]
      };
    
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: [] };
    
    default:
      return state;
  }
};

// Context
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  // Helper functions
  login: (user: AppState['user']) => void;
  logout: () => void;
  toggleTheme: () => void;
  addNotification: (notification: Omit<AppState['notifications'][0], 'id'>) => void;
  removeNotification: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const login = (user: AppState['user']) => {
    dispatch({ type: 'SET_USER', payload: user });
    addNotification({
      message: 'Successfully logged in!',
      type: 'success',
      timestamp: Date.now()
    });
  };

  const logout = () => {
    dispatch({ type: 'SET_USER', payload: null });
    dispatch({ type: 'CLEAR_NOTIFICATIONS' });
  };

  const toggleTheme = () => {
    dispatch({ 
      type: 'SET_THEME', 
      payload: state.theme === 'light' ? 'dark' : 'light' 
    });
  };

  const addNotification = (notification: Omit<AppState['notifications'][0], 'id'>) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeNotification(Date.now().toString());
    }, 5000);
  };

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const value: AppContextType = {
    state,
    dispatch,
    login,
    logout,
    toggleTheme,
    addNotification,
    removeNotification
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Example usage component
const App: React.FC = () => {
  const { state, login, logout, toggleTheme, addNotification } = useApp();

  const handleLogin = () => {
    login({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    });
  };

  const handleAddNotification = () => {
    addNotification({
      message: 'This is a test notification',
      type: 'info',
      timestamp: Date.now()
    });
  };

  return (
    <div className={\`app \${state.theme}\`}>
      <header>
        <h1>My App</h1>
        <button onClick={toggleTheme}>
          Switch to {state.theme === 'light' ? 'dark' : 'light'} mode
        </button>
      </header>

      <main>
        {state.user ? (
          <div>
            <p>Welcome, {state.user.name}!</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}

        <button onClick={handleAddNotification}>
          Add Notification
        </button>

        <div className="notifications">
          {state.notifications.map(notification => (
            <div key={notification.id} className={\`notification \${notification.type}\`}>
              {notification.message}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;`,
            language: 'typescript',
            filename: 'AppContext.tsx',
            tags: ['context', 'useReducer', 'state-management']
          }
        ]
      },
      {
        id: 'component-patterns',
        title: 'Component Patterns & Architecture',
        description: 'Advanced React patterns and component architecture',
        tags: ['Patterns', 'Architecture', 'Performance'],
        snippets: [
          {
            id: 'compound-components',
            title: 'Compound Components Pattern',
            description: 'Flexible component composition with compound pattern',
            code: `import React, { createContext, useContext, useState, ReactNode } from 'react';

// Context for sharing state between compound components
interface AccordionContextType {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within Accordion');
  }
  return context;
};

// Main Accordion component
interface AccordionProps {
  children: ReactNode;
  defaultActive?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, defaultActive }) => {
  const [activeItem, setActiveItem] = useState<string | null>(defaultActive || null);

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
      <div className="accordion">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// Accordion Item component
interface AccordionItemProps {
  children: ReactNode;
  value: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ children, value }) => {
  const { activeItem } = useAccordionContext();
  const isActive = activeItem === value;

  return (
    <div className={\`accordion-item \${isActive ? 'active' : ''}\`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { 
            value, 
            isActive 
          });
        }
        return child;
      })}
    </div>
  );
};

// Accordion Trigger component
interface AccordionTriggerProps {
  children: ReactNode;
  value?: string;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, value }) => {
  const { activeItem, setActiveItem } = useAccordionContext();
  
  const handleClick = () => {
    if (value) {
      setActiveItem(activeItem === value ? null : value);
    }
  };

  return (
    <button 
      className="accordion-trigger"
      onClick={handleClick}
      aria-expanded={activeItem === value}
    >
      {children}
      <span className="accordion-icon">
        {activeItem === value ? '−' : '+'}
      </span>
    </button>
  );
};

// Accordion Content component
interface AccordionContentProps {
  children: ReactNode;
  isActive?: boolean;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ children, isActive }) => {
  return (
    <div className={\`accordion-content \${isActive ? 'active' : ''}\`}>
      <div className="accordion-content-inner">
        {children}
      </div>
    </div>
  );
};

// Attach sub-components to main component
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

// Usage example
const AccordionExample = () => {
  return (
    <Accordion defaultActive="item1">
      <Accordion.Item value="item1">
        <Accordion.Trigger>What is React?</Accordion.Trigger>
        <Accordion.Content>
          React is a JavaScript library for building user interfaces.
          It allows you to create reusable UI components.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item2">
        <Accordion.Trigger>How do hooks work?</Accordion.Trigger>
        <Accordion.Content>
          Hooks are functions that let you use state and other React features
          in functional components.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item3">
        <Accordion.Trigger>What is JSX?</Accordion.Trigger>
        <Accordion.Content>
          JSX is a syntax extension for JavaScript that allows you to write
          HTML-like code in your JavaScript files.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default Accordion;
export { AccordionExample };`,
            language: 'typescript',
            filename: 'CompoundComponents.tsx',
            tags: ['compound-pattern', 'context', 'composition']
          },
          {
            id: 'render-props',
            title: 'Render Props Pattern',
            description: 'Flexible data sharing with render props pattern',
            code: `import React, { useState, useEffect, ReactNode } from 'react';

// Generic data fetcher with render props
interface DataFetcherProps<T> {
  url: string;
  children: (data: {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
  }) => ReactNode;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

const DataFetcher = <T,>({ 
  url, 
  children, 
  onSuccess, 
  onError 
}: DataFetcherProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const result = await response.json();
      setData(result);
      
      if (onSuccess) {
        onSuccess(result);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return <>{children({ data, loading, error, refetch: fetchData })}</>;
};

// Mouse tracker with render props
interface MouseTrackerProps {
  children: (mouse: { x: number; y: number }) => ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ children }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <>{children(mouse)}</>;
};

// Toggle state with render props
interface ToggleProps {
  initial?: boolean;
  children: (toggle: {
    isOn: boolean;
    toggle: () => void;
    setOn: () => void;
    setOff: () => void;
  }) => ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ initial = false, children }) => {
  const [isOn, setIsOn] = useState(initial);

  const toggle = () => setIsOn(prev => !prev);
  const setOn = () => setIsOn(true);
  const setOff = () => setIsOn(false);

  return <>{children({ isOn, toggle, setOn, setOff })}</>;
};

// Usage examples
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const RenderPropsExample = () => {
  return (
    <div className="render-props-examples">
      <h2>Render Props Examples</h2>

      {/* Data Fetcher Example */}
      <section>
        <h3>User Data</h3>
        <DataFetcher<User[]>
          url="/api/users"
          onSuccess={(users) => console.log('Users loaded:', users)}
          onError={(error) => console.error('Failed to load users:', error)}
        >
          {({ data: users, loading, error, refetch }) => (
            <div>
              {loading && <p>Loading users...</p>}
              {error && (
                <div>
                  <p>Error: {error}</p>
                  <button onClick={refetch}>Retry</button>
                </div>
              )}
              {users && (
                <ul>
                  {users.map(user => (
                    <li key={user.id}>
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </DataFetcher>
      </section>

      {/* Mouse Tracker Example */}
      <section>
        <h3>Mouse Position</h3>
        <MouseTracker>
          {({ x, y }) => (
            <div 
              style={{ 
                height: '200px', 
                background: '#f0f0f0',
                position: 'relative',
                border: '1px solid #ccc'
              }}
            >
              <p>Move your mouse over this area</p>
              <div
                style={{
                  position: 'absolute',
                  left: x - 10,
                  top: y - 10,
                  width: '20px',
                  height: '20px',
                  background: 'red',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />
              <p>Mouse position: ({x}, {y})</p>
            </div>
          )}
        </MouseTracker>
      </section>

      {/* Toggle Example */}
      <section>
        <h3>Toggle Controls</h3>
        <Toggle initial={false}>
          {({ isOn, toggle, setOn, setOff }) => (
            <div>
              <p>Toggle is: {isOn ? 'ON' : 'OFF'}</p>
              <button onClick={toggle}>Toggle</button>
              <button onClick={setOn}>Turn On</button>
              <button onClick={setOff}>Turn Off</button>
              
              {isOn && (
                <div style={{ background: 'lightgreen', padding: '1rem' }}>
                  This content is visible when toggle is ON!
                </div>
              )}
            </div>
          )}
        </Toggle>
      </section>

      {/* Nested render props example */}
      <section>
        <h3>Nested Render Props</h3>
        <Toggle>
          {({ isOn, toggle }) => (
            <div>
              <button onClick={toggle}>
                {isOn ? 'Hide' : 'Show'} Posts
              </button>
              
              {isOn && (
                <DataFetcher<Post[]> url="/api/posts">
                  {({ data: posts, loading, error }) => (
                    <div>
                      {loading && <p>Loading posts...</p>}
                      {error && <p>Error loading posts: {error}</p>}
                      {posts && (
                        <ul>
                          {posts.slice(0, 5).map(post => (
                            <li key={post.id}>
                              <h4>{post.title}</h4>
                              <p>{post.body.substring(0, 100)}...</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </DataFetcher>
              )}
            </div>
          )}
        </Toggle>
      </section>
    </div>
  );
};

export { DataFetcher, MouseTracker, Toggle, RenderPropsExample };`,
            language: 'typescript',
            filename: 'RenderProps.tsx',
            tags: ['render-props', 'data-fetching', 'mouse-tracking']
          }
        ]
      }
    ]
  },
  {
    id: 'vue-components',
    title: 'Vue.js Components & Composition',
    description: 'Modern Vue 3 composition API and component patterns',
    icon: Layers,
    subcategories: [
      {
        id: 'composition-api',
        title: 'Composition API Patterns',
        description: 'Vue 3 composition API with TypeScript',
        tags: ['Vue 3', 'Composition API', 'TypeScript'],
        snippets: [
          {
            id: 'basic-composition',
            title: 'Basic Composition API Setup',
            description: 'Fundamental Vue 3 composition API with TypeScript',
            code: `<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          :class="{ error: errors.name }"
          @blur="validateName"
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="user.email"
          type="email"
          :class="{ error: errors.email }"
          @blur="validateEmail"
        />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label>
          <input
            v-model="user.preferences.notifications"
            type="checkbox"
          />
          Enable Notifications
        </label>
      </div>

      <div class="form-group">
        <label for="theme">Theme:</label>
        <select id="theme" v-model="user.preferences.theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button type="submit" :disabled="!isFormValid || isSubmitting">
        {{ isSubmitting ? 'Saving...' : 'Save Profile' }}
      </button>
    </form>

    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';

// Types
interface UserPreferences {
  notifications: boolean;
  theme: 'light' | 'dark';
}

interface User {
  name: string;
  email: string;
  preferences: UserPreferences;
}

interface ValidationErrors {
  name?: string;
  email?: string;
}

// Reactive state
const user = reactive<User>({
  name: '',
  email: '',
  preferences: {
    notifications: true,
    theme: 'light'
  }
});

const errors = reactive<ValidationErrors>({});
const isSubmitting = ref(false);
const successMessage = ref('');

// Computed properties
const isFormValid = computed(() => {
  return user.name.length > 0 && 
         user.email.length > 0 && 
         Object.keys(errors).length === 0;
});

// Methods
const validateName = () => {
  if (!user.name.trim()) {
    errors.name = 'Name is required';
  } else if (user.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else {
    delete errors.name;
  }
};

const validateEmail = () => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!user.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(user.email)) {
    errors.email = 'Please enter a valid email';
  } else {
    delete errors.email;
  }
};

const handleSubmit = async () => {
  validateName();
  validateEmail();
  
  if (!isFormValid.value) return;

  isSubmitting.value = true;
  successMessage.value = '';

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Saving user:', user);
    successMessage.value = 'Profile saved successfully!';
    
    setTimeout(() => {
      successMessage.value = '';
    }, 3000);
  } catch (error) {
    console.error('Error saving profile:', error);
  } finally {
    isSubmitting.value = false;
  }
};

// Watchers
watch(
  () => user.preferences.theme,
  (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
  }
);

// Lifecycle
onMounted(() => {
  // Load user data on component mount
  console.log('Component mounted');
  document.documentElement.setAttribute('data-theme', user.preferences.theme);
});

// Expose for template ref access
defineExpose({
  user,
  validateName,
  validateEmail,
  handleSubmit
});
</script>

<style scoped>
.user-profile {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.success-message {
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

button {
  background: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background: #0056b3;
}
</style>`,
            language: 'vue',
            filename: 'UserProfile.vue',
            tags: ['composition-api', 'typescript', 'validation']
          },
          {
            id: 'vue-composables',
            title: 'Custom Composables Collection',
            description: 'Reusable Vue 3 composables for common functionality',
            code: `// composables/useLocalStorage.ts
import { ref, watch, Ref } from 'vue';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [Ref<T>, (value: T) => void] {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : defaultValue;
  
  const state = ref<T>(initial);

  const setValue = (value: T) => {
    state.value = value;
  };

  watch(
    state,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    { deep: true }
  );

  return [state, setValue];
}

// composables/useFetch.ts
import { ref, Ref } from 'vue';

interface FetchOptions {
  immediate?: boolean;
  headers?: Record<string, string>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}

interface UseFetchReturn<T> {
  data: Ref<T | null>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  execute: () => Promise<void>;
  refetch: () => Promise<void>;
}

export function useFetch<T>(
  url: string | Ref<string>,
  options: FetchOptions = {}
): UseFetchReturn<T> {
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const execute = async () => {
    loading.value = true;
    error.value = null;

    try {
      const urlValue = typeof url === 'string' ? url : url.value;
      const response = await fetch(urlValue, {
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      data.value = await response.json();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred';
    } finally {
      loading.value = false;
    }
  };

  const refetch = execute;

  if (options.immediate !== false) {
    execute();
  }

  return {
    data,
    loading,
    error,
    execute,
    refetch,
  };
}

// composables/useDebounce.ts
import { ref, watch, Ref } from 'vue';

export function useDebounce<T>(
  value: Ref<T>,
  delay: number
): Ref<T> {
  const debouncedValue = ref<T>(value.value);

  watch(
    value,
    (newValue) => {
      const timeout = setTimeout(() => {
        debouncedValue.value = newValue;
      }, delay);

      return () => clearTimeout(timeout);
    },
    { immediate: true }
  );

  return debouncedValue;
}

// composables/useIntersectionObserver.ts
import { ref, onMounted, onUnmounted, Ref } from 'vue';

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const target = ref<HTMLElement | null>(null);
  const isIntersecting = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (target.value) {
      observer = new IntersectionObserver(([entry]) => {
        isIntersecting.value = entry.isIntersecting;
      }, options);

      observer.observe(target.value);
    }
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    target,
    isIntersecting,
  };
}

// composables/useToggle.ts
import { ref, Ref } from 'vue';

export function useToggle(
  initial = false
): [Ref<boolean>, () => void, () => void, () => void] {
  const state = ref(initial);

  const toggle = () => {
    state.value = !state.value;
  };

  const setTrue = () => {
    state.value = true;
  };

  const setFalse = () => {
    state.value = false;
  };

  return [state, toggle, setTrue, setFalse];
}

// Usage example component
<template>
  <div class="composables-example">
    <h2>Vue Composables Example</h2>

    <!-- Local Storage Example -->
    <section>
      <h3>Local Storage</h3>
      <input v-model="name" placeholder="Enter your name" />
      <p>Stored name: {{ name }}</p>
    </section>

    <!-- Fetch Example -->
    <section>
      <h3>Data Fetching</h3>
      <button @click="refetchUsers">Refresh Users</button>
      <div v-if="usersLoading">Loading users...</div>
      <div v-else-if="usersError">Error: {{ usersError }}</div>
      <ul v-else-if="usersData">
        <li v-for="user in usersData" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </section>

    <!-- Debounce Example -->
    <section>
      <h3>Debounced Search</h3>
      <input v-model="searchTerm" placeholder="Search..." />
      <p>Debounced: {{ debouncedSearch }}</p>
      <p>Search will trigger API call for: {{ debouncedSearch }}</p>
    </section>

    <!-- Toggle Example -->
    <section>
      <h3>Toggle Controls</h3>
      <button @click="toggle">Toggle: {{ isOn ? 'ON' : 'OFF' }}</button>
      <button @click="setTrue">Turn On</button>
      <button @click="setFalse">Turn Off</button>
      <div v-if="isOn" class="toggle-content">
        This content is visible when toggle is ON!
      </div>
    </section>

    <!-- Intersection Observer Example -->
    <section>
      <h3>Intersection Observer</h3>
      <div class="spacer">Scroll down to see the observed element...</div>
      <div
        ref="target"
        :class="{ visible: isIntersecting }"
        class="observed-element"
      >
        {{ isIntersecting ? 'I am visible!' : 'I am not visible' }}
      </div>
      <div class="spacer">More content below...</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLocalStorage } from './composables/useLocalStorage';
import { useFetch } from './composables/useFetch';
import { useDebounce } from './composables/useDebounce';
import { useToggle } from './composables/useToggle';
import { useIntersectionObserver } from './composables/useIntersectionObserver';

// Local storage example
const [name] = useLocalStorage('userName', '');

// Fetch example
interface User {
  id: number;
  name: string;
  email: string;
}

const {
  data: usersData,
  loading: usersLoading,
  error: usersError,
  refetch: refetchUsers,
} = useFetch<User[]>('/api/users');

// Debounce example
const searchTerm = ref('');
const debouncedSearch = useDebounce(searchTerm, 500);

// Toggle example
const [isOn, toggle, setTrue, setFalse] = useToggle(false);

// Intersection observer example
const { target, isIntersecting } = useIntersectionObserver({
  threshold: 0.5,
});
</script>

<style scoped>
.composables-example {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.spacer {
  height: 200px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}

.observed-element {
  height: 100px;
  background: #ffcccb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.observed-element.visible {
  background: #90ee90;
}

.toggle-content {
  background: #e6f3ff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
}

input {
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>`,
            language: 'vue',
            filename: 'ComposablesExample.vue',
            tags: ['composables', 'hooks', 'reusable']
          }
        ]
      },
      {
        id: 'vue-state-management',
        title: 'Pinia State Management',
        description: 'Modern Vue state management with Pinia',
        tags: ['Pinia', 'State Management', 'TypeScript'],
        snippets: [
          {
            id: 'pinia-store',
            title: 'Complete Pinia Store Setup',
            description: 'Full-featured Pinia store with TypeScript',
            code: `// stores/auth.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem('token'));
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Getters
  const isAuthenticated = computed(() => !!user.value && !!token.value);
  const isAdmin = computed(() => user.value?.role === 'admin');
  const userName = computed(() => user.value?.name || 'Guest');

  // Actions
  const login = async (credentials: LoginCredentials) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      
      user.value = data.user;
      token.value = data.token;
      localStorage.setItem('token', data.token);

      return data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const register = async (userData: RegisterData) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      
      user.value = data.user;
      token.value = data.token;
      localStorage.setItem('token', data.token);

      return data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Registration failed';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('token');
    error.value = null;
  };

  const fetchUserProfile = async () => {
    if (!token.value) return;

    isLoading.value = true;
    try {
      const response = await fetch('/api/auth/profile', {
        headers: {
          Authorization: \`Bearer \${token.value}\`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const userData = await response.json();
      user.value = userData;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch profile';
      logout(); // Clear invalid token
    } finally {
      isLoading.value = false;
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (!token.value || !user.value) return;

    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token.value}\`,
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      user.value = updatedUser;

      return updatedUser;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Update failed';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const clearError = () => {
    error.value = null;
  };

  // Initialize on store creation
  if (token.value) {
    fetchUserProfile();
  }

  return {
    // State
    user,
    token,
    isLoading,
    error,
    // Getters
    isAuthenticated,
    isAdmin,
    userName,
    // Actions
    login,
    register,
    logout,
    fetchUserProfile,
    updateProfile,
    clearError,
  };
});

// stores/todos.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useAuthStore } from './auth';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoData {
  title: string;
  description?: string;
  priority?: Todo['priority'];
  dueDate?: string;
}

export const useTodosStore = defineStore('todos', () => {
  const authStore = useAuthStore();

  // State
  const todos = ref<Todo[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const filter = ref<'all' | 'active' | 'completed'>('all');

  // Getters
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter(todo => !todo.completed);
      case 'completed':
        return todos.value.filter(todo => todo.completed);
      default:
        return todos.value;
    }
  });

  const todosCount = computed(() => ({
    total: todos.value.length,
    active: todos.value.filter(todo => !todo.completed).length,
    completed: todos.value.filter(todo => todo.completed).length,
  }));

  const completionPercentage = computed(() => {
    if (todos.value.length === 0) return 0;
    return Math.round((todosCount.value.completed / todosCount.value.total) * 100);
  });

  // Actions
  const fetchTodos = async () => {
    if (!authStore.token) return;

    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/todos', {
        headers: {
          Authorization: \`Bearer \${authStore.token}\`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }

      todos.value = await response.json();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch todos';
    } finally {
      isLoading.value = false;
    }
  };

  const createTodo = async (todoData: CreateTodoData) => {
    if (!authStore.token) return;

    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${authStore.token}\`,
        },
        body: JSON.stringify(todoData),
      });

      if (!response.ok) {
        throw new Error('Failed to create todo');
      }

      const newTodo = await response.json();
      todos.value.push(newTodo);

      return newTodo;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to create todo';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const updateTodo = async (id: string, updates: Partial<Todo>) => {
    if (!authStore.token) return;

    const todoIndex = todos.value.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return;

    try {
      const response = await fetch(\`/api/todos/\${id}\`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${authStore.token}\`,
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      const updatedTodo = await response.json();
      todos.value[todoIndex] = updatedTodo;

      return updatedTodo;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update todo';
      throw err;
    }
  };

  const deleteTodo = async (id: string) => {
    if (!authStore.token) return;

    try {
      const response = await fetch(\`/api/todos/\${id}\`, {
        method: 'DELETE',
        headers: {
          Authorization: \`Bearer \${authStore.token}\`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      todos.value = todos.value.filter(todo => todo.id !== id);
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to delete todo';
      throw err;
    }
  };

  const toggleTodo = (id: string) => {
    const todo = todos.value.find(todo => todo.id === id);
    if (todo) {
      updateTodo(id, { completed: !todo.completed });
    }
  };

  const setFilter = (newFilter: typeof filter.value) => {
    filter.value = newFilter;
  };

  const clearCompleted = async () => {
    const completedTodos = todos.value.filter(todo => todo.completed);
    await Promise.all(completedTodos.map(todo => deleteTodo(todo.id)));
  };

  const clearError = () => {
    error.value = null;
  };

  return {
    // State
    todos,
    isLoading,
    error,
    filter,
    // Getters
    filteredTodos,
    todosCount,
    completionPercentage,
    // Actions
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    setFilter,
    clearCompleted,
    clearError,
  };
});`,
            language: 'typescript',
            filename: 'stores.ts',
            tags: ['pinia', 'state', 'typescript']
          }
        ]
      }
    ]
  },
  {
    id: 'backend-apis',
    title: 'Backend & API Development',
    description: 'Server-side code, APIs, and backend configurations',
    icon: Server,
    subcategories: [
      {
        id: 'node-express',
        title: 'Node.js & Express APIs',
        description: 'Modern Express.js APIs with TypeScript',
        tags: ['Node.js', 'Express', 'REST API'],
        snippets: [
          {
            id: 'express-setup',
            title: 'Complete Express Server Setup',
            description: 'Production-ready Express server with middleware',
            code: `// server.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middleware/errorMiddleware';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import todoRoutes from './routes/todos';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Compression middleware
app.use(compression());

// Logging middleware
app.use(morgan('combined'));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      auth: '/api/auth',
      users: '/api/users',
      todos: '/api/todos',
    },
  });
});

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

// Graceful shutdown
const gracefulShutdown = (signal: string) => {
  console.log(\`Received \${signal}. Graceful shutdown initiated.\`);
  // Close database connections, cleanup resources, etc.
  process.exit(0);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT} in \${process.env.NODE_ENV || 'development'} mode\`);
});

export default app;`,
            language: 'typescript',
            filename: 'server.ts',
            tags: ['express', 'server', 'middleware']
          },
          {
            id: 'express-middleware',
            title: 'Custom Express Middleware',
            description: 'Authentication, validation, and error handling middleware',
            code: `// middleware/auth.ts
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }

    next();
  };
};

// middleware/validation.ts
import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array(),
    });
  }
  next();
};

export const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  validateRequest,
];

export const validateRegister = [
  body('name')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  validateRequest,
];

export const validateTodo = [
  body('title')
    .isLength({ min: 1, max: 200 })
    .withMessage('Title is required and must be less than 200 characters'),
  body('description')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Description must be less than 1000 characters'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be low, medium, or high'),
  body('dueDate')
    .optional()
    .isISO8601()
    .withMessage('Due date must be a valid date'),
  validateRequest,
];

// middleware/errorMiddleware.ts
import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(\`Not Found - \${req.originalUrl}\`);
  res.status(404);
  next(error);
};

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  res.status(statusCode).json({
    error: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    method: req.method,
  });
};

// middleware/logging.ts
import { Request, Response, NextFunction } from 'express';

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(\`\${req.method} \${req.originalUrl} - \${res.statusCode} - \${duration}ms\`);
  });
  
  next();
};

export const apiLogger = (endpoint: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(\`API Call: \${endpoint} - User: \${req.user?.id || 'Anonymous'} - IP: \${req.ip}\`);
    next();
  };
};

// middleware/security.ts
import { Request, Response, NextFunction } from 'express';

export const sanitizeInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Basic XSS protection
  const sanitize = (obj: any): any => {
    if (typeof obj === 'string') {
      return obj.replace(/<script[^>]*>.*?<\\/script>/gi, '');
    }
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach(key => {
        obj[key] = sanitize(obj[key]);
      });
    }
    return obj;
  };

  if (req.body) {
    req.body = sanitize(req.body);
  }
  if (req.query) {
    req.query = sanitize(req.query);
  }
  if (req.params) {
    req.params = sanitize(req.params);
  }

  next();
};

export const csrfProtection = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Simple CSRF protection for state-changing operations
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
    const token = req.header('X-CSRF-Token') || req.body._csrf;
    const sessionToken = req.session?.csrfToken;

    if (!token || token !== sessionToken) {
      return res.status(403).json({ error: 'Invalid CSRF token' });
    }
  }

  next();
};`,
            language: 'typescript',
            filename: 'middleware.ts',
            tags: ['middleware', 'auth', 'validation']
          },
          {
            id: 'express-routes',
            title: 'Complete Express Routes',
            description: 'Full CRUD routes with authentication and validation',
            code: `// routes/auth.ts
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validateLogin, validateRegister } from '../middleware/validation';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Mock user database (replace with actual database)
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

const users: User[] = [];

// Generate JWT token
const generateToken = (user: Omit<User, 'password'>) => {
  return jwt.sign(
    { user: { id: user.id, email: user.email, role: user.role } },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', validateRegister, async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user: User = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      role: 'user',
      createdAt: new Date(),
    };

    users.push(user);

    // Generate token
    const token = generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post('/login', validateLogin, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// @route   GET /api/auth/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', authenticate, async (req: AuthRequest, res) => {
  try {
    const user = users.find(user => user.id === req.user?.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   PUT /api/auth/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', authenticate, async (req: AuthRequest, res) => {
  try {
    const { name, email } = req.body;
    const userIndex = users.findIndex(user => user.id === req.user?.id);
    
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if email is already taken by another user
    if (email && email !== users[userIndex].email) {
      const emailExists = users.some(user => 
        user.email === email && user.id !== req.user?.id
      );
      if (emailExists) {
        return res.status(400).json({ error: 'Email already in use' });
      }
    }

    // Update user
    if (name) users[userIndex].name = name;
    if (email) users[userIndex].email = email;

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: users[userIndex].id,
        name: users[userIndex].name,
        email: users[userIndex].email,
        role: users[userIndex].role,
      },
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   POST /api/auth/logout
// @desc    Logout user (invalidate token)
// @access  Private
router.post('/logout', authenticate, (req: AuthRequest, res) => {
  // In a real app, you might want to blacklist the token
  res.json({ message: 'Logout successful' });
});

export default router;

// routes/todos.ts
import express from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { validateTodo } from '../middleware/validation';

const router = express.Router();

interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const todos: Todo[] = [];

// @route   GET /api/todos
// @desc    Get all todos for authenticated user
// @access  Private
router.get('/', authenticate, (req: AuthRequest, res) => {
  try {
    const userTodos = todos.filter(todo => todo.userId === req.user?.id);
    
    // Optional filtering and sorting
    const { completed, priority, sortBy = 'createdAt', order = 'desc' } = req.query;
    
    let filteredTodos = userTodos;
    
    if (completed !== undefined) {
      filteredTodos = filteredTodos.filter(todo => 
        todo.completed === (completed === 'true')
      );
    }
    
    if (priority) {
      filteredTodos = filteredTodos.filter(todo => todo.priority === priority);
    }
    
    // Sort todos
    filteredTodos.sort((a, b) => {
      const aValue = a[sortBy as keyof Todo];
      const bValue = b[sortBy as keyof Todo];
      
      if (order === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    res.json(filteredTodos);
  } catch (error) {
    console.error('Get todos error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   POST /api/todos
// @desc    Create a new todo
// @access  Private
router.post('/', authenticate, validateTodo, (req: AuthRequest, res) => {
  try {
    const { title, description, priority = 'medium', dueDate } = req.body;
    
    const todo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      priority,
      dueDate,
      userId: req.user!.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    todos.push(todo);
    
    res.status(201).json({
      message: 'Todo created successfully',
      todo,
    });
  } catch (error) {
    console.error('Create todo error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   PUT /api/todos/:id
// @desc    Update a todo
// @access  Private
router.put('/:id', authenticate, (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed, priority, dueDate } = req.body;
    
    const todoIndex = todos.findIndex(
      todo => todo.id === id && todo.userId === req.user?.id
    );
    
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    // Update todo
    const todo = todos[todoIndex];
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;
    if (priority !== undefined) todo.priority = priority;
    if (dueDate !== undefined) todo.dueDate = dueDate;
    todo.updatedAt = new Date();
    
    res.json({
      message: 'Todo updated successfully',
      todo,
    });
  } catch (error) {
    console.error('Update todo error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   DELETE /api/todos/:id
// @desc    Delete a todo
// @access  Private
router.delete('/:id', authenticate, (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    
    const todoIndex = todos.findIndex(
      todo => todo.id === id && todo.userId === req.user?.id
    );
    
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    todos.splice(todoIndex, 1);
    
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Delete todo error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/todos/:id
// @desc    Get a specific todo
// @access  Private
router.get('/:id', authenticate, (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    
    const todo = todos.find(
      todo => todo.id === id && todo.userId === req.user?.id
    );
    
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json(todo);
  } catch (error) {
    console.error('Get todo error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;`,
            language: 'typescript',
            filename: 'routes.ts',
            tags: ['routes', 'crud', 'auth']
          }
        ]
      },
      {
        id: 'database-integration',
        title: 'Database Integration',
        description: 'Database setup and ORM configurations',
        tags: ['Database', 'MongoDB', 'PostgreSQL'],
        snippets: [
          {
            id: 'mongodb-mongoose',
            title: 'MongoDB with Mongoose Setup',
            description: 'Complete MongoDB integration with Mongoose ODM',
            code: `// config/database.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';
    
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    };

    const conn = await mongoose.connect(mongoURI, options);
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);

    // Handle connection events
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed through app termination');
      process.exit(0);
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;

// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  avatar?: string;
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (email: string) {
          return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
        },
        message: 'Please provide a valid email address',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Don't include password in queries by default
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    avatar: {
      type: String,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });

// Pre-save middleware to hash password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (error) {
    next(error);
  }
});

// Instance method to compare password
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Static methods
userSchema.statics.findByEmail = function (email: string) {
  return this.findOne({ email }).select('+password');
};

export const User = mongoose.model<IUser>('User', userSchema);

// models/Todo.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  userId: mongoose.Types.ObjectId;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    dueDate: {
      type: Date,
      validate: {
        validator: function (date: Date) {
          return !date || date > new Date();
        },
        message: 'Due date must be in the future',
      },
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tags: [{
      type: String,
      trim: true,
      maxlength: [20, 'Tag cannot exceed 20 characters'],
    }],
  },
  {
    timestamps: true,
  }
);

// Indexes
todoSchema.index({ userId: 1, createdAt: -1 });
todoSchema.index({ userId: 1, completed: 1 });
todoSchema.index({ userId: 1, priority: 1 });
todoSchema.index({ dueDate: 1 });

// Virtual for overdue
todoSchema.virtual('isOverdue').get(function () {
  return this.dueDate && new Date() > this.dueDate && !this.completed;
});

export const Todo = mongoose.model<ITodo>('Todo', todoSchema);

// services/UserService.ts
import { User, IUser } from '../models/User';
import { FilterQuery, UpdateQuery } from 'mongoose';

export class UserService {
  static async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData);
    return await user.save();
  }

  static async findUserById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  static async findUserByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email }).select('+password');
  }

  static async updateUser(
    id: string,
    updates: UpdateQuery<IUser>
  ): Promise<IUser | null> {
    return await User.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
  }

  static async deleteUser(id: string): Promise<boolean> {
    const result = await User.findByIdAndDelete(id);
    return !!result;
  }

  static async getAllUsers(
    filter: FilterQuery<IUser> = {},
    page = 1,
    limit = 10
  ): Promise<{ users: IUser[]; total: number; pages: number }> {
    const skip = (page - 1) * limit;
    
    const [users, total] = await Promise.all([
      User.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      User.countDocuments(filter),
    ]);

    return {
      users,
      total,
      pages: Math.ceil(total / limit),
    };
  }

  static async updateLastLogin(id: string): Promise<void> {
    await User.findByIdAndUpdate(id, { lastLogin: new Date() });
  }
}

// services/TodoService.ts
import { Todo, ITodo } from '../models/Todo';
import { FilterQuery, UpdateQuery } from 'mongoose';

export class TodoService {
  static async createTodo(todoData: Partial<ITodo>): Promise<ITodo> {
    const todo = new Todo(todoData);
    return await todo.save();
  }

  static async findTodoById(id: string, userId: string): Promise<ITodo | null> {
    return await Todo.findOne({ _id: id, userId });
  }

  static async getUserTodos(
    userId: string,
    filter: FilterQuery<ITodo> = {},
    sort: any = { createdAt: -1 },
    page = 1,
    limit = 10
  ): Promise<{ todos: ITodo[]; total: number; pages: number }> {
    const skip = (page - 1) * limit;
    const userFilter = { userId, ...filter };

    const [todos, total] = await Promise.all([
      Todo.find(userFilter)
        .sort(sort)
        .skip(skip)
        .limit(limit),
      Todo.countDocuments(userFilter),
    ]);

    return {
      todos,
      total,
      pages: Math.ceil(total / limit),
    };
  }

  static async updateTodo(
    id: string,
    userId: string,
    updates: UpdateQuery<ITodo>
  ): Promise<ITodo | null> {
    return await Todo.findOneAndUpdate(
      { _id: id, userId },
      { ...updates, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
  }

  static async deleteTodo(id: string, userId: string): Promise<boolean> {
    const result = await Todo.findOneAndDelete({ _id: id, userId });
    return !!result;
  }

  static async getOverdueTodos(userId: string): Promise<ITodo[]> {
    return await Todo.find({
      userId,
      dueDate: { $lt: new Date() },
      completed: false,
    }).sort({ dueDate: 1 });
  }

  static async getTodoStats(userId: string) {
    const stats = await Todo.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          completed: { $sum: { $cond: ['$completed', 1, 0] } },
          pending: { $sum: { $cond: ['$completed', 0, 1] } },
          high: { $sum: { $cond: [{ $eq: ['$priority', 'high'] }, 1, 0] } },
          medium: { $sum: { $cond: [{ $eq: ['$priority', 'medium'] }, 1, 0] } },
          low: { $sum: { $cond: [{ $eq: ['$priority', 'low'] }, 1, 0] } },
        },
      },
    ]);

    return stats[0] || {
      total: 0,
      completed: 0,
      pending: 0,
      high: 0,
      medium: 0,
      low: 0,
    };
  }
}`,
            language: 'typescript',
            filename: 'database-mongodb.ts',
            tags: ['mongodb', 'mongoose', 'schemas']
          }
        ]
      }
    ]
  },
  {
    id: 'page-templates',
    title: 'Complete Page Templates',
    description: 'Full page templates for common website types',
    icon: Layout,
    subcategories: [
      {
        id: 'landing-pages',
        title: 'Landing Pages',
        description: 'Modern landing page templates',
        tags: ['Landing', 'Marketing', 'Hero'],
        snippets: [
          {
            id: 'saas-landing',
            title: 'SaaS Landing Page',
            description: 'Complete SaaS product landing page with all sections',
            code: `import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Star, 
  Play, 
  Users, 
  Zap, 
  Shield,
  BarChart3,
  Clock,
  Globe
} from 'lucide-react';

const SaaSLandingPage = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Built for speed with modern architecture and optimized performance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting to drive your business forward."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support from our expert team."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for teams of any size."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "Reliable infrastructure that scales with your business worldwide."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 79,
      description: "Best for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Advanced security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "1TB storage",
        "Enterprise analytics",
        "24/7 phone support",
        "API access",
        "Custom integrations",
        "Advanced security",
        "Dedicated manager",
        "Custom SLA"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content: "This platform transformed how we manage our projects. The analytics alone saved us countless hours.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3e5?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Founder at StartupXYZ",
      content: "The best investment we've made. ROI was visible within the first month of implementation.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at ScaleUp",
      content: "Incredible user experience and powerful features. Our team productivity increased by 40%.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">ProductName</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Features
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Pricing
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Testimonials
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business
              <span className="block text-blue-600">With Our Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your workflow, boost productivity, and scale your business 
              with our comprehensive suite of tools designed for modern teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Hero Image/Video */}
          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Product Dashboard"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help you work smarter, not harder. 
              Built with modern teams in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that's right for your team. Upgrade or downgrade at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={\`relative bg-white rounded-xl shadow-lg p-8 \${
                  plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }\`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">\${plan.price}</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={\`w-full py-3 px-6 rounded-lg font-semibold transition-colors \${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }\`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Need a custom plan? <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using our platform to boost their productivity.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Start Your Free Trial
          </button>
          <p className="text-blue-100 mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold">ProductName</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transform your business with our comprehensive platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 ProductName. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaaSLandingPage;`,
            language: 'typescript',
            filename: 'SaaSLandingPage.tsx',
            tags: ['saas', 'landing', 'hero']
          }
        ]
      },
      {
        id: 'dashboard-templates',
        title: 'Dashboard Templates',
        description: 'Admin dashboards and data visualization layouts',
        tags: ['Dashboard', 'Admin', 'Analytics'],
        snippets: [
          {
            id: 'admin-dashboard',
            title: 'Complete Admin Dashboard',
            description: 'Full-featured admin dashboard with sidebar and charts',
            code: `import React, { useState } from 'react';
import {
  Home,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Plus,
  Filter,
  Download
} from 'lucide-react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('7days');

  const stats = [
    {
      label: 'Total Users',
      value: '12,345',
      change: '+12%',
      trend: 'up',
      icon: <Users className="w-6 h-6" />
    },
    {
      label: 'Revenue',
      value: '$54,321',
      change: '+8%',
      trend: 'up',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      label: 'Conversion Rate',
      value: '3.2%',
      change: '-2%',
      trend: 'down',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      label: 'Active Sessions',
      value: '1,234',
      change: '+5%',
      trend: 'up',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const recentActivity = [
    {
      user: 'John Doe',
      action: 'Created new project',
      time: '2 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    },
    {
      user: 'Jane Smith',
      action: 'Updated user settings',
      time: '5 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b3e5?w=32&h=32&fit=crop&crop=face'
    },
    {
      user: 'Mike Johnson',
      action: 'Completed task #123',
      time: '10 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
    },
    {
      user: 'Sarah Wilson',
      action: 'Added new team member',
      time: '15 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
    }
  ];

  const topPages = [
    { page: '/dashboard', views: 12500, change: '+15%' },
    { page: '/analytics', views: 8200, change: '+8%' },
    { page: '/users', views: 6100, change: '-3%' },
    { page: '/settings', views: 4800, change: '+12%' },
    { page: '/reports', views: 3200, change: '+20%' }
  ];

  const sidebarItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <Users className="w-5 h-5" />, label: 'Users', active: false },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics', active: false },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', active: false }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={\`\${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0\`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={\`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 \${
                item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
              }\`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden mr-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={\`p-3 rounded-full \${
                    stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }\`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={\`text-sm font-medium \${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }\`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last period</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Analytics Overview</h3>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                  >
                    <option value="7days">Last 7 days</option>
                    <option value="30days">Last 30 days</option>
                    <option value="90days">Last 90 days</option>
                  </select>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Placeholder for chart */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Chart visualization would go here</p>
                  <p className="text-sm text-gray-400">Use libraries like Chart.js or Recharts</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img
                      src={activity.avatar}
                      alt={activity.user}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span>
                        {' '}{activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Pages Table */}
          <div className="mt-6 bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm">
                    <Filter className="w-4 h-4 mr-1" />
                    Filter
                  </button>
                  <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Page
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topPages.map((page, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {page.page}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {page.views.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${
                          page.change.startsWith('+')
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }\`}>
                          {page.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;`,
            language: 'typescript',
            filename: 'AdminDashboard.tsx',
            tags: ['dashboard', 'admin', 'sidebar']
          }
        ]
      }
    ]
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design & Mobile',
    description: 'Mobile-first responsive layouts and media queries',
    icon: Smartphone,
    subcategories: [
      {
        id: 'media-queries',
        title: 'Media Queries & Breakpoints',
        description: 'Modern CSS media queries and responsive breakpoints',
        tags: ['CSS', 'Responsive', 'Mobile'],
        snippets: [
          {
            id: 'modern-media-queries',
            title: 'Modern Media Queries Collection',
            description: 'Comprehensive media queries for all devices and preferences',
            code: `/* ==========================================================================
   Modern Media Queries Collection
   ========================================================================== */

/* Base Styles (Mobile First) */
.container {
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
}

/* Standard Breakpoints */
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
    padding: 1.5rem;
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .nav-mobile {
    display: none;
  }
  
  .nav-desktop {
    display: flex;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* Extra extra large devices (1400px and up) */
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

/* ==========================================================================
   Container Queries (Modern Browsers)
   ========================================================================== */

/* Card container that adapts based on its own size */
.card-container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card {
    display: flex;
    align-items: center;
  }
  
  .card-image {
    width: 100px;
    height: 100px;
  }
}

@container (min-width: 500px) {
  .card {
    flex-direction: column;
  }
  
  .card-image {
    width: 200px;
    height: 150px;
  }
}

/* ==========================================================================
   Orientation Queries
   ========================================================================== */

/* Portrait orientation */
@media (orientation: portrait) {
  .hero-section {
    height: 100vh;
    padding: 2rem 1rem;
  }
  
  .navigation {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}

/* Landscape orientation */
@media (orientation: landscape) {
  .hero-section {
    height: 80vh;
    padding: 1rem 2rem;
  }
  
  .navigation {
    position: static;
  }
}

/* Landscape phones specific */
@media (orientation: landscape) and (max-height: 600px) {
  .modal {
    height: 90vh;
    overflow-y: auto;
  }
}

/* ==========================================================================
   User Preference Queries
   ========================================================================== */

/* Dark mode preference */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
    --border-color: #333333;
  }
  
  body {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  .card {
    background-color: #2d2d2d;
    border-color: var(--border-color);
  }
}

/* Light mode preference */
@media (prefers-color-scheme: light) {
  :root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --border-color: #e5e5e5;
  }
  
  body {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  .card {
    background-color: #ffffff;
    border-color: var(--border-color);
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast preference */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid currentColor;
  }
  
  .card {
    border: 2px solid currentColor;
  }
}

/* ==========================================================================
   Device-Specific Queries
   ========================================================================== */

/* iPhone specific */
@media only screen 
  and (device-width: 375px) 
  and (device-height: 812px) 
  and (-webkit-device-pixel-ratio: 3) {
  /* iPhone X/XS specific styles */
  .safe-area {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }
}

/* iPad specific */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
  .touch-friendly {
    min-height: 44px;
    min-width: 44px;
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
    background-size: 100px 50px;
  }
}

/* ==========================================================================
   Print Styles
   ========================================================================== */

@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  .no-print {
    display: none !important;
  }
  
  .page-break {
    page-break-after: always;
  }
  
  a[href]:after {
    content: " (" attr(href) ")";
  }
  
  .container {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}

/* ==========================================================================
   Hover and Pointer Capabilities
   ========================================================================== */

/* Devices that can hover */
@media (hover: hover) {
  .button:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
  }
  
  .card:hover {
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
}

/* Devices that cannot hover (touch devices) */
@media (hover: none) {
  .button:active {
    background-color: #0056b3;
    transform: scale(0.98);
  }
}

/* Fine pointer (mouse) */
@media (pointer: fine) {
  .small-target {
    min-height: 24px;
    min-width: 24px;
  }
}

/* Coarse pointer (touch) */
@media (pointer: coarse) {
  .touch-target {
    min-height: 44px;
    min-width: 44px;
  }
}

/* ==========================================================================
   Progressive Enhancement Examples
   ========================================================================== */

/* Base styles for older browsers */
.grid-fallback {
  display: block;
}

.grid-fallback > * {
  margin-bottom: 1rem;
}

/* Enhanced styles for modern browsers */
@supports (display: grid) {
  .grid-fallback {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .grid-fallback > * {
    margin-bottom: 0;
  }
}

/* CSS custom properties support */
@supports (--css: variables) {
  :root {
    --primary-color: #007bff;
    --spacing-unit: 1rem;
  }
  
  .button {
    background-color: var(--primary-color);
    padding: var(--spacing-unit);
  }
}

/* Flexbox support */
@supports (display: flex) {
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

/* ==========================================================================
   Responsive Typography
   ========================================================================== */

/* Fluid typography using clamp() */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.25rem, 3vw, 2rem);
  line-height: 1.3;
}

p {
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 1.6;
}

/* Responsive spacing */
.section {
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem);
}

/* ==========================================================================
   Utility Classes for Responsive Design
   ========================================================================== */

/* Visibility utilities */
.hidden-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hidden-mobile {
    display: block;
  }
  
  .hidden-desktop {
    display: none;
  }
}

/* Responsive text alignment */
.text-center-mobile {
  text-align: center;
}

@media (min-width: 768px) {
  .text-center-mobile {
    text-align: left;
  }
}

/* Responsive margins and padding */
.mb-sm-0 {
  margin-bottom: 1rem;
}

@media (min-width: 576px) {
  .mb-sm-0 {
    margin-bottom: 0;
  }
}`,
            language: 'css',
            filename: 'responsive-media-queries.css',
            tags: ['media-queries', 'responsive', 'mobile-first']
          }
        ]
      },
      {
        id: 'css-grid-layouts',
        title: 'CSS Grid Responsive Layouts',
        description: 'Modern CSS Grid layouts for responsive design',
        tags: ['CSS Grid', 'Layout', 'Responsive'],
        snippets: [
          {
            id: 'css-grid-layouts',
            title: 'Complete CSS Grid Layout System',
            description: 'Comprehensive CSS Grid layouts for modern responsive design',
            code: `/* ==========================================================================
   CSS Grid Layout System
   ========================================================================== */

/* CSS Custom Properties for Grid System */
:root {
  --grid-gap: 1rem;
  --grid-gap-large: 2rem;
  --container-padding: 1rem;
  --container-max-width: 1200px;
}

/* ==========================================================================
   Basic Grid Container
   ========================================================================== */

.grid {
  display: grid;
  gap: var(--grid-gap);
}

.grid-large-gap {
  gap: var(--grid-gap-large);
}

/* ==========================================================================
   Responsive Grid Templates
   ========================================================================== */

/* Auto-fit grid - items adapt to container width */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--grid-gap);
}

/* Auto-fill grid - creates empty columns if space available */
.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--grid-gap);
}

/* Fixed column count responsive grid */
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--grid-gap);
}

@media (min-width: 576px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) {
  .grid-responsive {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ==========================================================================
   Page Layout Grids
   ========================================================================== */

/* Holy Grail Layout */
.holy-grail-layout {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "aside"
    "footer";
  grid-template-rows: auto auto 1fr auto auto;
  min-height: 100vh;
  gap: var(--grid-gap);
}

@media (min-width: 768px) {
  .holy-grail-layout {
    grid-template-areas:
      "header header header"
      "nav main aside"
      "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
  }
}

.holy-grail-header { grid-area: header; }
.holy-grail-nav { grid-area: nav; }
.holy-grail-main { grid-area: main; }
.holy-grail-aside { grid-area: aside; }
.holy-grail-footer { grid-area: footer; }

/* Sidebar Layout */
.sidebar-layout {
  display: grid;
  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "footer";
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
  gap: var(--grid-gap);
}

@media (min-width: 768px) {
  .sidebar-layout {
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
  }
}

.sidebar-header { grid-area: header; }
.sidebar-nav { grid-area: sidebar; }
.sidebar-main { grid-area: main; }
.sidebar-footer { grid-area: footer; }

/* Dashboard Layout */
.dashboard-layout {
  display: grid;
  grid-template-areas:
    "header"
    "sidebar"
    "main";
  grid-template-rows: auto auto 1fr;
  height: 100vh;
  gap: var(--grid-gap);
}

@media (min-width: 768px) {
  .dashboard-layout {
    grid-template-areas:
      "sidebar header"
      "sidebar main";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr;
  }
}

/* ==========================================================================
   Content Grid Layouts
   ========================================================================== */

/* Card Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--grid-gap);
  padding: var(--container-padding);
}

/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--grid-gap-large);
}

@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Image Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
  padding: var(--container-padding);
}

.gallery-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Pinterest-style Masonry Grid */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--grid-gap);
  grid-auto-rows: auto;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: var(--grid-gap);
}

/* ==========================================================================
   Complex Layout Examples
   ========================================================================== */

/* Magazine Layout */
.magazine-layout {
  display: grid;
  grid-template-areas:
    "hero hero"
    "article1 article2"
    "article3 article3"
    "sidebar content";
  grid-template-columns: 1fr 1fr;
  gap: var(--grid-gap);
}

@media (min-width: 768px) {
  .magazine-layout {
    grid-template-areas:
      "hero hero hero"
      "article1 article2 sidebar"
      "article3 content content";
    grid-template-columns: 1fr 1fr 200px;
  }
}

.magazine-hero { grid-area: hero; }
.magazine-article1 { grid-area: article1; }
.magazine-article2 { grid-area: article2; }
.magazine-article3 { grid-area: article3; }
.magazine-sidebar { grid-area: sidebar; }
.magazine-content { grid-area: content; }

/* Product Grid with Featured Items */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gap);
}

.product-item {
  grid-column: span 1;
  grid-row: span 1;
}

.product-featured {
  grid-column: span 2;
  grid-row: span 2;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .product-featured {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
  
  .product-featured {
    grid-column: span 1;
    grid-row: span 1;
  }
}

/* ==========================================================================
   Utility Classes
   ========================================================================== */

/* Grid Column Spanning */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
.col-span-3 { grid-column: span 3; }
.col-span-4 { grid-column: span 4; }
.col-span-full { grid-column: 1 / -1; }

/* Grid Row Spanning */
.row-span-1 { grid-row: span 1; }
.row-span-2 { grid-row: span 2; }
.row-span-3 { grid-row: span 3; }
.row-span-4 { grid-row: span 4; }

/* Grid Positioning */
.col-start-1 { grid-column-start: 1; }
.col-start-2 { grid-column-start: 2; }
.col-start-3 { grid-column-start: 3; }
.col-start-4 { grid-column-start: 4; }

.col-end-1 { grid-column-end: 1; }
.col-end-2 { grid-column-end: 2; }
.col-end-3 { grid-column-end: 3; }
.col-end-4 { grid-column-end: 4; }
.col-end-auto { grid-column-end: auto; }

/* Grid Alignment */
.justify-start { justify-self: start; }
.justify-end { justify-self: end; }
.justify-center { justify-self: center; }
.justify-stretch { justify-self: stretch; }

.align-start { align-self: start; }
.align-end { align-self: end; }
.align-center { align-self: center; }
.align-stretch { align-self: stretch; }

/* ==========================================================================
   Container Queries for Grid Components
   ========================================================================== */

.grid-container {
  container-type: inline-size;
}

/* Adjust grid based on container width */
@container (min-width: 300px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (min-width: 500px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@container (min-width: 700px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ==========================================================================
   Example Component Styles
   ========================================================================== */

/* Card Component */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Hero Section */
.hero {
  display: grid;
  place-items: center;
  min-height: 60vh;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--grid-gap);
  margin: 2rem 0;
}

.stat {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
}

.stat-label {
  color: #666;
  margin-top: 0.5rem;
}`,
            language: 'css',
            filename: 'css-grid-layouts.css',
            tags: ['css-grid', 'layout', 'responsive']
          }
        ]
      }
    ]
  },
  {
    id: 'styling-frameworks',
    title: 'Styling & CSS Frameworks',
    description: 'Modern CSS frameworks and styling approaches',
    icon: Palette,
    subcategories: [
      {
        id: 'tailwind-examples',
        title: 'Tailwind CSS Examples',
        description: 'Comprehensive Tailwind CSS component examples',
        tags: ['Tailwind', 'Utility-First', 'CSS'],
        snippets: [
          {
            id: 'tailwind-components',
            title: 'Complete Tailwind Component Library',
            description: 'Ready-to-use Tailwind CSS components for modern web apps',
            code: `<!-- Navigation Bar -->
<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img class="h-8 w-8" src="/logo.svg" alt="Logo">
        </div>
        <div class="hidden md:block ml-10">
          <div class="flex items-baseline space-x-4">
            <a href="#" class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="flex items-center space-x-4">
          <button class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sign In</button>
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Sign Up</button>
        </div>
      </div>
      <div class="md:hidden flex items-center">
        <button class="text-gray-600 hover:text-gray-900">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Build Amazing
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Experiences
        </span>
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Create beautiful, responsive web applications with our modern component library
        and design system.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
          Get Started
        </button>
        <button class="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-50">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Card Grid -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Features</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Feature Card 1 -->
      <div class="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
          <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
        <p class="text-gray-600">Built for speed with modern architecture and optimized performance.</p>
      </div>
      
      <!-- Feature Card 2 -->
      <div class="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
          <svg class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Reliable</h3>
        <p class="text-gray-600">Battle-tested components used by thousands of developers worldwide.</p>
      </div>
      
      <!-- Feature Card 3 -->
      <div class="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
          <svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Customizable</h3>
        <p class="text-gray-600">Easily customize every component to match your brand and design.</p>
      </div>
    </div>
  </div>
</section>

<!-- Form Example -->
<section class="py-20 bg-gray-50">
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
      <form class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" id="first-name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John">
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" id="last-name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Doe">
          </div>
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@example.com">
        </div>
        
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
          <select id="subject" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
            <option>General Inquiry</option>
            <option>Support Request</option>
            <option>Business Partnership</option>
            <option>Other</option>
          </select>
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea id="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your project..."></textarea>
        </div>
        
        <div class="flex items-center">
          <input type="checkbox" id="newsletter" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
          <label for="newsletter" class="ml-2 block text-sm text-gray-700">
            Subscribe to our newsletter for updates
          </label>
        </div>
        
        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors transform hover:scale-[1.02] active:scale-[0.98]">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="py-20 bg-gray-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-center mb-12">Trusted by Developers</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="text-4xl font-bold text-blue-400 mb-2">50K+</div>
        <div class="text-gray-300">Active Users</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-green-400 mb-2">100K+</div>
        <div class="text-gray-300">Downloads</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
        <div class="text-gray-300">Uptime</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
        <div class="text-gray-300">Support</div>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Cards -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
      <p class="text-xl text-gray-600">Simple, transparent pricing that grows with you.</p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Basic Plan -->
      <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Basic</h3>
        <p class="text-gray-600 mb-6">Perfect for getting started</p>
        <div class="mb-6">
          <span class="text-4xl font-bold text-gray-900">$9</span>
          <span class="text-gray-600">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Up to 5 projects
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            10GB storage
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Email support
          </li>
        </ul>
        <button class="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-semibold transition-colors">
          Get Started
        </button>
      </div>
      
      <!-- Pro Plan -->
      <div class="bg-blue-600 text-white rounded-xl p-8 transform scale-105 hover:shadow-2xl transition-all relative">
        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span class="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
        <h3 class="text-xl font-semibold mb-2">Pro</h3>
        <p class="text-blue-100 mb-6">Best for growing businesses</p>
        <div class="mb-6">
          <span class="text-4xl font-bold">$29</span>
          <span class="text-blue-100">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Unlimited projects
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            100GB storage
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Priority support
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Advanced analytics
          </li>
        </ul>
        <button class="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
      
      <!-- Enterprise Plan -->
      <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
        <p class="text-gray-600 mb-6">For large organizations</p>
        <div class="mb-6">
          <span class="text-4xl font-bold text-gray-900">$99</span>
          <span class="text-gray-600">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Everything in Pro
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            1TB storage
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            24/7 phone support
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Custom integrations
          </li>
        </ul>
        <button class="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-semibold transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div class="flex items-center mb-4">
          <img class="h-8 w-8" src="/logo.svg" alt="Logo">
          <span class="ml-3 text-xl font-bold">Company</span>
        </div>
        <p class="text-gray-300 mb-4">
          Building the future of web development, one component at a time.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-300 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-300 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-300 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-4">Product</h3>
        <ul class="space-y-2 text-gray-300">
          <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" class="hover:text-white transition-colors">API Reference</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="font-semibold mb-4">Company</h3>
        <ul class="space-y-2 text-gray-300">
          <li><a href="#" class="hover:text-white transition-colors">About</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="font-semibold mb-4">Support</h3>
        <ul class="space-y-2 text-gray-300">
          <li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Community</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Status</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-300">© 2025 Company Name. All rights reserved.</p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="text-gray-300 hover:text-white transition-colors">Terms</a>
        <a href="#" class="text-gray-300 hover:text-white transition-colors">Privacy</a>
        <a href="#" class="text-gray-300 hover:text-white transition-colors">Cookies</a>
      </div>
    </div>
  </div>
</footer>`,
            language: 'html',
            filename: 'tailwind-components.html',
            tags: ['tailwind', 'components', 'responsive']
          }
        ]
      }
    ]
  },
  {
    id: 'deployment-auth',
    title: 'Deployment & Authentication',
    description: 'Deployment configurations and authentication systems',
    icon: Shield,
    subcategories: [
      {
        id: 'deployment-configs',
        title: 'Deployment Configurations',
        description: 'Docker, Vercel, Netlify, and cloud deployment setups',
        tags: ['Deployment', 'Docker', 'CI/CD'],
        snippets: [
          {
            id: 'docker-deployment',
            title: 'Complete Docker Deployment Setup',
            description: 'Production-ready Docker configuration with multi-stage builds',
            code: `# Dockerfile
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Create app directory
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# Start the application
CMD ["npm", "start"]

---

# docker-compose.yml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
      target: production
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped
    networks:
      - app-network

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    restart: unless-stopped
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped
    networks:
      - app-network

volumes:
  postgres_data:
  redis_data:

networks:
  app-network:
    driver: bridge

---

# nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream app {
        server app:3000;
    }

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

    server {
        listen 80;
        server_name localhost;

        # Redirect HTTP to HTTPS
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name localhost;

        # SSL configuration
        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
        ssl_prefer_server_ciphers off;

        # Security headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";

        # Gzip compression
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_types
            text/plain
            text/css
            text/xml
            text/javascript
            application/javascript
            application/xml+rss
            application/json;

        # Static file caching
        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # API rate limiting
        location /api/ {
            limit_req zone=api burst=20 nodelay;
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Main application
        location / {
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}

---

# .dockerignore
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
README.md
.env
.nyc_output
coverage
.DS_Store
.vscode

---

# GitHub Actions CI/CD Pipeline
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Run linting
        run: npm run lint
      
      - name: Run type checking
        run: npm run type-check

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v4
      
      - name: Log in to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=ref,event=branch
            type=ref,event=pr
            type=sha
      
      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Deploy to server
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /opt/myapp
            docker-compose pull
            docker-compose up -d
            docker system prune -f

---

# Kubernetes Deployment
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: ghcr.io/username/myapp:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: myapp-secrets
              key: database-url
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer

---

# Helm Chart values.yaml
replicaCount: 3

image:
  repository: ghcr.io/username/myapp
  pullPolicy: IfNotPresent
  tag: "latest"

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  className: "nginx"
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
  hosts:
    - host: myapp.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: myapp-tls
      hosts:
        - myapp.example.com

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 128Mi

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80

nodeSelector: {}
tolerations: []
affinity: {}`,
            language: 'dockerfile',
            filename: 'docker-deployment.yml',
            tags: ['docker', 'kubernetes', 'cicd']
          },
          {
            id: 'vercel-deployment',
            title: 'Vercel Deployment Configuration',
            description: 'Complete Vercel deployment setup with environment variables',
            code: `{
  "version": 2,
  "name": "my-app",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node",
      "config": {
        "includeFiles": ["dist/**"]
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  },
  "functions": {
    "app/api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, PUT, DELETE, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "X-Requested-With, Content-Type, Accept, Authorization"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/app/(.*)",
      "destination": "/app/$1"
    },
    {
      "source": "/((?!api).*)",
      "destination": "/index.html"
    }
  ],
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}

---

# GitHub Actions for Vercel Deployment
# .github/workflows/vercel.yml
name: Vercel Production Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

on:
  push:
    branches:
      - main

jobs:
  Deploy-Production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}

---

# Next.js Configuration for Vercel
# next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Image optimization
  images: {
    domains: ['example.com', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/old/:path*',
        destination: '/new/:path*',
        permanent: true,
      },
    ];
  },
  
  // Rewrites for API routes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

---

# Environment Variables Setup
# .env.example
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/myapp"
REDIS_URL="redis://localhost:6379"

# Authentication
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# API Keys
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
SENDGRID_API_KEY="SG...."

# External Services
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Analytics
GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"
POSTHOG_KEY="phc_..."

---

# Package.json scripts for deployment
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "type-check": "tsc --noEmit",
    "vercel-build": "npm run build",
    "postbuild": "next-sitemap"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/node": "20.0.0",
    "@types/react": "18.2.0",
    "@types/react-dom": "18.2.0",
    "eslint": "8.0.0",
    "eslint-config-next": "14.0.0",
    "typescript": "5.0.0"
  }
}

---

# Serverless Functions for Vercel
# api/hello.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const { name = 'World' } = request.query;
  
  // CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }
  
  response.status(200).json({
    message: \`Hello \${name}!\`,
    timestamp: new Date().toISOString(),
    method: request.method,
  });
}

---

# Edge Functions for Vercel
# api/edge-example.ts
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  
  return new Response(
    JSON.stringify({
      message: \`Hello \${name} from the edge!\`,
      location: request.geo?.city || 'Unknown',
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=60, stale-while-revalidate',
      },
    }
  );
}`,
            language: 'json',
            filename: 'vercel.json',
            tags: ['vercel', 'serverless', 'deployment']
          }
        ]
      },
      {
        id: 'auth-systems',
        title: 'Authentication Systems',
        description: 'Complete authentication implementations',
        tags: ['Auth', 'JWT', 'OAuth'],
        snippets: [
          {
            id: 'nextauth-setup',
            title: 'Complete NextAuth.js Setup',
            description: 'Full NextAuth.js authentication with multiple providers',
            code: `// pages/api/auth/[...nextauth].ts
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      
      if (account) {
        token.accessToken = account.access_token;
      }
      
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.accessToken = token.accessToken as string;
      }
      
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return \`\${baseUrl}\${url}\`;
      
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;
      
      return baseUrl;
    },
  },

  events: {
    async signIn(message) {
      console.log('User signed in:', message.user.email);
    },
    
    async signOut(message) {
      console.log('User signed out:', message.token);
    },
    
    async createUser(message) {
      console.log('New user created:', message.user.email);
      
      // Send welcome email
      // await sendWelcomeEmail(message.user.email);
    },
  },

  debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions);

---

// lib/auth.ts - Authentication utilities
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

// Higher-order function for protecting API routes
export function withAuth(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await auth(req, res);
    
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    return handler(req, res, session);
  };
}

// Role-based access control
export function withRole(roles: string[]) {
  return function (handler: any) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const session = await auth(req, res);
      
      if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        include: { roles: true },
      });
      
      const hasRole = user?.roles.some(role => roles.includes(role.name));
      
      if (!hasRole) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      
      return handler(req, res, session);
    };
  };
}

---

// components/auth/SignInForm.tsx
import { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid credentials');
      } else {
        const session = await getSession();
        if (session) {
          router.push('/dashboard');
        }
      }
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: '/dashboard' });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => handleOAuthSignIn('google')}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="ml-2">Google</span>
          </button>

          <button
            onClick={() => handleOAuthSignIn('github')}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="ml-2">GitHub</span>
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

---

// middleware.ts - Route protection
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect admin routes
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return token?.role === 'admin';
        }
        
        // Protect dashboard routes
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
          return !!token;
        }
        
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};

---

// hooks/useAuth.ts - Custom auth hook
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useAuth(redirectTo?: string) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Still loading

    if (!session && redirectTo) {
      router.push(redirectTo);
    }
  }, [session, status, router, redirectTo]);

  return {
    session,
    loading: status === 'loading',
    authenticated: !!session,
  };
}

export function useRequireAuth(redirectTo = '/auth/signin') {
  const auth = useAuth(redirectTo);
  
  return auth;
}

---

// types/next-auth.d.ts - Extend NextAuth types
import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role?: string;
    } & DefaultSession['user'];
    accessToken?: string;
  }

  interface User extends DefaultUser {
    role?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string;
    role?: string;
    accessToken?: string;
  }
}`,
            language: 'typescript',
            filename: 'nextauth-setup.ts',
            tags: ['nextauth', 'authentication', 'oauth']
          }
        ]
      }
    ]
  }
];`,
            language: 'typescript',
            filename: 'codeLibrary.ts',
            tags: ['library', 'complete', 'examples']
          }
        ]
      }
    ]
  }
];

export { codeLibrary };`,
            language: 'typescript',
            filename: 'codeLibrary.ts',
            tags: ['complete', 'examples', 'comprehensive']
          }
        ]
      }
    ]
  }
];

export { codeLibrary };`,
            language: 'typescript',
            filename: 'codeLibrary.ts',
            tags: ['data', 'library', 'complete']
          }
        ]
      }
    ]
  }
];

export { codeLibrary };`,
            language: 'typescript',
            filename: 'codeLibrary.ts',
            tags: ['library', 'code', 'examples']
          }
        ]
      }
    ]
  }
];

export { codeLibrary };
