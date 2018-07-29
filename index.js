const app = "I don't do much.";


function getRepos(){
  const token = '3a993896292a1951c00e088811ec867de9ca741d';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
}