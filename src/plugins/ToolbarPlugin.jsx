import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import {
    $getSelection,
    $isRangeSelection,
    FORMAT_TEXT_COMMAND,
} from 'lexical';
import { useCallback, useEffect, useState } from 'react';
import { Bold, Italic, Underline, Code, Download } from 'lucide-react';
import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';

const LowPriority = 1;

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isCode, setIsCode] = useState(false);

    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
            setIsCode(selection.hasFormat('code'));
        }
    }, []);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateToolbar();
                });
            }),
        );
    }, [editor, updateToolbar]);

    const downloadMarkdown = () => {
        editor.update(() => {
            const markdown = $convertToMarkdownString(TRANSFORMERS);
            const blob = new Blob([markdown], { type: 'text/markdown' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'document.md';
            a.click();
            URL.revokeObjectURL(url);
        });
    };

    return (
        <div className="toolbar">
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                }}
                className={'toolbar-item spaced ' + (isBold ? 'active' : '')}
                aria-label="Format Bold">
                <Bold size={18} />
            </button>
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
                }}
                className={'toolbar-item spaced ' + (isItalic ? 'active' : '')}
                aria-label="Format Italics">
                <Italic size={18} />
            </button>
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
                }}
                className={'toolbar-item spaced ' + (isUnderline ? 'active' : '')}
                aria-label="Format Underline">
                <Underline size={18} />
            </button>
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
                }}
                className={'toolbar-item spaced ' + (isCode ? 'active' : '')}
                aria-label="Insert Code">
                <Code size={18} />
            </button>
            <div className="divider" style={{ width: '1px', backgroundColor: '#eee', margin: '0 4px' }} />
            <button
                onClick={downloadMarkdown}
                className="toolbar-item spaced"
                aria-label="Download Markdown">
                <Download size={18} />
            </button>
        </div>
    );
}
