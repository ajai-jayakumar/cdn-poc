!function(){
  "use strict";
  // 1) Define your import map object
  const importMap = {
    imports: {
      "react":"https://esm.sh/react@19.1.0",
      "react-dom":"https://esm.sh/react-dom@19.1.0",
    }
  };

  // 2) Create the <script type="importmap"> element
  const mapScript = document.createElement("script");
  mapScript.type = "importmap";
  mapScript.textContent = JSON.stringify(importMap, null, 2);

  // 3) Prepend it into <head> so it's available for subsequent module loads
  document.head.prepend(mapScript);
}();