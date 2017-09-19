/*Given this
const points = [
	[4,5],
  [10,12],
  [8,9],
  [3,5]
];

//Convert to
const points1 = [
  {x:4,y:5},
  {x:10,y:12},
  {x:8,y:9},
  {x:3,y:5}
];*/

points.map(pair => {
  const [x,y]=pair;
  return {x:x,y:y}
});
