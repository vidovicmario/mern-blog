export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/Husqvarna-Automower-405X-7.jpg"
          alt="/"
        />
      </div>
      <div className="texts">
        <h2>Best grass cutter!</h2>
        <p className="info">
          <a href className="author">
            James Webb{" "}
          </a>
          <time>2023-01-10 18:49</time>
        </p>
        <p className="summary">
          A very powerful robot lawnmower designed for smaller gardens, the Husqvarna Automower 405X
          packs in a lot of the features of its bigger brother. You get full app control via SIM,
          including height adjustment.
        </p>
      </div>
    </div>
  );
}
