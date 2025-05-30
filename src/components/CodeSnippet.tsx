
import React from 'react';

interface CodeSnippetProps {
  code: string;
  language: string;
  filename?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language, filename }) => {
  return (
    <div className="relative">
      {filename && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm rounded-t-lg border-b border-gray-700">
          {filename}
        </div>
      )}
      <pre className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto ${filename ? 'rounded-b-lg' : 'rounded-lg'}`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
