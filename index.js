let cards = document.querySelector('#row')
let cols = document.getElementsByClassName('col-md-4')

function loadImages()
{
  cards.innerHTML = ""

  fetch("https://api.pexels.com/v1/search?query=cars", {
    headers: { Authorization: "Bearer 563492ad6f91700001000001019e8da5373c467d99250c3231c5499d" }
  })

    .then(response => response.json())
    .then(images =>
    {
      console.log(images)
      // const arr = data.photos
      for (let image of images.photos)
      // for (let i = 0; i < arr.length; i++)
      {
        // console.log(arr[i])
        cards.innerHTML += `
        <div class="col-md-4">
                <div class="card mb-4 shadow-sm" id="card">
                <img src='${image.src.large}' style="height: 200px; object-fit: cover"/>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
              </div>
            </div>`
      }

    })
}

