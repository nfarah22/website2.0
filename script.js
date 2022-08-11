var story, item;


story = ['when the pandemic i started to see lots of tech related jobs being advised ', 'I wasnt happy with the trajectory of my career so i did some research', 'I started to learn to code by myself but i constantly got stuck on problems with no external help', 'i couldnt afford to go to a boot camp and then a friend introduced me to CYF ', 'Applied to CYF and now here i am :)'];

let element_pages = document.getElementById('pages');
element_pages.innerText = 'This is my tech journey so far, click next  for the next part ';


document.getElementById('button').addEventListener('click', (event) => {
  let element_pages2 = document.getElementById('pages');
  story.forEach((item) => {
    element_pages2.innerText = story.shift();
  });

});

document.getElementById('restart').addEventListener('click', (event) => {
  let element_pages3 = document.getElementById('pages');
  element_pages3.replaceChildren();

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('submit').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('comments').value);

  element_list.appendChild(new_li);

});
