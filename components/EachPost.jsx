function EachPost({title,url}) {
  return (
    <article>
      <a href={url}>
        <h3>{title}</h3>
      </a>
    </article>
  )
}
