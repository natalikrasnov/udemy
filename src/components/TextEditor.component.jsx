import { useEffect, useState } from "react";

import {  EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export function TextEditor({onTextChange, setIsNoteAllowed }) {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [textLength, setTextLength] = useState(1000)
    
    const getLength = () => {
        let text = ''
        convertToRaw(editorState.getCurrentContent()).blocks
            .forEach(ob => text += ob.text )
        setTextLength(1000 - text.length)
        setIsNoteAllowed(text.length > 1000)
    }

    useEffect(() => {
        if (!editorState) return
        const htmlText = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        getLength()
        onTextChange(htmlText)
    }, [editorState])
    
    const Styles = () => {
        return (
            <div className="styles">
                <label>Styles</label>
            </div>
        )
    }

    return (

        <div className="text-editor">
            <Editor
                 wrapperClassName="wrapper"
                 editorClassName="editor"
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbarClassName="toolbar-class"
                //toolbarCustomButtons={}
                
                // toolbar={{
                //     blockType: {
                //         component: Styles
                //     },
                // }}
            />
            <label className={"counter "+(textLength<0 ? 'red' : '')}>{ textLength}</label>
        </div>
    )
}
