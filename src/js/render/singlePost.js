import storage from '../storage/index.js'
import { deletePost } from '../api/posts/deletePost.js'
import { createEditForm } from './createEditForm.js'
import { addBid } from '../api/posts/addBid.js'
import { countdown } from './countdown.js'

// render single post
export function singlePost(post) {
  // sort bids
  let bids = post.bids
  bids.sort((a, b) => {
    return a.amount - b.amount
  })
  bids = bids.reverse()

  // create elements
  const container = document.querySelector('#api_result')
  const postInfo = document.createElement('div')
  const bidsContainer = document.createElement('div')
  const imgDiv = document.createElement('div')
  const textDiv = document.createElement('div')
  const title = document.createElement('h1')
  const timeLeftContainer = document.createElement('p')
  const description = document.createElement('p')
  const seller = document.createElement('p')
  const user = storage.load('user')
  const bidTitle = document.createElement('h3')

  // time left calculation
  countdown(post.endsAt, timeLeftContainer)
  timeLeftContainer.setAttribute('id', 'timeLeft')
  // fetch images and append to imgDiv
  for (let i = 0; i < post.media.length; i++) {
    const img = document.createElement('img')
    if (i === 0) {
      img.classList.add('w-100', 'mx-auto')
    } else {
      img.classList.add('w-25')
    }
    img.src = post.media[i]
    imgDiv.classList.add('mx-auto', 'me-md-5')
    imgDiv.append(img)
  }
  // add bids to bidsContainer
  for (let j = 0; j < bids.length; j++) {
    const bid = document.createElement('p')
    if (j === 0) {
      bid.classList.add('leader')
    }
    bid.innerText = bids[j].bidderName + ': ' + bids[j].amount + 'credits'
    bidsContainer.append(bid)
  }
  // adding classes
  container.classList.add(
    'd-flex',
    'justify-content-center',
    'flex-column',
    'my-5'
  )
  postInfo.classList.add(
    'd-flex',
    'justify-content-center',
    'flex-column',
    'flex-md-row',
    'flex-1'
  )
  imgDiv.classList.add('flex-1')
  bidsContainer.classList.add('mx-auto', 'w-50', 'mt-5', 'text-center')

  // add text to elements
  bidTitle.innerText = 'Bids'
  title.innerText = post.title
  description.innerText = post.description
  seller.innerText = 'seller: ' + post.seller.name
  bidsContainer.prepend(bidTitle)
  textDiv.append(title, description, seller, timeLeftContainer)
  // add buttons if user is seller
  if (post.seller.name === user.name) {
    // create buttons
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    // add classes and id to buttons
    editButton.classList.add('btn', 'btn-primary', 'mx-2')
    deleteButton.classList.add('btn', 'btn-danger', 'mx-2')
    editButton.setAttribute('id', 'editButton')
    deleteButton.setAttribute('id', 'deleteButton')
    // add event listeners to buttons
    editButton.addEventListener('click', (e) => {
      e.preventDefault()
      const editForm = createEditForm(post)
      textDiv.append(editForm)
    })
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault()
      location.href = 'profile.html'
      deletePost(post.id)
    })
    editButton.innerText = 'Edit'
    deleteButton.innerText = 'Delete'
    textDiv.append(editButton, deleteButton)
  }
  // adds bid form if user is not seller
  else {
    // create elements
    const bidButton = document.createElement('button')
    const bidInput = document.createElement('input')
    const bidLabel = document.createElement('label')
    const bidForm = document.createElement('form')

    //  adds classes and attributes to elements
    bidInput.classList.add('form-control', 'mx-auto')
    bidInput.setAttribute('type', 'number')
    bidInput.setAttribute('name', 'bid')
    bidLabel.setAttribute('for', 'bid')
    bidLabel.innerText = 'Bid:'
    //  sets min value to 1 higher than highest bid
    if (bids.length !== 0) {
      bidInput.setAttribute('min', bids[0].amount + 1)
      bidInput.value = bids[0].amount + 1
    }
    // adds classes and attributes
    bidButton.classList.add('btn', 'btn-primary', 'w-100', 'mt-2')
    bidButton.innerText = 'Bid'
    bidForm.setAttribute('id', 'bidForm')

    // adds event listener to form
    bidForm.addEventListener('submit', (e) => {
      e.preventDefault()
      addBid(post.id, bidInput.value)
    })
    // appends elements to form
    bidForm.append(bidLabel, bidInput, bidButton)
    textDiv.append(bidForm)
  }
  // append elements to container
  postInfo.append(imgDiv, textDiv)
  container.append(postInfo, bidsContainer)
}
