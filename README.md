# How to Add MarkDown in Maui Blazor / Blazor
![image](https://github.com/user-attachments/assets/4863bd3d-69e9-4e59-8df3-4469706149a8)

![image](https://github.com/user-attachments/assets/0c17c9ee-78ba-4d18-b6ae-834d68261f59)

Step 1:

1. Import the Cherry Markdown.js and cherrymarkdown.css into the Maui Blazor project, open the project and put the cherrymarkdown.js in the Index.html.

File Content Path
**Project Root: wwwroot/index.hml;**

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>MauiBlazor.CherryMarkdown.Demo</title>
    <base href="/" />
    <link rel="stylesheet" type="text/css" href="css/cherrymarkdown.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="MauiBlazor.CherryMarkdown.Demo.styles.css" />
    <link rel="icon" type="image/png" href="favicon.png" />
</head>

<body>

    <div class="status-bar-safe-area"></div>

    <div id="app">Loading...</div>

    <div id="blazor-error-ui">
        An unhandled error has occurred.
        <a href="" class="reload">Reload</a>
        <a class="dismiss">🗙</a>
    </div>
    <script src="cherrymarkdown.js" type="text/javascript"></script>
    <script src="_framework/blazor.webview.js" autostart="false"></script>
</body>

</html>
```
Step 2:<br>
File Content Path
**Project Root: Components/Pages/Home.razor**

1. Open the Home.razor, and replace the code with the below.<br>

``` 
@page "/"
@inject IJSRuntime JSRuntime
@implements IDisposable

<div>
    <div id="markdown-container"></div>
</div>

@code{
    /// <summary>
    /// JS Module
    /// </summary>
    private IJSObjectReference? Module;
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            Module = await JSRuntime.InvokeAsync<IJSObjectReference>(
    "import", "./Components/Pages/Home.razor.js");
            await Module.InvokeVoidAsync("ShowCherryMarkdown");

        }
    }
    /// <summary>
    /// diposing sign
    /// </summary>
    private bool _disposing;
    /// <summary>
    /// Disposing
    /// </summary>
    /// <param name="disposing"></param>
    protected virtual void Dispose(bool disposing)
    {
        _disposing = true;
        if (disposing)
        {
            if (Module != null)
            {
                try
                {
                    Module.DisposeAsync();
                }
                catch (JSDisconnectedException)
                {
                    //System.Console.WriteLine($"JS failed:{ex} ");
                }
                finally
                {
                    if (Module != null)
                    {
                        Module = null;
                    }
                }
            }
        }
    }
    /// <summary>
    /// Dispose Resource
    /// </summary>
    /// <returns></returns>
    void IDisposable.Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
}
```
Step 3:<br>
DON'T FORGET TO PUT THE     ch-icon.woff2     INTO wwwrooor/css/fonts FILE !!!!
If without this fonts file, the markdown components icon will not show normally.

Step 4:<br>
You could copy our Home.razor.js in the Components/Pages, or You can create a new javascript file under the name of Home.razor.js, it will automatically connected with the Home.razor, add the code below:

For more config Settings, pls check https://github.com/Tencent/cherry-markdown/wiki/%E9%85%8D%E7%BD%AE%E9%A1%B9%E5%85%A8%E8%A7%A3

```javascript
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
```
Step 5:<br>
Debug and Run
Enjoy your markdown in your Maui Blazor / Blazor Projects, this projects ReadMe.md is created by this MarkDown components.

If this tourial is helpful to you , please kindly feel free to check and expolore our home page, we will be very grateful.

[Home Medical Device Expert - Hangzhou Wecareu Electronics Technology Co.,Ltd](https://www.wedocareu.com) 

