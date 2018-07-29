const app = "I don't do much.";


function getRepos(){
  const token="3a993896292a1951c00e088811ec867de9ca741d";
  fetch('https://api.github.com/mrfarmer777/repos',{
    headers:{
      Authorization: `token ${token}`
    }
  })
}