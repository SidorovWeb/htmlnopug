$(document).ready(function() {
  console.log('ss')

  svg4everybody()

  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  })
  lazyLoadInstance.update()
})
