
import React, { useState, useMemo } from 'react';
import { Search, Code, Copy, Check, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { codeLibrary } from '@/data/codeLibrary';
import { CodeSnippet } from '@/components/CodeSnippet';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredLibrary = useMemo(() => {
    if (!searchTerm) return codeLibrary;
    
    return codeLibrary.map(category => ({
      ...category,
      subcategories: category.subcategories.map(subcategory => ({
        ...subcategory,
        snippets: subcategory.snippets.filter(snippet =>
          snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      })).filter(subcategory => subcategory.snippets.length > 0)
    })).filter(category => category.subcategories.length > 0);
  }, [searchTerm]);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedSnippet(id);
      setTimeout(() => setCopiedSnippet(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevCode Library
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of code snippets, templates, and examples for modern web development.
            From HTML semantics to full-stack frameworks and everything in between.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search snippets, frameworks, templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>

        {/* Library Content */}
        <div className="space-y-6">
          {filteredLibrary.map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-6 w-6" />
                  {category.title}
                </CardTitle>
                <CardDescription className="text-blue-100">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.subcategories.map((subcategory) => (
                    <Collapsible
                      key={subcategory.id}
                      open={expandedCategories.has(subcategory.id)}
                      onOpenChange={() => toggleCategory(subcategory.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between h-auto p-4 hover:bg-gray-50"
                        >
                          <div className="text-left">
                            <h3 className="font-semibold text-lg">{subcategory.title}</h3>
                            <p className="text-gray-600 text-sm">{subcategory.description}</p>
                            <div className="flex gap-2 mt-2">
                              {subcategory.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          {expandedCategories.has(subcategory.id) ? (
                            <ChevronDown className="h-5 w-5" />
                          ) : (
                            <ChevronRight className="h-5 w-5" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-4 mt-4">
                        {subcategory.snippets.map((snippet) => (
                          <div key={snippet.id} className="border rounded-lg p-4 bg-white">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold">{snippet.title}</h4>
                                <p className="text-gray-600 text-sm">{snippet.description}</p>
                                <div className="flex gap-1 mt-2">
                                  {snippet.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyToClipboard(snippet.code, snippet.id)}
                                className="flex items-center gap-1"
                              >
                                {copiedSnippet === snippet.id ? (
                                  <Check className="h-4 w-4" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                                {copiedSnippet === snippet.id ? 'Copied!' : 'Copy'}
                              </Button>
                            </div>
                            <CodeSnippet
                              code={snippet.code}
                              language={snippet.language}
                              filename={snippet.filename}
                            />
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLibrary.length === 0 && (
          <div className="text-center py-12">
            <Code className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No snippets found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
