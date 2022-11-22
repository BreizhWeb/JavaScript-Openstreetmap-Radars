const downloadCsv = async () => {
  const target = `./radars.csv`;

  const res = await fetch(target, {
      method: "get",
      headers: { "content-type": "text/csv;charset=UTF-8" },
  });
  const data = await res.text();
  const donnee = data.split(/\r?\n/);
  console.log(donnee)
  donnee.forEach((data) =>
  {
      const splited = data.split(",")
      var fes = L.marker([splited[3], splited[4]]).addTo(map);
  })
};
downloadCsv();