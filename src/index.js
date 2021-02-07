import configureStore from './store/configureStore';
import { bugAdded, bugResolved, getUnresolvedBugs } from './store/bugs';
import { projectAdded } from './store/projects';

actions.getUnresolvedBugs

const store = configureStore();

store.subscribe(() => {
  console.log("Store Changed!");
});

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ description: "Bug 1"}));
store.dispatch(bugAdded({ description: "Bug 2"}));
store.dispatch(bugAdded({ description: "Bug 3"}));
store.dispatch(bugResolved(1));

const unresolvedBugs = getUnresolvedBugs(store.getState());

console.log(unresolvedBugs);