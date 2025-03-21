/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// Step 1: Manipulating the DOM
// Uncomment the following line to select all heart elements
const articleHearts = document.querySelectorAll('.heart');

// Step 2: Stubbing server-side behavior
// Uncomment the following function to simulate server communication
function mockServerLike(postId) {
  console.log(`Simulating server communication for post ID: ${postId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Post ${postId} liked!`);
    }, 1000); // Simulate a delay for server response
  });
}

// Step 3: Event listening
// Uncomment the following code to add event listeners to each heart
articleHearts.forEach((heart, index) => {
  heart.addEventListener('click', async () => {
    const postId = index + 1; // Assuming post IDs are 1, 2, 3, ...
    const response = await mockServerLike(postId);
    console.log(response);
    
    // Toggle heart color
    if (heart.classList.contains('liked')) {
      heart.classList.remove('liked');
      heart.innerText = '♡'; // Change to empty heart
    } else {
      heart.classList.add('liked');
      heart.innerText = '♥'; // Change to filled heart
    }
  });
});
