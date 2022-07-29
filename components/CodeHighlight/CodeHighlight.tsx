import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import React, { useEffect, useState } from 'react';

function CodeHighlight({ markdown }) {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return (
            !inline &&
            match && (
              <code className={className} {...props}>
                {children}
              </code>
            )
          );
        },
      }}>
      {markdown}
    </ReactMarkdown>
  );
}

export default CodeHighlight;
