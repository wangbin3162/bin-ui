### sortablejs Started

Install with NPM:
```bash
$ npm install sortablejs --save
```

Install with Bower:
```bash
$ bower install --save sortablejs
```

Import into your project:
```js
// Default SortableJS
import Sortable from 'sortablejs';

// Core SortableJS (without default plugins)
import Sortable from 'sortablejs/modular/sortable.core.esm.js';

// Complete SortableJS (with all plugins)
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
```

Cherrypick plugins:
```js
// Cherrypick extra plugins
import Sortable, { MultiDrag, Swap } from 'sortablejs';

Sortable.mount(new MultiDrag(), new Swap());


// Cherrypick default plugins
import Sortable, { AutoScroll } from 'sortablejs/modular/sortable.core.esm.js';

Sortable.mount(new AutoScroll());
```
---

### 使用
```html
<ul id="items">
	<li>item 1</li>
	<li>item 2</li>
	<li>item 3</li>
</ul>
```

```javascript
var el = document.getElementById('items');
var sortable = Sortable.create(el);
```

你可以使用任何标签来实现列表，不仅仅是 `ul`/`li`. 
