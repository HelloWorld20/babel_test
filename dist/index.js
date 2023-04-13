const a = 'aaa';

const o = {
  name: 'abc',
  age: 30
};

for (let [i, v] of Object.entries(o)) {
  console.log(i, v);
}

{/* <div>abc</div> */}