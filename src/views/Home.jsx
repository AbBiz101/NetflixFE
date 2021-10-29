import DropDown from "../components/DropDown";
import MyGalleries from "../components/MyGalleries";

const Home = (props) => {

  return (
    <>
      <DropDown />
      {props.query.length > 0 ? (
        <MyGalleries query={props.query} />
      ) : (
        <>
          <MyGalleries query={"avengers"} />
          <MyGalleries query={"harry potter"} />
          <MyGalleries query={"batman"} />
        </>
      )}
    </>
  );
}


export default Home