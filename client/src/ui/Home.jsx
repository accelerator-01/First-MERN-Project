import Card from "./Card";

function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-lg mx-10 py-10 text-center border shadow-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, quo.
      </h1>
      <div className="columns-3 p-10">
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
        <Card className="border shadow-lg" />
      </div>
    </div>
  );
}

export default Home;
