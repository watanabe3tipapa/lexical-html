import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { TreeView } from '@lexical/react/LexicalTreeView';

export default function TreeViewPlugin({
    treeTypeButtonClassName,
    timeTravelButtonClassName,
    timeTravelPanelSliderClassName,
    timeTravelPanelButtonClassName,
    viewClassName,
    timeTravelPanelClassName,
}) {
    const [editor] = useLexicalComposerContext();

    return (
        <TreeView
            viewClassName={viewClassName}
            treeTypeButtonClassName={treeTypeButtonClassName}
            timeTravelButtonClassName={timeTravelButtonClassName}
            timeTravelPanelSliderClassName={timeTravelPanelSliderClassName}
            timeTravelPanelButtonClassName={timeTravelPanelButtonClassName}
            timeTravelPanelClassName={timeTravelPanelClassName}
            editor={editor}
        />
    );
}
