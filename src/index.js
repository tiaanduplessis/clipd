export default function clipd (target, opts = {}) {
  if (
    target.nodeType !== window.Node.ELEMENT_NODE &&
    typeof target !== 'string'
  ) {
    throw new Error('clipd requires a valid target')
  }

  if (!document.execCommand) {
    throw new Error('clipd requires the document.execCommand method')
  }

  const elem = typeof target === 'string'
    ? document.querySelector(target)
    : target

  const handler = event => {
    const range = document.createRange()
    const selection = window.getSelection()

    elem.tagName === 'A' && event.preventDefault()

    range.selectNode(elem)

    if (selection.rangeCount > 0) {
      selection.removeAllRanges()
    }

    selection.addRange(range)

    const executed = document.execCommand('copy')
    opts.callback && opts.callback(executed)
  }

  elem.addEventListener(opts.event || 'click', handler)
}
