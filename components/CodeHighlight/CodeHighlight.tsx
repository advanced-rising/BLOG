import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React, { useEffect, useState } from 'react';
// MARK DOWN
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeHighlight({ readMd }) {
  return (
    <div>
      <ReactMarkdown
        children={readMd}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return (
              !inline &&
              match && (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={a11yDark}
                  language={match[1]}
                  PreTag='div'
                  {...props}
                />
              )
            );
          },
        }}
      />
    </div>
  );
}

export default CodeHighlight;
