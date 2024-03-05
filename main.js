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
        const url = json.url;

        $('#profileName').val(name);
        $('#profileUsername').val(userName);
        $('#numbersFollowers').val(followers)
        $('#numbersFollowing').val(following);
        $('#numbersRepository').val(repos);
        $('#url').val(url);
        $('#profileAvatar').val(avatar);

    })
    .catch(function(event) {
        alert("Ocorreu um error")
    })
});