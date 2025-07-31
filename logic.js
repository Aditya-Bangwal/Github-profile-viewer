//create object
let input=document.querySelector("#inputfield");
let btn=document.querySelector("#searchbtn");


//functions
async function fetchuser(username){
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result= await response.json();
    console.log(result); 
    displayuser(result);
  
};

function displayuser(result){
    let{avatar_url,name,bio,followers,following,public_repos,html_url}=result;
    if (result.message === "Not Found") {
        document.querySelector(".profile").innerHTML = "<h1>User not found</h1>";
        return;
    }
    bio = bio !== null ? bio : "No bio available";

    document.querySelector(".profile").innerHTML
    =` <div class="left">
            <div class="profilepic">
                <img id="imgid" src="${avatar_url}">
            </div>
            <div class="name">${name}</div>
           <div class="role">${bio}</div>
        </div>

        <div class="right">
            <div class="rightup">
                <div class="follower">
                    <div class="followertext">Follower</div>
                    <div class="followercnt">${followers}</div>
                </div>
                <div class="following">
                    <div class="followingtext">Following</div>
                    <div class="followingcnt">${following}</div>
                </div>
                <div class="repo">
                    <div class="repotext">Repo</div>
                    <div class="repocnt">${public_repos}</div>
                </div>
            </div>
            <a href="${html_url}" target="_blank" >  
            <div class="rightdown">
                <button  class="viewprofilebtn">View Profile</button>

               
            </div>
            </a>
            
        </div>`;
        console.log(name);

}


//Click button
btn.addEventListener("click",()=>{
    document.querySelector(".profile").innerHTML=`<span class="loader"></span>`

    let userdata=input.value;
    fetchuser(userdata);
});

//