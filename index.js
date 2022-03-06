let cards = document.querySelector('#row')
let cols = document.getElementsByClassName('col-md-4')

function loadImages(query)
{
  cards.innerHTML = ""

  fetch(('https://api.pexels.com/v1/search?query=' + query), {
    headers: { Authorization: "Bearer 563492ad6f91700001000001019e8da5373c467d99250c3231c5499d" }
  })

    .then(response => response.json())
    .then(images =>
    {
      let html_str = ""
      images.photos.forEach(image =>
        html_str += `
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
                <button type="button" onclick='removeCard()' class="btn btn-sm btn-outline-secondary">
                  Hide
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
          </div>
        </div>`
      );
      cards.innerHTML = html_str
    })
}

function loadImages2(query)
{
  cards.innerHTML = ""

  data = fetch(('https://api.pexels.com/v1/search?query=' + query), {
    headers: { Authorization: "Bearer 563492ad6f91700001000001019e8da5373c467d99250c3231c5499d" }
  })

  data
    .then(response => response.json())
    .then(images =>
    {
      // const arr = [1, 2, 3]
      // const samples = arr.map((num) => num * 10)
      // console.log(images)

      const html_array = images.photos.map(
        (photo) =>
          `<div class="col-md-4">
            <div class="card mb-4 shadow-sm" id="card">
              <img src='${photo.src.large}' style="height: 200px; object-fit: cover" />
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
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>`
      )

      cards.innerHTML = html_array.join('')
    }
    )
}

