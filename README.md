# jQuery Nude Templates

Nude Templates for jQuery - Fast, simple templates that work like you'd want them to.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jesseluoto/jquerytempla/master/dist/jquery.nude.min.js
[max]: https://raw.github.com/jesseluoto/jquerytempla/master/dist/jquery.nude.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.nude.min.js"></script>
<script>
jQuery(function($) {
  var compiled = $.nude("Quick, logical [[what]]", { "what": "templating" });
});
</script>
```
