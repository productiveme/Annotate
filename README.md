# Annotate Alpha ![GitHub Logo](/icons/24.png) 
Forked from [Unknowny/ScrapeMate](https://github.com/Unknowny/ScrapeMate) to be repurposed.

Annotation tool, selecting by CSS selector and URL. Annotate with markdown.
Soon available as a [Chrome/Chromium](https://chrome.google.com/to-be-defined) and a [Firefox](https://addons.mozilla.org/to-be-defined) extensions.

Quick way to interactively pick CSS/XPath selectors and annotating them with markdown.

Planned features include:
* Element picker (from [SelectorGadget](https://github.com/cantino/selectorgadget)).
* Support for `::text` / `::attr()` css pseudo elements and `has-class()` xpath function.
* Markdown editor for selected element
* Exporting data for a site / page

### Screenshots
![screenshot](https://lh3.googleusercontent.com/Yzdry6FnIr75tEJnoZCfdn1ybtlRkeyF4kNQZNH7z-GRYzA5Qvx5QW-gjdJKytyZILcYj--LLw=w640-h400-e365)
![screenshot](https://lh3.googleusercontent.com/LOAdby4Dm1dfhyE0B0nQXznkyaIBjIUl3FDlFpoggxxEfYQUkRjJTUIpz_TNqOd6obBOlqnX=w640-h400-e365)

### Build
```
npm install
npm run build
# this will create ./dist/extension folder
# which you can give to chrome as an unpacked extension
# or to firefox as a temporary extension in about:debugging
```
Icon credits to: Freepik from www.flaticon.com
