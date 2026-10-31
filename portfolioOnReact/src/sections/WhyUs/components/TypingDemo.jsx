const TypingDemo = () =>{
    return(
        <div class="typing-demo">
    <h3>Наша философия разработки</h3>
    <div class="philosophy-content">
        <div class="philosophy-text">
            <p class="typing-line" data-text="Мы считаем, что идеальный продукт рождается на стыке красоты и функциональности." data-delay="0"></p>
            <p class="typing-line" data-text="Frontend — это лицо продукта, то, что видят пользователи." data-delay="1500"></p>
            <p class="typing-line" data-text="Backend — это мозг, который обеспечивает надежность и производительность." data-delay="3000"></p>
            <p class="typing-line" data-text="Вместе мы создаем решения, которые не просто работают, а восхищают." data-delay="4500"></p>
        </div>
        <div class="philosophy-visual">
            <div class="code-animation">
                <div class="code-line">// Frontend: Красота и интуитивность</div>
                <div class="code-line">function createElegantUI() </div>
                <div class="code-line">  return new UserExperience();</div>
                <div class="code-line"></div>
                <div class="code-line">// Backend: Мощь и надежность</div>
                <div class="code-line">async function handleBusinessLogic() </div>
                <div class="code-line">  return await processData();</div>
                <div class="code-line"></div>
            </div>
        </div>
    </div>
</div>
    )

}

export default TypingDemo