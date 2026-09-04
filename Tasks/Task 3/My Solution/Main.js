let loader=false
let loaderContent = `
                <div class='col'>
                    <div class="card" aria-hidden="true">
                    <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" style='height:250px' class="card-img-top object-fit-cover" alt="...">
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                        </p>
                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                    </div>
                </div>                
            `

const res =fetch(`https://jsonplaceholder.typicode.com/users`);

res.then(response =>
{
    loader = false;


  console.log(response);
  if (response.ok)
  {
   
    return response.json()
    
  }
  else
  {
    throw new Error('Can\'t Fetch Data');
    
  }

})
.then(data => {
    console.log(data);
    
    
    if (loader) {
        [1,2,3,4].forEach(loader => {
            document.querySelector(".loader").innerHTML += loaderContent
        })
    } else {
      ShowUsers(data);
    }
})

.catch(err => document.body.innerHTML = err.message)

function ShowUsers(users) {
    users.forEach(user => {
        document.querySelector(".users").innerHTML += `
            <div class='col'>
                <div class="card h-100">
                    <div class="card-body d-flex flex-column justify-content-between align-items-start">
                         <h5 class="card-title">${user.username}</h5>
                           <button id='${user.id}' class="btn btn-primary">Show more</button>
                    </div>
                </div>
            </div>


        `})
         document.querySelectorAll(".btn").forEach(btn => {
       btn.addEventListener("click" , () => ShowUserInfo(btn.id))

    });
  
  
    }

  //2 
async function ShowUserInfo (id)
 {

  try
  {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);    

    if(res.ok)
    {
      const data=await res.json();
      console.log(data);
      const usersContainer = document.querySelector(".users");
      usersContainer.innerHTML = `
        <div class="col-12 mb-3">
          <button id="backBtn" class="btn btn-secondary">Back to Users</button>
        </div>
      `;
data.forEach(post => {
    usersContainer.innerHTML += `
        <div class='col'>
            <div class="card h-100 shadow-sm">
                <div class="card-body d-flex flex-column align-items-start">
                    <h5 class="card-title fw-bold">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                

                </div>
            </div>
        </div>
    `;
    document.getElementById("backBtn").addEventListener("click", () => {
        location.reload();
      });
})
} else  {
            throw new Error("can't fetch product")
        }
    } catch (error) {
      location.href = './error.html';
        console.error(error)
    }
  }
  
    