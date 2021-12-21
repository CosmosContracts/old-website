import React from 'react';

const insertData = ({ text, options }) => {
    /* Use for replace data in text translation and add tag (like <em>...</em>)
    if is needed to add class to specific part of text.
    options need to be object with two arrays
    One for replace data and one for tag
    ex:
    {
        data:[{NUMBER_APP: 10}],
        tags:[{tag: "em",  class: "bold"}, {tag: "em",  class: "bold"}],
        root:{tag: "p", className:"introduction"}
    }
    if text is: {NUMBER_APP} apps {elt}and{elt} Contracts {elt}build{elt}.
    return react element:
     <p className="introduction"> 10 apps <em className="bold">and</em> Contracts <em className="bold">build</em>.
    */
    let res = text;
    options.data.forEach((data) => {
        res = res.replace(`{${Object.keys(data)[0]}}`, data[Object.keys(data)[0]]);
    });
    const rootProps = {};
    Object.keys(options.root).forEach((prop) => {
        if (prop !== 'tag') {
            rootProps[prop] = options.root[prop];
        }
    });
    const rootChiddren = [];
    const splitted = res.split('{elt}');
    let indexTag = 0;
    let isTagged = false;
    splitted.forEach((split, index) => {
        if (!isTagged) {
            rootChiddren.push(split);
        } else {
            if (indexTag < options.tags.length) {
                const tag = options.tags[indexTag];
                const tagProps = { key: index };
                Object.keys(tag).forEach((prop) => {
                    if (prop !== 'tag') {
                        tagProps[prop] = tag[prop];
                    }
                });
                const elt = React.createElement(tag.tag, tagProps, split);
                rootChiddren.push(elt);
                indexTag++;
            }
        }
        isTagged = !isTagged;
    });
    const rootElement = React.createElement(options.root.tag, rootProps, rootChiddren);
    return rootElement;
};

export { insertData };
