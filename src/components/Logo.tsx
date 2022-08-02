export function Logo () {
  return (
  <img className="logo" src="data:image/png;base64,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" alt="Hoxtagram"></img>
  )
}