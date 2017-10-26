console.log('hello');

//arays
let bucket_list = ['learn to fly', 67, 'go to Japan'];
console.log(bucket_list[2]);

//for loop
for (let i = 0; i < bucket_list.length; i++) {
  console.log(bucket_list[i]);
}

let movie_list1 = [
  '1The Shawshank Redemption',
  '2The God Father',
  '3Movie6',
  '12Movie7',
  '15Movie3'
];

let movie_list2 = [
  'The God Father',
  'The Shawshank Redemption',
  'Movie3',
  'Movie4',
  'Movie5'
];

for (let i = 0; i < movie_list1.length; i++) {
  for (let j = 0; j < movie_list2.length; j++) {
    if (movie_list1[i] == movie_list2[j]) {
      console.log(movie_list1[i]);
    }
  }
}



//while loops
let balance = 1000;
let years = 0;

while (balance < 1000000) {
  balance += balance * 0.03;
  years += 1;
}
console.log(years);



//iterators
movie_list1.forEach(movie => console.log('-' + movie));
let new_list = movie_list1.filter(movie => movie.slice(0, 1) == '1')
console.log(new_list);
