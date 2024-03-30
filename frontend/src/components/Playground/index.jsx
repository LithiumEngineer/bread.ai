const Playground = () => {
  return (
    <div>
        <form action="/add-user" method="POST">
            <input type="text" name="name"></input>
            <input type="submit"></input>
        </form>
        <p>hi</p>
    </div>
  )
}
export default Playground
