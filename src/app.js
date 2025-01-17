// Red@ entrypoint for Graph Game Evolution
const root = document.getElementById('app');
const state = { project: 'graph-game-evolution', author: 'Red@', theme: 'games', milestones: 3 };
if (root) root.textContent = JSON.stringify(state, null, 2);
