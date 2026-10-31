function SectionsHeader(props) {
  const { mainText,
    subText, isHero } = props
  if (isHero) {
    return (
      <>
        <div className="team-name-container">
          <h1 className="team-name">{mainText}</h1>
        </div>
        <p className="team-tagline">{subText}</p>
      </>
    )
  }
  return (
    <div className="section-header">
      <h2 className="section-title">{mainText}</h2>
      <p className="section-subtitle">{subText}</p>
    </div>
  )
}

export default SectionsHeader