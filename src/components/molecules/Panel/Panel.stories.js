import React from "react"
import { storiesOf } from "@storybook/react"

import Panel from "."

const stories = storiesOf("Panels", module)

stories.add("Show/Hide Panel", () => {
    return (
        <Panel defaultOpen label="Toggle Panel" icon="graduation-cap">
            <h3>This content can be hidden by clicking the button.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci ex, 
                feugiat vitae augue at, ultricies maximus dui. Class aptent taciti sociosqu ad 
                litora torquent per conubia nostra, per inceptos himenaeos. Sed elementum lectus nulla, 
                at placerat felis interdum ut. Etiam vel eros feugiat, egestas ante eu, hendrerit nibh. 
                ivamus lacus dui, tempus et risus ac, congue semper mi. Aenean ut viverra tortor, ac semper diam. 
                Curabitur sit amet venenatis lacus. In facilisis eros ac pharetra faucibus. Duis non nisi neque. 
                Curabitur vitae porta mauris, in sollicitudin ex. Nullam ut risus risus. </p>
        </Panel>
    );
})
