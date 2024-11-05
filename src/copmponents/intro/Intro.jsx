import BlueButton from "../button/BlueButton";
import Button from "../button/button";
import Container from "../container/container";
import './intro.css'

export default function Intro(){
    return(
        <section className="Intro">
            <Container>
                <h1>Iphone 16 Pro Max</h1>
                <div className="button__block">
                    <BlueButton>Узнать</BlueButton>
                    <a href="/card"><Button>Купить</Button></a>
                </div>
                
            </Container>
        </section>
    )
}