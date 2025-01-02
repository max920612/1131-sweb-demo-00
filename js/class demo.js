const p = document.querySelector('.show-classdemo')
console.log('p', p)

function showClassDemo(item) {
  switch (item) {
    case 'w02-intro-00':
      p.innerHTML = `<iframe src='./demo/w02-intro-00/index.html' width='100%' height='100%' />`
      break
    case 'W03_card_00':
      p.innerHTML = `<iframe src='./demo/W03_card_00/' width='100%' height='100%' />`
      break
    case 'W06_blog_00':
      p.innerHTML = `<iframe src='./demo/W06_blog_00/' width='100%' height='100%' />`
      break
    case 'W11_navbar_00':
      p.innerHTML = `<iframe src='./demo/W11_navbar_00/' width='100%' height='100%' />`
      break
    case 'w13_multipage_00':
      p.innerHTML = `<iframe src='./demo/w13_multipage_00/index.html' width='100%' height='100%' />`
      break
  }
}
