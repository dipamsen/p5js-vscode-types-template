/// <reference types="p5" />

new p5((/** @type {import("p5")} */ p) => {
  p.setup = function () {
    p.createCanvas(600, 400);
  };

  p.draw = function () {
    p.background(0);
  };
});
