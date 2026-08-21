const trends = [
  {
    title: "Be the Person You Are on Vacation",
    author: "Maren Torff",
  },
  {
    title: "Hate NFTs? I have some bad news...",
    author: "Zain Levin",
  },
  {
    title: "The real impact of dark UX patterns",
    author: "Lindsey Curtis",
  },
];




const TrendList = () => {
  return (
    <section className="shadow-lg p-4 ">
      <h1 className="font-serif text-xl font-bold mb-4">Today's top Trendlist</h1>
      <ul>
        {trends.map((t)=> 
          ( <ul key={t.author}>
            <li className="font-semibold">{t.title}</li>
            <li>- {t.author}</li>

          </ul>
            ))}
      </ul>
    </section>
  )
}

export default TrendList