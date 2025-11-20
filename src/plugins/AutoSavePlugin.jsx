import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'lexical-html-editor-state';

export default function AutoSavePlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedState) {
            const initialEditorState = editor.parseEditorState(savedState);
            editor.setEditorState(initialEditorState);
        }
    }, [editor]);

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            const serializedState = JSON.stringify(editorState);
            localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
        });
    }, [editor]);

    return null;
}
