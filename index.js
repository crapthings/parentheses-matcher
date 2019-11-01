module.exports = str => {
  const ops = []
  const open = []
  let method, arg, isMethod = true

  for (const char of str) {
    if (char !== '(' && char !== ')') {
      if (isMethod) {
        method ? (method += char) : (method = char)
      } else {
        arg ? (arg += char) : (arg = char)
      }
      continue
    }

    if (char === '(') {
      if (!isMethod) arg += char
      isMethod = false
      open.push(char)
    } else if (char === ')') {
      open.pop()
      if (open.length < 1) {
        isMethod = true
        ops.push({ method: method.trim(), arg: arg && arg.trim() })
        method = arg = undefined
      } else {
        arg += char
      }
    }
  }

  return ops
}
