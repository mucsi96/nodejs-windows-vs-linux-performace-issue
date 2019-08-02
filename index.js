
const { PerformanceObserver, performance } = require('perf_hooks');
const obs = new PerformanceObserver((items) => {
    items.getEntries().forEach(({ name, duration }) => console.log(name, duration));
    performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });
performance.mark('start');


const jsdom = require("jsdom");

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);


performance.mark('end');
performance.measure('Total time:', 'start', 'end');