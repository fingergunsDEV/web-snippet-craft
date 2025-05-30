
import { Code, Layout, Database, Server, Smartphone, Globe, FileText, Settings, Palette } from 'lucide-react';

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
    title: 'HTML Semantics & Structure',
    description: 'Modern HTML5 semantic elements and their proper usage',
    icon: FileText,
    subcategories: [
      {
        id: 'semantic-elements',
        title: 'Semantic HTML Elements',
        description: 'Proper semantic HTML structure for accessibility and SEO',
        tags: ['HTML5', 'Semantics', 'Accessibility'],
        snippets: [
          {
            id: 'basic-semantic-structure',
            title: 'Basic Semantic Page Structure',
            description: 'Complete semantic HTML page structure with all essential elements',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Page</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="hero">
            <h1>Welcome to Our Website</h1>
            <p>This is the main content area</p>
        </section>
        
        <article>
            <h2>Article Title</h2>
            <p>Article content goes here...</p>
            <aside>
                <h3>Related Information</h3>
                <p>Sidebar content</p>
            </aside>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
    </footer>
</body>
</html>`,
            language: 'html',
            filename: 'semantic-structure.html',
            tags: ['HTML5', 'Structure', 'Semantic']
          },
          {
            id: 'forms-inputs',
            title: 'Modern Form Elements',
            description: 'HTML5 form elements with proper labels and validation',
            code: `<form>
    <fieldset>
        <legend>Contact Information</legend>
        
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone">
        
        <label for="date">Date of Birth:</label>
        <input type="date" id="date" name="date">
        
        <label for="range">Priority Level:</label>
        <input type="range" id="range" name="priority" min="1" max="5">
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <input type="checkbox" id="newsletter" name="newsletter">
        <label for="newsletter">Subscribe to newsletter</label>
        
        <button type="submit">Send Message</button>
    </fieldset>
</form>`,
            language: 'html',
            filename: 'modern-forms.html',
            tags: ['Forms', 'Input', 'Validation']
          }
        ]
      },
      {
        id: 'modern-html',
        title: 'Modern HTML Features',
        description: 'Latest HTML features and best practices',
        tags: ['HTML5', 'Modern', 'Progressive'],
        snippets: [
          {
            id: 'web-components',
            title: 'Custom Web Components',
            description: 'Creating reusable web components with Custom Elements API',
            code: `// Define a custom element
class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = \`
            <style>
                button {
                    background: linear-gradient(45deg, #007bff, #6610f2);
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: transform 0.2s;
                }
                button:hover {
                    transform: scale(1.05);
                }
            </style>
            <button>
                <slot></slot>
            </button>
        \`;
    }
}

// Register the custom element
customElements.define('custom-button', CustomButton);`,
            language: 'javascript',
            filename: 'web-components.js',
            tags: ['Web Components', 'Custom Elements', 'Shadow DOM']
          },
          {
            id: 'progressive-enhancement',
            title: 'Progressive Enhancement Pattern',
            description: 'HTML structure that works without JavaScript and enhances with it',
            code: `<!-- Base HTML that works without JS -->
<details class="accordion">
    <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <span class="icon">+</span>
    </summary>
    <div class="accordion-content">
        <p>This content is accessible even without JavaScript.</p>
        <ul>
            <li>Works with keyboard navigation</li>
            <li>Screen reader friendly</li>
            <li>Falls back gracefully</li>
        </ul>
    </div>
</details>

<script>
// Progressive enhancement with JavaScript
document.querySelectorAll('.accordion').forEach(accordion => {
    const summary = accordion.querySelector('summary');
    const icon = summary.querySelector('.icon');
    
    accordion.addEventListener('toggle', () => {
        icon.textContent = accordion.open ? '−' : '+';
    });
});
</script>`,
            language: 'html',
            filename: 'progressive-enhancement.html',
            tags: ['Progressive Enhancement', 'Accessibility', 'JavaScript']
          }
        ]
      }
    ]
  },
  {
    id: 'react',
    title: 'React Framework',
    description: 'Modern React patterns, hooks, and best practices',
    icon: Code,
    subcategories: [
      {
        id: 'react-hooks',
        title: 'React Hooks Patterns',
        description: 'Custom hooks and advanced hook patterns',
        tags: ['React', 'Hooks', 'State Management'],
        snippets: [
          {
            id: 'custom-fetch-hook',
            title: 'Custom Data Fetching Hook',
            description: 'Reusable hook for API calls with loading and error states',
            code: `import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Usage example
function UserProfile({ userId }) {
    const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user found</div>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}`,
            language: 'javascript',
            filename: 'useFetch.js',
            tags: ['Hooks', 'API', 'Custom Hook']
          },
          {
            id: 'context-provider',
            title: 'Context Provider Pattern',
            description: 'Global state management with React Context',
            code: `import React, { createContext, useContext, useReducer } from 'react';

// Define the context
const AppContext = createContext();

// Define reducer for state management
const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_THEME':
            return { ...state, theme: action.payload };
        case 'TOGGLE_SIDEBAR':
            return { ...state, sidebarOpen: !state.sidebarOpen };
        default:
            return state;
    }
};

// Provider component
export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, {
        user: null,
        theme: 'light',
        sidebarOpen: false
    });

    const actions = {
        setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
        setTheme: (theme) => dispatch({ type: 'SET_THEME', payload: theme }),
        toggleSidebar: () => dispatch({ type: 'TOGGLE_SIDEBAR' })
    };

    return (
        <AppContext.Provider value={{ state, actions }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to use the context
export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}

// Usage in component
function Header() {
    const { state, actions } = useApp();
    
    return (
        <header className={\`header \${state.theme}\`}>
            <button onClick={actions.toggleSidebar}>
                Toggle Sidebar
            </button>
            <span>Welcome, {state.user?.name}</span>
        </header>
    );
}`,
            language: 'javascript',
            filename: 'AppContext.js',
            tags: ['Context', 'State Management', 'Provider']
          }
        ]
      },
      {
        id: 'react-components',
        title: 'React Component Patterns',
        description: 'Reusable component patterns and composition',
        tags: ['React', 'Components', 'Patterns'],
        snippets: [
          {
            id: 'compound-component',
            title: 'Compound Component Pattern',
            description: 'Flexible component composition with multiple related components',
            code: `import React, { createContext, useContext, useState } from 'react';

// Context for managing accordion state
const AccordionContext = createContext();

// Main Accordion component
export function Accordion({ children, allowMultiple = false }) {
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            if (!allowMultiple) {
                newOpenItems.clear();
            }
            newOpenItems.add(id);
        }
        
        setOpenItems(newOpenItems);
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div className="accordion">
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

// Accordion Item component
Accordion.Item = function AccordionItem({ id, children }) {
    return (
        <div className="accordion-item">
            {children}
        </div>
    );
};

// Accordion Header component
Accordion.Header = function AccordionHeader({ id, children }) {
    const { openItems, toggleItem } = useContext(AccordionContext);
    const isOpen = openItems.has(id);

    return (
        <button
            className={\`accordion-header \${isOpen ? 'open' : ''}\`}
            onClick={() => toggleItem(id)}
        >
            {children}
            <span className="icon">{isOpen ? '−' : '+'}</span>
        </button>
    );
};

// Accordion Content component
Accordion.Content = function AccordionContent({ id, children }) {
    const { openItems } = useContext(AccordionContext);
    const isOpen = openItems.has(id);

    return isOpen ? (
        <div className="accordion-content">
            {children}
        </div>
    ) : null;
};

// Usage example
function FAQSection() {
    return (
        <Accordion allowMultiple>
            <Accordion.Item id="q1">
                <Accordion.Header id="q1">
                    What is React?
                </Accordion.Header>
                <Accordion.Content id="q1">
                    React is a JavaScript library for building user interfaces.
                </Accordion.Content>
            </Accordion.Item>
            
            <Accordion.Item id="q2">
                <Accordion.Header id="q2">
                    How do hooks work?
                </Accordion.Header>
                <Accordion.Content id="q2">
                    Hooks let you use state and lifecycle features in function components.
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
}`,
            language: 'javascript',
            filename: 'CompoundComponent.jsx',
            tags: ['Compound Component', 'Context', 'Composition']
          }
        ]
      }
    ]
  },
  {
    id: 'vue',
    title: 'Vue.js Framework',
    description: 'Vue.js components, composables, and modern patterns',
    icon: Code,
    subcategories: [
      {
        id: 'vue-composition',
        title: 'Vue Composition API',
        description: 'Modern Vue development with Composition API',
        tags: ['Vue', 'Composition API', 'Reactivity'],
        snippets: [
          {
            id: 'vue-composable',
            title: 'Custom Composable Function',
            description: 'Reusable logic with Vue Composition API',
            code: `import { ref, computed, onMounted, onUnmounted } from 'vue';

// Custom composable for managing local storage
export function useLocalStorage(key, defaultValue) {
    const storedValue = localStorage.getItem(key);
    const value = ref(storedValue ? JSON.parse(storedValue) : defaultValue);

    const setValue = (newValue) => {
        value.value = newValue;
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setValue];
}

// Custom composable for API data fetching
export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetchData = async () => {
        loading.value = true;
        error.value = null;
        
        try {
            const response = await fetch(url.value || url);
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            data.value = await response.json();
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    onMounted(fetchData);

    return { data, error, loading, refetch: fetchData };
}

// Usage in a Vue component
export default {
    setup() {
        // Using the localStorage composable
        const [theme, setTheme] = useLocalStorage('theme', 'light');
        
        // Using the fetch composable
        const { data: users, loading, error } = useFetch('/api/users');
        
        const toggleTheme = () => {
            setTheme(theme.value === 'light' ? 'dark' : 'light');
        };

        return {
            theme,
            toggleTheme,
            users,
            loading,
            error
        };
    }
};`,
            language: 'javascript',
            filename: 'composables.js',
            tags: ['Composables', 'Composition API', 'Reusability']
          },
          {
            id: 'vue-component',
            title: 'Vue Component with Script Setup',
            description: 'Modern Vue component using script setup syntax',
            code: `<template>
  <div class="user-card" :class="{ 'dark': isDark }">
    <div class="avatar">
      <img :src="user.avatar" :alt="user.name" />
    </div>
    
    <div class="content">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      
      <div class="actions">
        <button @click="sendMessage" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
        <button @click="toggleFavorite">
          {{ isFavorite ? '💙' : '🤍' }} 
          {{ isFavorite ? 'Favorited' : 'Add to Favorites' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

// Props
const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  isDark: {
    type: Boolean,
    default: false
  }
});

// Emits
const emit = defineEmits(['message-sent', 'favorite-toggled']);

// Reactive state
const loading = ref(false);
const isFavorite = ref(false);

// Computed properties
const displayName = computed(() => {
  return props.user.firstName + ' ' + props.user.lastName;
});

// Methods
const sendMessage = async () => {
  loading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    emit('message-sent', props.user.id);
  } catch (error) {
    console.error('Failed to send message:', error);
  } finally {
    loading.value = false;
  }
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  emit('favorite-toggled', {
    userId: props.user.id,
    isFavorite: isFavorite.value
  });
};
</script>

<style scoped>
.user-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: white;
  transition: all 0.2s;
}

.user-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.user-card.dark {
  background: #1a202c;
  border-color: #2d3748;
  color: white;
}

.avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.content {
  flex: 1;
}

.actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:first-child {
  background: #3182ce;
  color: white;
}

button:first-child:hover {
  background: #2c5282;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>`,
            language: 'vue',
            filename: 'UserCard.vue',
            tags: ['Vue', 'Script Setup', 'Components']
          }
        ]
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Server-side development, APIs, and database integration',
    icon: Server,
    subcategories: [
      {
        id: 'node-express',
        title: 'Node.js & Express',
        description: 'RESTful APIs and server setup with Express.js',
        tags: ['Node.js', 'Express', 'API'],
        snippets: [
          {
            id: 'express-api',
            title: 'Complete Express API Setup',
            description: 'Full Express.js API with middleware, routes, and error handling',
            code: `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // CORS support
app.use(morgan('combined')); // Logging
app.use(express.json({ limit: '10mb' })); // Body parser
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// User routes
app.get('/api/users', async (req, res) => {
    try {
        // Simulate database query
        const users = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
        ];
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        
        // Validation
        if (!name || !email) {
            return res.status(400).json({ 
                error: 'Name and email are required' 
            });
        }
        
        // Simulate user creation
        const newUser = {
            id: Date.now(),
            name,
            email,
            createdAt: new Date().toISOString()
        };
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`,
            language: 'javascript',
            filename: 'server.js',
            tags: ['Express', 'API', 'Middleware']
          },
          {
            id: 'auth-middleware',
            title: 'JWT Authentication Middleware',
            description: 'Complete JWT authentication system for Express.js',
            code: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const SALT_ROUNDS = 12;

// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign(
        { userId, iat: Date.now() },
        JWT_SECRET,
        { expiresIn: '24h' }
    );
};

// Auth middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.userId = decoded.userId;
        next();
    });
};

// Password hashing utilities
const hashPassword = async (password) => {
    return await bcrypt.hash(password, SALT_ROUNDS);
};

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Login route
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user (simulate database lookup)
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check password
        const isValidPassword = await comparePassword(password, user.passwordHash);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate token
        const token = generateToken(user.id);

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// Protected route example
app.get('/api/profile', authenticateToken, async (req, res) => {
    try {
        // req.userId is available from the middleware
        const user = await findUserById(req.userId);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            id: user.id,
            email: user.email,
            name: user.name,
            createdAt: user.createdAt
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
});

module.exports = {
    authenticateToken,
    generateToken,
    hashPassword,
    comparePassword
};`,
            language: 'javascript',
            filename: 'auth.js',
            tags: ['JWT', 'Authentication', 'Security']
          }
        ]
      },
      {
        id: 'database',
        title: 'Database Integration',
        description: 'Database connections and ORM patterns',
        tags: ['Database', 'SQL', 'ORM'],
        snippets: [
          {
            id: 'prisma-setup',
            title: 'Prisma ORM Setup',
            description: 'Complete Prisma setup with models and queries',
            code: `// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  profile   Profile?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  avatar String?
  userId Int     @unique
  user   User    @relation(fields: [userId], references: [id])

  @@map("profiles")
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
  tags      Tag[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("posts")
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[]

  @@map("tags")
}`,
            language: 'prisma',
            filename: 'schema.prisma',
            tags: ['Prisma', 'Database', 'Schema']
          },
          {
            id: 'prisma-queries',
            title: 'Prisma Database Queries',
            description: 'Common database operations with Prisma Client',
            code: `const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Database service class
class DatabaseService {
    // Create user with profile
    async createUser(userData) {
        try {
            const user = await prisma.user.create({
                data: {
                    email: userData.email,
                    name: userData.name,
                    profile: {
                        create: {
                            bio: userData.bio || null,
                            avatar: userData.avatar || null
                        }
                    }
                },
                include: {
                    profile: true
                }
            });
            return user;
        } catch (error) {
            throw new Error(\`Failed to create user: \${error.message}\`);
        }
    }

    // Get user with posts and profile
    async getUserById(id) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: parseInt(id) },
                include: {
                    profile: true,
                    posts: {
                        include: {
                            tags: true
                        },
                        orderBy: {
                            createdAt: 'desc'
                        }
                    }
                }
            });
            return user;
        } catch (error) {
            throw new Error(\`Failed to fetch user: \${error.message}\`);
        }
    }

    // Create post with tags
    async createPost(postData) {
        try {
            const post = await prisma.post.create({
                data: {
                    title: postData.title,
                    content: postData.content,
                    authorId: postData.authorId,
                    tags: {
                        connectOrCreate: postData.tags.map(tagName => ({
                            where: { name: tagName },
                            create: { name: tagName }
                        }))
                    }
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                    tags: true
                }
            });
            return post;
        } catch (error) {
            throw new Error(\`Failed to create post: \${error.message}\`);
        }
    }

    // Search posts with pagination
    async searchPosts(query, page = 1, limit = 10) {
        try {
            const skip = (page - 1) * limit;
            
            const [posts, total] = await Promise.all([
                prisma.post.findMany({
                    where: {
                        OR: [
                            { title: { contains: query, mode: 'insensitive' } },
                            { content: { contains: query, mode: 'insensitive' } },
                            { tags: { some: { name: { contains: query, mode: 'insensitive' } } } }
                        ],
                        published: true
                    },
                    include: {
                        author: {
                            select: {
                                id: true,
                                name: true
                            }
                        },
                        tags: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    skip,
                    take: limit
                }),
                prisma.post.count({
                    where: {
                        OR: [
                            { title: { contains: query, mode: 'insensitive' } },
                            { content: { contains: query, mode: 'insensitive' } },
                            { tags: { some: { name: { contains: query, mode: 'insensitive' } } } }
                        ],
                        published: true
                    }
                })
            ]);

            return {
                posts,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            throw new Error(\`Failed to search posts: \${error.message}\`);
        }
    }

    // Transaction example
    async transferPost(postId, newAuthorId) {
        try {
            const result = await prisma.$transaction(async (tx) => {
                // Update post author
                const post = await tx.post.update({
                    where: { id: postId },
                    data: { authorId: newAuthorId }
                });

                // Log the transfer (assuming we have a logs table)
                await tx.transferLog.create({
                    data: {
                        postId,
                        previousAuthorId: post.authorId,
                        newAuthorId,
                        transferredAt: new Date()
                    }
                });

                return post;
            });

            return result;
        } catch (error) {
            throw new Error(\`Failed to transfer post: \${error.message}\`);
        }
    }

    // Cleanup connection
    async disconnect() {
        await prisma.$disconnect();
    }
}

module.exports = new DatabaseService();`,
            language: 'javascript',
            filename: 'database.js',
            tags: ['Prisma', 'Queries', 'Transactions']
          }
        ]
      }
    ]
  },
  {
    id: 'templates',
    title: 'Page Templates',
    description: 'Ready-to-use templates for common website pages',
    icon: Layout,
    subcategories: [
      {
        id: 'landing-pages',
        title: 'Landing Pages',
        description: 'Modern landing page templates',
        tags: ['Landing', 'Marketing', 'Conversion'],
        snippets: [
          {
            id: 'saas-landing',
            title: 'SaaS Landing Page',
            description: 'Complete SaaS landing page with hero, features, pricing, and CTA',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ProductName - Revolutionary SaaS Solution</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <div class="text-xl font-bold text-blue-600">ProductName</div>
                </div>
                <div class="hidden md:block">
                    <div class="flex items-center space-x-8">
                        <a href="#features" class="text-gray-700 hover:text-blue-600">Features</a>
                        <a href="#pricing" class="text-gray-700 hover:text-blue-600">Pricing</a>
                        <a href="#about" class="text-gray-700 hover:text-blue-600">About</a>
                        <a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a>
                        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Transform Your Business with
                    <span class="text-blue-600">ProductName</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Streamline your workflow, boost productivity, and scale your business 
                    with our cutting-edge SaaS platform trusted by 10,000+ companies.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                        Start Free Trial
                    </button>
                    <button class="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                        Watch Demo
                    </button>
                </div>
                <p class="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Everything You Need to Succeed
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Our comprehensive platform provides all the tools and features 
                    you need to grow your business.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Lightning Fast</h3>
                    <p class="text-gray-600">Experience blazing fast performance with our optimized infrastructure.</p>
                </div>
                
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Secure & Reliable</h3>
                    <p class="text-gray-600">Bank-level security with 99.9% uptime guarantee for your peace of mind.</p>
                </div>
                
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5l2 2"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Easy Integration</h3>
                    <p class="text-gray-600">Seamlessly integrate with your existing tools and workflows.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p class="text-xl text-gray-600">Choose the plan that works best for your business</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Starter Plan -->
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <h3 class="text-2xl font-bold mb-4">Starter</h3>
                    <div class="text-4xl font-bold mb-6">$29<span class="text-lg text-gray-600">/month</span></div>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Up to 1,000 users
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            10GB storage
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Email support
                        </li>
                    </ul>
                    <button class="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
                        Choose Starter
                    </button>
                </div>

                <!-- Professional Plan -->
                <div class="bg-blue-600 rounded-lg shadow-lg p-8 text-white transform scale-105">
                    <div class="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                        MOST POPULAR
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Professional</h3>
                    <div class="text-4xl font-bold mb-6">$79<span class="text-lg text-blue-200">/month</span></div>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Unlimited users
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            100GB storage
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Priority support
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Advanced analytics
                        </li>
                    </ul>
                    <button class="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                        Choose Professional
                    </button>
                </div>

                <!-- Enterprise Plan -->
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
                    <div class="text-4xl font-bold mb-6">$199<span class="text-lg text-gray-600">/month</span></div>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Everything in Professional
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Unlimited storage
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            24/7 phone support
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Custom integrations
                        </li>
                    </ul>
                    <button class="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-blue-600">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
            </h2>
            <p class="text-xl text-blue-100 mb-8">
                Join thousands of companies already using ProductName to scale their operations.
            </p>
            <button class="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                Start Your Free Trial Today
            </button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <div class="text-xl font-bold mb-4">ProductName</div>
                    <p class="text-gray-400">
                        Revolutionizing business operations with cutting-edge SaaS solutions.
                    </p>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Product</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white">Features</a></li>
                        <li><a href="#" class="hover:text-white">Pricing</a></li>
                        <li><a href="#" class="hover:text-white">API</a></li>
                        <li><a href="#" class="hover:text-white">Documentation</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Company</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white">About</a></li>
                        <li><a href="#" class="hover:text-white">Blog</a></li>
                        <li><a href="#" class="hover:text-white">Careers</a></li>
                        <li><a href="#" class="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Support</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white">Help Center</a></li>
                        <li><a href="#" class="hover:text-white">Community</a></li>
                        <li><a href="#" class="hover:text-white">Status</a></li>
                        <li><a href="#" class="hover:text-white">Security</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 ProductName. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
            language: 'html',
            filename: 'saas-landing.html',
            tags: ['SaaS', 'Landing Page', 'Marketing']
          }
        ]
      },
      {
        id: 'dashboard-templates',
        title: 'Dashboard Templates',
        description: 'Admin dashboards and data visualization interfaces',
        tags: ['Dashboard', 'Admin', 'Analytics'],
        snippets: [
          {
            id: 'react-dashboard',
            title: 'React Admin Dashboard',
            description: 'Complete React dashboard with sidebar, charts, and data tables',
            code: `import React, { useState } from 'react';
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import {
    Menu, X, Home, Users, BarChart3, Settings, Bell,
    TrendingUp, TrendingDown, DollarSign, Activity
} from 'lucide-react';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Sample data
    const chartData = [
        { name: 'Jan', value: 400, users: 240 },
        { name: 'Feb', value: 300, users: 139 },
        { name: 'Mar', value: 200, users: 980 },
        { name: 'Apr', value: 278, users: 390 },
        { name: 'May', value: 189, users: 480 },
        { name: 'Jun', value: 239, users: 380 },
    ];

    const pieData = [
        { name: 'Desktop', value: 45, color: '#3B82F6' },
        { name: 'Mobile', value: 35, color: '#10B981' },
        { name: 'Tablet', value: 20, color: '#F59E0B' },
    ];

    const StatCard = ({ title, value, change, icon: Icon, trend }) => (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                    <div className="flex items-center mt-2">
                        {trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <span className={\`text-sm \${trend === 'up' ? 'text-green-600' : 'text-red-600'}\`}>
                            {change}%
                        </span>
                        <span className="text-sm text-gray-500 ml-1">vs last month</span>
                    </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-blue-600" />
                </div>
            </div>
        </div>
    );

    const Sidebar = () => (
        <div className={\`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform \${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0\`}>
            <div className="flex items-center justify-between p-4 border-b">
                <h1 className="text-xl font-bold text-gray-900">AdminPro</h1>
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
            <nav className="mt-8">
                <div className="px-4 space-y-2">
                    {[
                        { icon: Home, label: 'Dashboard', active: true },
                        { icon: Users, label: 'Users', active: false },
                        { icon: BarChart3, label: 'Analytics', active: false },
                        { icon: Settings, label: 'Settings', active: false },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className={\`flex items-center px-4 py-2 text-sm font-medium rounded-lg \${
                                item.active
                                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }\`}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm border-b">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden mr-4"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                            <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="relative">
                                <Bell className="w-6 h-6 text-gray-400" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    3
                                </span>
                            </button>
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </header>

                {/* Main Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                            title="Total Revenue"
                            value="$45,231"
                            change={12}
                            trend="up"
                            icon={DollarSign}
                        />
                        <StatCard
                            title="Active Users"
                            value="2,341"
                            change={-3}
                            trend="down"
                            icon={Users}
                        />
                        <StatCard
                            title="Sales"
                            value="1,423"
                            change={8}
                            trend="up"
                            icon={BarChart3}
                        />
                        <StatCard
                            title="Conversion Rate"
                            value="3.2%"
                            change={15}
                            trend="up"
                            icon={Activity}
                        />
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {/* Bar Chart */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#3B82F6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Pie Chart */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={\`cell-\${index}\`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="flex justify-center mt-4 space-x-4">
                                {pieData.map((entry, index) => (
                                    <div key={index} className="flex items-center">
                                        <div
                                            className="w-3 h-3 rounded-full mr-2"
                                            style={{ backgroundColor: entry.color }}
                                        ></div>
                                        <span className="text-sm text-gray-600">{entry.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity Table */}
                    <div className="bg-white rounded-lg shadow-sm border">
                        <div className="px-6 py-4 border-b">
                            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            User
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Action
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[
                                        { user: 'John Doe', action: 'Created new project', date: '2024-01-15', status: 'completed' },
                                        { user: 'Jane Smith', action: 'Updated profile', date: '2024-01-14', status: 'completed' },
                                        { user: 'Mike Johnson', action: 'Deleted file', date: '2024-01-13', status: 'pending' },
                                        { user: 'Sarah Wilson', action: 'Shared document', date: '2024-01-12', status: 'completed' },
                                    ].map((activity, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {activity.user}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {activity.action}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {activity.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={\`inline-flex px-2 py-1 text-xs font-semibold rounded-full \${
                                                    activity.status === 'completed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }\`}>
                                                    {activity.status}
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

            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Dashboard;`,
            language: 'javascript',
            filename: 'Dashboard.jsx',
            tags: ['React', 'Dashboard', 'Charts', 'Admin']
          }
        ]
      }
    ]
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    description: 'Mobile-first responsive layouts and media queries',
    icon: Smartphone,
    subcategories: [
      {
        id: 'css-grid-layouts',
        title: 'CSS Grid & Flexbox Layouts',
        description: 'Modern responsive layouts using CSS Grid and Flexbox',
        tags: ['CSS Grid', 'Flexbox', 'Responsive'],
        snippets: [
          {
            id: 'responsive-grid',
            title: 'Responsive CSS Grid Layout',
            description: 'Advanced CSS Grid layout with responsive breakpoints',
            code: `/* Modern CSS Grid Layout */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Advanced Grid Layout for Dashboard */
.dashboard-grid {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 250px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive Card Grid */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
}

.card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* Responsive Media Queries */
@media (max-width: 1024px) {
    .dashboard-grid {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
    
    .container {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        padding: 1rem;
    }
}

@media (max-width: 768px) {
    .card-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0.5rem;
    }
    
    .container {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
}

/* Flexbox Alternative for Complex Layouts */
.flex-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.flex-header {
    flex: 0 0 auto;
    background: #1f2937;
    color: white;
    padding: 1rem;
}

.flex-main {
    flex: 1;
    display: flex;
}

.flex-sidebar {
    flex: 0 0 250px;
    background: #f3f4f6;
    padding: 1rem;
}

.flex-content {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
}

.flex-aside {
    flex: 0 0 200px;
    background: #f9fafb;
    padding: 1rem;
}

@media (max-width: 768px) {
    .flex-main {
        flex-direction: column;
    }
    
    .flex-sidebar,
    .flex-aside {
        flex: 0 0 auto;
    }
}

/* Modern Image Grid */
.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.5rem;
    padding: 1rem;
}

.image-item {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 8px;
}

.image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-item:hover img {
    transform: scale(1.1);
}

/* Masonry-style Layout */
.masonry {
    columns: 3;
    column-gap: 1rem;
    padding: 1rem;
}

.masonry-item {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    break-inside: avoid;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .masonry {
        columns: 2;
    }
}

@media (max-width: 480px) {
    .masonry {
        columns: 1;
    }
}`,
            language: 'css',
            filename: 'responsive-layouts.css',
            tags: ['CSS Grid', 'Flexbox', 'Responsive', 'Layout']
          },
          {
            id: 'mobile-first-css',
            title: 'Mobile-First CSS Framework',
            description: 'Complete mobile-first responsive CSS utility framework',
            code: `/* Mobile-First CSS Framework */

/* Base Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Container System */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.container-fluid {
    width: 100%;
    padding: 0 1rem;
}

/* Grid System */
.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.5rem;
}

.col {
    flex: 1;
    padding: 0 0.5rem;
}

/* Column Sizes */
.col-1 { flex: 0 0 8.333333%; }
.col-2 { flex: 0 0 16.666667%; }
.col-3 { flex: 0 0 25%; }
.col-4 { flex: 0 0 33.333333%; }
.col-5 { flex: 0 0 41.666667%; }
.col-6 { flex: 0 0 50%; }
.col-7 { flex: 0 0 58.333333%; }
.col-8 { flex: 0 0 66.666667%; }
.col-9 { flex: 0 0 75%; }
.col-10 { flex: 0 0 83.333333%; }
.col-11 { flex: 0 0 91.666667%; }
.col-12 { flex: 0 0 100%; }

/* Spacing Utilities */
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }
.m-4 { margin: 1.5rem; }
.m-5 { margin: 3rem; }

.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }
.p-5 { padding: 3rem; }

/* Display Utilities */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

/* Flexbox Utilities */
.flex-row { flex-direction: row; }
.flex-column { flex-direction: column; }
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.align-start { align-items: flex-start; }
.align-center { align-items: center; }
.align-end { align-items: flex-end; }

/* Text Utilities */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }

/* Typography */
.h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.2;
}

.h1 { font-size: 2.5rem; }
.h2 { font-size: 2rem; }
.h3 { font-size: 1.75rem; }
.h4 { font-size: 1.5rem; }
.h5 { font-size: 1.25rem; }
.h6 { font-size: 1rem; }

/* Tablet Breakpoint */
@media (min-width: 768px) {
    .container {
        padding: 0 2rem;
    }
    
    /* Tablet Grid */
    .col-md-1 { flex: 0 0 8.333333%; }
    .col-md-2 { flex: 0 0 16.666667%; }
    .col-md-3 { flex: 0 0 25%; }
    .col-md-4 { flex: 0 0 33.333333%; }
    .col-md-6 { flex: 0 0 50%; }
    .col-md-8 { flex: 0 0 66.666667%; }
    .col-md-12 { flex: 0 0 100%; }
    
    /* Tablet Display */
    .d-md-none { display: none; }
    .d-md-block { display: block; }
    .d-md-flex { display: flex; }
    
    /* Tablet Typography */
    .h1 { font-size: 3rem; }
    .h2 { font-size: 2.5rem; }
    .h3 { font-size: 2rem; }
}

/* Desktop Breakpoint */
@media (min-width: 1024px) {
    /* Desktop Grid */
    .col-lg-1 { flex: 0 0 8.333333%; }
    .col-lg-2 { flex: 0 0 16.666667%; }
    .col-lg-3 { flex: 0 0 25%; }
    .col-lg-4 { flex: 0 0 33.333333%; }
    .col-lg-6 { flex: 0 0 50%; }
    .col-lg-8 { flex: 0 0 66.666667%; }
    .col-lg-9 { flex: 0 0 75%; }
    .col-lg-12 { flex: 0 0 100%; }
    
    /* Desktop Display */
    .d-lg-none { display: none; }
    .d-lg-block { display: block; }
    .d-lg-flex { display: flex; }
    
    /* Desktop Typography */
    .h1 { font-size: 3.5rem; }
    .h2 { font-size: 3rem; }
    .h3 { font-size: 2.25rem; }
}

/* Component Examples */
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary {
    background-color: #3b82f6;
    color: white;
}

.btn-primary:hover {
    background-color: #2563eb;
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: #6b7280;
    color: white;
}

.btn-secondary:hover {
    background-color: #4b5563;
}

/* Navigation */
.navbar {
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #1f2937;
}

.navbar-nav {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar-nav li {
    margin-left: 2rem;
}

.navbar-nav a {
    text-decoration: none;
    color: #6b7280;
    font-weight: 500;
    transition: color 0.2s ease;
}

.navbar-nav a:hover {
    color: #3b82f6;
}

@media (min-width: 768px) {
    .navbar-nav {
        display: flex;
    }
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
    display: block;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

@media (min-width: 768px) {
    .mobile-menu-toggle {
        display: none;
    }
}`,
            language: 'css',
            filename: 'mobile-first-framework.css',
            tags: ['Mobile First', 'CSS Framework', 'Responsive', 'Utilities']
          }
        ]
      }
    ]
  },
  {
    id: 'styling',
    title: 'CSS & Styling',
    description: 'Modern CSS techniques, animations, and design systems',
    icon: Palette,
    subcategories: [
      {
        id: 'css-animations',
        title: 'CSS Animations & Transitions',
        description: 'Smooth animations and micro-interactions',
        tags: ['CSS', 'Animations', 'Transitions'],
        snippets: [
          {
            id: 'css-keyframes',
            title: 'CSS Keyframe Animations',
            description: 'Collection of useful CSS keyframe animations',
            code: `/* Fade In Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out forwards;
}

/* Slide In Animations */
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-left {
    animation: slideInLeft 0.5s ease-out forwards;
}

.slide-in-right {
    animation: slideInRight 0.5s ease-out forwards;
}

/* Scale Animations */
@keyframes scaleIn {
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

.scale-in {
    animation: scaleIn 0.3s ease-out forwards;
}

.pulse {
    animation: pulse 2s infinite;
}

/* Rotation Animations */
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes wobble {
    0% {
        transform: rotate(0deg);
    }
    15% {
        transform: rotate(-5deg);
    }
    30% {
        transform: rotate(5deg);
    }
    45% {
        transform: rotate(-3deg);
    }
    60% {
        transform: rotate(3deg);
    }
    75% {
        transform: rotate(-1deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.rotate {
    animation: rotate 1s linear infinite;
}

.wobble {
    animation: wobble 0.8s ease-in-out;
}

/* Loading Animations */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0, 0, 0);
    }
    40%, 43% {
        transform: translate3d(0, -20px, 0);
    }
    70% {
        transform: translate3d(0, -10px, 0);
    }
    90% {
        transform: translate3d(0, -4px, 0);
    }
}

.spinner {
    animation: spin 1s linear infinite;
}

.bounce {
    animation: bounce 1.5s ease-in-out infinite;
}

/* Text Animations */
@keyframes typewriter {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.typewriter {
    overflow: hidden;
    border-right: 2px solid #333;
    white-space: nowrap;
    animation: 
        typewriter 3s steps(40, end),
        blink 0.75s step-end infinite;
}

/* Gradient Animation */
@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.gradient-animation {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

/* Hover Effects */
.card-hover {
    transition: all 0.3s ease;
    cursor: pointer;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.button-hover {
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
}

.button-hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.button-hover:hover::before {
    left: 100%;
}

/* Stagger Animation for Lists */
.stagger-item {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.6s ease-out forwards;
}

.stagger-item:nth-child(1) { animation-delay: 0.1s; }
.stagger-item:nth-child(2) { animation-delay: 0.2s; }
.stagger-item:nth-child(3) { animation-delay: 0.3s; }
.stagger-item:nth-child(4) { animation-delay: 0.4s; }
.stagger-item:nth-child(5) { animation-delay: 0.5s; }

/* Progress Bar Animation */
@keyframes progressBar {
    from {
        width: 0%;
    }
    to {
        width: var(--progress-width, 100%);
    }
}

.progress-bar {
    height: 8px;
    background-color: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    border-radius: 4px;
    animation: progressBar 2s ease-out forwards;
}

/* Utility Classes */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
}

.animate-on-scroll.animate {
    opacity: 1;
    transform: translateY(0);
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}`,
            language: 'css',
            filename: 'animations.css',
            tags: ['CSS', 'Keyframes', 'Animations', 'Transitions']
          }
        ]
      }
    ]
  }
];
