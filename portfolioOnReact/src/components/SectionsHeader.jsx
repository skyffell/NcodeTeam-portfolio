function SectionsHeader(props) {
  const { mainText,
    subText, isHero } = props
  //Если это секция hero, то выводим заголовок и теглайн
  if (isHero) {
    return (
      <>
        <div className="team-name-container">
          <h1 className="team-name">{mainText}</h1>
        </div>
        {subText && <p className="team-tagline">{subText}</p>}
      </>
    )
  }
  //Если это секция не hero
  return (
    <div className="section-header">
      <h2 className="section-title">{mainText}</h2>
      {subText && <p className="section-subtitle">{subText}</p>}
    </div>
  )
}

export default SectionsHeader