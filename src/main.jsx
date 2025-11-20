import React from 'react'
import ReactDOM from 'react-dom/client'
import { LexicalComposer } from 'lexical'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'

function MarkdownEditor() {
    const initialConfig = {
        namespace: 'MyEditor',
        theme: {
            // Define your theme here
        },
        onError(error) {
            throw error;
        },
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className="editor-container">
                <RichTextPlugin
                    contentEditable={<ContentEditable className="editor" />}
                    placeholder={<div>Enter some text...</div>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <HistoryPlugin />
            </div>
        </LexicalComposer>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MarkdownEditor />
    </React.StrictMode>,
)
