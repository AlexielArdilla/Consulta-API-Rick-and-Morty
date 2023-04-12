function CharacterCard({id, image, name}){
  
    return (
      <div>
        <img src={image} alt="imagen del  producto"/>
        <h1>Nombre{name}</h1>
        <p>ID{id}</p>
      </div>
    );
  }
  
  export default CharacterCard

