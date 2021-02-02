let a=[
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
]
a[1].pop()
a[1].pop()
a[1].pop()

for(let i in a){
  console.log(i)
  // a.pop()
}
console.log(a)
console.log(a[1]=='')
a.splice(1,1)
console.log(a)
