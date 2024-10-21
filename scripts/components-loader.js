function load(comp, where, obj) {
    fetch(`${comp}`)
        .then((res) => res.text())
        .then((text) => {
            let template = new Function('obj', 'return `' + text + '`;');
            document.getElementById(where).innerHTML += template(obj);
        })
        .catch((e) => console.error(e));
}   