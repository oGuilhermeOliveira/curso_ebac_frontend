$(document).ready(function() {
    const nameItem = document.querySelector('#name')
    const usernameItem = document.querySelector('#username')
    const avatarItem = document.querySelector('#avatar')
    const reposItem = document.querySelector('#repos')
    const followersItem = document.querySelector('#followers')
    const followingItem = document.querySelector('#following')
    const linkItem = document.querySelector('#link')

    fetch('https://api.github.com/users/GuilhermeSantosz')
        .then(function(res) {
            return res.json()
        })
        .then(function(json) {
            nameItem.innerHTML = json.name
            usernameItem.innerText = json.login 
            avatarItem.src = json.avatar_url
            followingItem.innerHTML = json.following
            followersItem.innerHTML = json.followers
            repos.innerHTML = json.public_repos
            linkItem.href = json.html_url
        })
})