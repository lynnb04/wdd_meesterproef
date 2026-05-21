// add class .set-sibling-index to add sibling index to all items in a container
const siblingIndexContainer = document.querySelectorAll(".set-sibling-index")

siblingIndexContainer?.forEach(container => {
    const directChildren = container.querySelectorAll(":scope > *")
    directChildren.forEach(item => {
        let selfIndex = Array.from(directChildren).indexOf(item)
        item.setAttribute("--sibling-index", selfIndex)
    })
  container.setAttribute("--sibling-count", directChildren.length)
})
