import {Card,CardBody,CardGroup,CardTitle,CardSubtitle,Button,CardText} from "reactstrap";
import "./MainPage.css"
function MainPage(props) {
  const renderSlides = () => {
    const result = props?.slides?.data?.map((element) => {
      return (
        <div className="cards">
          <Card
            color="info"
            style={{
              width: "18rem",
            }}
          className="cards">
            <img alt="Sample" src= {`https://wsi001.api.preci.cloud/api/WholeSlideImages/${element.id}/Thumbnails/512x512.jpeg`}/>
            <CardBody>
              <CardTitle tag="h5">{element?.fileName}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {element?.id}
              </CardSubtitle>
              <CardText>to see this slide, please press the button</CardText>
              <Button href={`https://wsi001.api.preci.cloud/api/WholeSlideImages/${element.id}/Tiles/11/0_1.jpg`}>Check slide</Button>
            </CardBody>
          </Card>
        </div>
           
      );
    });
    return result;
 
  };

  return (
    <>
      <h1>Slide collection</h1>

      <div>{props.slides === null ? <p>Loading</p> : renderSlides()} </div>
      

      <div>
        <br />
        <hr />
        <br />
      </div>
    </>
  );
}

export default MainPage;
