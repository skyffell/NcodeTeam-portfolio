function SectionsHeader(props){
  const  {mainText,
    subText} = props
    
    return(
        <div>
             <div className="team-name-container">
                    <h1 className="team-name">{mainText}</h1>
                </div>
                <p className="team-tagline">{subText}</p>
        </div>
    )
}

export default SectionsHeader