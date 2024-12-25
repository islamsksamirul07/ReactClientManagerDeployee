import { Container, Button } from "react-bootstrap";


const Home1=({name})=>{

return(
<div className="text-center">
            <h2>Hi, {name}</h2>
            <p>This is developed by Samirul. This is using React for fontend and Spring boot for backend for this client management project.</p>
            <Container>
              
        <div>You can use ChatGpt here : </div><a href="https://chatgpt.com/" target="blank">
      <Button color="primary">ChatGpt</Button>
    </a>
            </Container>
        </div>
)
}
export default Home1;