'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Editor } from '@tiptap/core'
import { Markdown } from '@tiptap/markdown'

const Tiptap = () => {
  const editor = new Editor({
      extensions: [StarterKit, Markdown],
      content: '<p>Hello World!</p>',
      immediatelyRender: false,
    })
  return <EditorContent editor={editor} />
}

export default Tiptap