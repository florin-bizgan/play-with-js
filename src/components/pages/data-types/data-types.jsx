'use client';

import 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx'; //
import { dataTypesData } from '@/components';
import React, { useEffect } from 'react';
import styles from './data-types.module.css';

export const DataTypesPage = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {dataTypesData.map(({ codeSnippets, description, id, title }) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
            {codeSnippets.map(({ title, description, code, id }) => {
              return (
                <div key={id} className={styles.codeContainer}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <h4 className={styles.exampleTitle}>Example:</h4>
                  <pre>
                    <code className='language-javascript'>{code}</code>
                  </pre>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
