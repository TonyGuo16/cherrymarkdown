
export function ShowCherryMarkdown() {
    const cherryInstance = new Cherry({
        id: 'markdown-container',
        value: '## hello world',
        locale: 'en_US',
        // ThemeSettings
        themeSettings: {
            // Theme Lists
            themeList: [
                { className: 'default', label: 'Wecareu Default' },
                { className: 'dark', label: 'Wecareu Dark' },
                { className: 'light', label: 'Wecareu White' },
                { className: 'green', label: 'Wecareu Green' },
                { className: 'red', label: 'Wecareu Pink' },
                { className: 'violet', label: 'Wecareu Purple' },
                { className: 'blue', label: 'Wecareu Blue' },
            ],
            // Current Theme
            mainTheme: 'Wecareu White',
            // default theme for block area
            codeBlockTheme: 'default',
        },
        toolbars: {
            // setting of top toolbar
            toolbar: [
                'undo', 'redo', '|',
                { bold: ['bold', 'italic', 'underline', 'strikethrough', 'sub', 'sup', 'ruby'] },
                'color', 'size', '|', 'header', 'list', 'panel', 'justify','|',
                { insert: ['image', 'audio', 'video', 'link', 'hr', 'br', 'code', 'formula', 'toc', 'table'] },
                'graph'
            ],
            // sidebar, default is empty
            sidebar: ['theme', 'mobilePreview', 'copy'],
            // top-right sidebar
            toolbarRight: ['fullScreen', 'export'],
            // float-toolbar when selecting the font, the default setting is ['bold', 'italic', 'underline', 'strikethrough', 'sub', 'sup', 'quote', '|', 'size', 'color']
            bubble: ['bold', 'italic', 'underline','justify','strikethrough', 'sub', 'sup', 'ruby', '|', 'color', 'size',],
            // tool tip in the first line, default setting  ['h1', 'h2', 'h3', '|', 'checklist', 'quote', 'table', 'code']
            float: ['table', 'code', 'graph'],
        },

    });
}
