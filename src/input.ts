export class Input {
  keys: string[] = [];
  constructor() {
    document.addEventListener("keydown", (e) => {
      if (this.keys.indexOf(e.key) == -1) this.keys.push(e.key);
    });
    document.addEventListener("keyup", (e) => {
      this.keys.splice(this.keys.indexOf(e.key), 1);
    });
  }
}
