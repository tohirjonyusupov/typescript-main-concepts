// Intersection ma'lumot turlari turlari
// Intersection turi ikki yoki undan ortiq tur a'zosini birlashtiradi.

// Amaliy misol:

interface Knife {
  cut(): void;
}
interface BottleOpener {
  openBottle(): void;
}
interface Screwdriver {
  turnScrew(): void;
}
type SwissArmyKnife = Knife & BottleOpener & Screwdriver;
function use(tool: SwissArmyKnife) {
  console.log("I can do anything!");
  tool.cut();
  tool.openBottle();
  tool.turnScrew();
}
