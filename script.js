const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

      const increment = target / 300
      //  const increment=1
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`.toLocaleString("en-US")
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target.toLocaleString("en-US")
        }
    }

    updateCounter()
})
