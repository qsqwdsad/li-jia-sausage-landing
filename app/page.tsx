export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          花蓮東海岸必吃美食
        </h1>
        <p className="text-lg md:text-2xl mb-4">
          在地人推薦的炭火香腸
        </p>
        <p className="text-yellow-300 mb-6">
          來花蓮，這攤沒吃等於沒來
        </p>

        <div className="flex gap-4">
          <a
            href="https://maps.google.com/?q=花蓮豐濱李家香腸"
            className="bg-red-700 px-6 py-3 rounded-xl"
          >
            立即導航
          </a>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl">
            查看菜單
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">為什麼大家都推薦</h2>
        <div className="grid md:grid-cols-4 gap-6 px-6">
          {["炭火現烤香氣", "在地老字號", "東海岸必停點", "價格親民"].map(
            (f, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow">
                {f}
              </div>
            )
          )}
        </div>
      </section>

      {/* FOOD */}
      <section className="py-16">
        <h2 className="text-3xl text-center font-bold mb-10">招牌美食</h2>
        <div className="grid md:grid-cols-4 gap-6 px-6">
          {[
            ["炭火香腸", "外酥內多汁，炭火香氣濃厚"],
            ["糯米腸", "香Q飽滿，超搭香腸"],
            ["香腸配蒜", "經典台味組合"],
            ["台式小吃", "最道地街頭美食"],
          ].map((f, i) => (
            <div key={i} className="p-4 shadow rounded-xl">
              <div className="h-40 bg-gray-200 mb-3"></div>
              <h3 className="font-bold">{f[0]}</h3>
              <p className="text-sm text-gray-600">{f[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          來花蓮旅遊一定要吃！
        </h2>
        <p className="mb-6">
          東海岸旅行途中，一定要停下來吃一口
        </p>
        <a
          href="https://maps.google.com/?q=花蓮豐濱李家香腸"
          className="bg-red-600 text-white px-8 py-4 rounded-xl"
        >
          Google 地圖導航
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white p-6 text-center">
        <p>花蓮豐濱李家香腸</p>
        <p>977 花蓮縣豐濱鄉三民路71號</p>
        <p>0933-482-392</p>
      </footer>

      {/* STICKY CTA (手機) */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow flex justify-around p-3 md:hidden">
        <a href="tel:0933482392" className="text-red-600 font-bold">
          撥打電話
        </a>
        <a
          href="https://maps.google.com/?q=花蓮豐濱李家香腸"
          className="text-blue-600 font-bold"
        >
          導航
        </a>
      </div>

    </main>
  );
}
