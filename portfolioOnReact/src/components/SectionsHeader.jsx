function SectoinsHeader(props){
  const  {mainText,
    subText} = props
    
    return(
        <div>
             <div class="team-name-container">
                    <h1 class="team-name">{mainText}</h1>
                </div>
                <p class="team-tagline">{subText}</p>
        </div>
    )
}

export default SectoinsHeader