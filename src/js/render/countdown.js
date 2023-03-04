export function countdown(endsAt, timeLeftContainer) {
  // Set the date we're counting down to
  const countDownDate = new Date(endsAt).getTime()

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Getting today's date and time
    const now = new Date().getTime()

    // Find the diffrence between now and the count down date
    const distance = countDownDate - now
    if (distance < 0) {
      clearInterval(x)
      timeLeftContainer.innerText = 'Time left: EXPIRED'
    } else {
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // create result
      const result =
        'time left: ' +
        days +
        'd ' +
        hours +
        'h ' +
        minutes +
        'm ' +
        seconds +
        's '
      timeLeftContainer.innerText = result
    }
  }, 1000)
}
