const EventExample = () => {
  // Define our event handlers here
  const handleFormInput = (event) => {
    console.log("onChange Fired!", event.target);
  };

  const handleClick = (event) => {
    console.log("Button Clicked!", event.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("blah", e);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Some Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleSubmit}>Click Me!</button>
    </section>
  );
};

export default EventExample;
