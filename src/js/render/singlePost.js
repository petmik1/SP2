import storage from '../storage/index.js'
import { deletePost } from '../api/posts/deletePost.js'
import { createEditForm } from './createEditForm.js'
export function singlePost(post) {
  console.log(post)
  let bids = post.bids
  bids.sort((a, b) => {
    return a.amount - b.amount
  })
  bids = bids.reverse()
  const container = document.querySelector('#api_result')
  const postInfo = document.createElement('div')
  const bidsContainer = document.createElement('div')
  const imgDiv = document.createElement('div')
  const textDiv = document.createElement('div')
  const title = document.createElement('h1')
  const description = document.createElement('p')
  const seller = document.createElement('p')
  const user = storage.load('user')

  const bidTitle = document.createElement('h3')
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

  for (let j = 0; j < bids.length; j++) {
    const bid = document.createElement('p')
    if (j === 0) {
      bid.classList.add('leader')
    }
    bid.innerText = bids[j].bidderName + ': ' + bids[j].amount + 'credits'
    bidsContainer.append(bid)
  }

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
  bidTitle.innerText = 'Bids'
  title.innerText = post.title
  description.innerText = post.description
  seller.innerText = 'seller: ' + post.seller.name
  bidsContainer.prepend(bidTitle)
  textDiv.append(title, description, seller)
  if (post.seller.name === user.name) {
    console.log('seller')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    editButton.classList.add('btn', 'btn-primary', 'mx-2')
    deleteButton.classList.add('btn', 'btn-danger', 'mx-2')
    editButton.setAttribute('id', 'editButton')
    deleteButton.setAttribute('id', 'deleteButton')
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
  } else {
    const bidButton = document.createElement('button')
    const bidInput = document.createElement('input')
    const bidLabel = document.createElement('label')
    const bidForm = document.createElement('form')
    bidLabel.innerText = 'Bid:'
    bidInput.classList.add('form-control', 'mx-auto')
    bidInput.setAttribute('type', 'number')
    if (bids.length !== 0) {
      bidInput.setAttribute('min', bids[0].amount)
    }
    console.log(bids[0].amount)
    bidButton.classList.add('btn', 'btn-primary', 'w-100', 'mt-2')
    bidButton.innerText = 'Bid'
    bidForm.setAttribute('id', 'bidForm')
    bidForm.append(bidLabel, bidInput, bidButton)
    textDiv.append(bidForm)
  }
  postInfo.append(imgDiv, textDiv)
  container.append(postInfo, bidsContainer)
}
