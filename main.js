$(document).ready(function () {

    const endpoint = 'https://api.github.com/users/DeVector'
    
    fetch(endpoint)
    .then(function (response) { 
        return response.json();
     })
    .then(function(json) {
        const avatar = json.avatar_url
        const name = json.name;
        const userName = json.login;
        const followers = json.followers;
        const following = json.following;
        const repos = json.public_repos;
        const url = json.html_url;

        $('#profileName').text(name);
        $('#profileUsername').text(userName);
        $('#numbersFollowers').text(followers)
        $('#numbersFollowing').text(following);
        $('#numbersRepository').text(repos);
        $('#url').attr('href', url);
        $('#profileAvatar').attr('src',avatar);

    })
    .catch(function(event) {
        alert("Ocorreu um error")
    })
});