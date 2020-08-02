let id = 0;

class Dep {

  constructor() {
    this.id = id++;
    this.subs = [];
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }

  notify() {
    this.subs.forEach(watcher => watcher.update());
  }

  addSub(watcher) {
    this.subs.push(watcher);
  }

}

let stack = [];

// 可以保留 watcher，并移除
export function pushTarget(watcher) {
  Dep.target = watcher;
  stack.push(watcher);
}

export function popTarget() {
  stack.pop();
  Dep.target = stack[stack.length - 1];
}

export default Dep;
