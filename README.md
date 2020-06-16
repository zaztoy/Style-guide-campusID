# Style-guide-campusID


If you want to work on this project, once you have cloned the repository:

1 - Execute `npm install` to retrieve the dependencies

2 - Execute `npm run storybook` to launch the project on localhost:6006

3 - Your changes in the code will be applied automatically in your web browser.


All components are in the `./src/` folder; To showcase your component in Storybook, a story must added in `./storybook/stories/`.



If you want to use our package for you're project :


1 - You have to download node.

2 - Install NPM in you're terminal :
<pre><code>
npm install npm@latest -g
</pre></code>

3 - And add our project with
<pre><code>
npm install styleguide-campusid
</pre></code>


After that, you can use directly the componant that you want like that 


```javascript
import React from "react";
import { DatePicker } from "styleguide-campusid";

const RandomComponent = () => (
   <DatePicker label="random label" theme="lightTheme" />;
);

export default RandomComponent;
```


Have Fun !
