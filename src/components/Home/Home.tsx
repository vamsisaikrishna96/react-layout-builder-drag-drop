import Header from "../Header/Header";

const Home = () => {


// TODO: for future drag drop implementation prototype
// function handleDragOver(e:React.DragEvent)
// {
//   console.log("DragOber",e);
//   e.preventDefault();
  
// }

// function handleOnDrop(e:React.DragEvent)
// {
 

//   console.log("Dragged",e.dataTransfer.getData("widgetDData"));

// }

  return (
    <div>
      <Header />
{/* <div className={styles.homeDrag} onDrop={(e)=>handleOnDrop(e)} onDragOver={(e)=>handleDragOver(e)}>


</div> */}
    </div>
  );
};

export default Home;
