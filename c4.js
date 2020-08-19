// ==UseerScript==
// @name c4
// @namespace gnlow
// @match       *://*/*
// @grant       none
// @inject-into content
// @author Gnlow

document.body.outerHTML = document.body.outerHTML
    .replace(
        /\d{1,3}(?:,\d{3})+/g, 
        match => 
            match
                .replaceAll(",", "")
                .replace(
                    /^(\d{1,4})((?:\d{4})+)$/, 
                    (all, head, body) => 
                        `${head}${body.replace(/\d{4}/g, ",$&")}`
                )
    )