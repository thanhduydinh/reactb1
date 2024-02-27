var page1 = [
  {
    RenderingEngine: "Gecko",
    Browser: "Firefox 1.0",
    Platform: "Win 98+ / OSX.2+",
    EngineVersion: "1.7",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Firefox 1.5",
    Platform: "Win 98+ / OSX.2+",
    EngineVersion: "1.8",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Firefox 2.0",
    Platform: "Win 98+ / OSX.2+",
    EngineVersion: "1.8",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Firefox 3.0",
    Platform: "Win 2k+ / OSX.3+",
    EngineVersion: "1.8",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Camino 1.0",
    Platform: "OSX.2+",
    EngineVersion: "1.8",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Camino 1.5",
    Platform: "OSX.3+",
    EngineVersion: "1.8",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Netscape 7.2",
    Platform: "Win 95+ / Mac OS 8.6-9.2",
    EngineVersion: "1.7",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Netscape Browser 8",
    Platform: "Win 98SE+",
    EngineVersion: "1.7",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Netscape Navigator 9",
    Platform: "Win 98+ / OSX.2+",
    EngineVersion: "1.8",
    CssGrade: "A",
  },
  {
    RenderingEngine: "Gecko",
    Browser: "Mozilla 1.0",
    Platform: "Win 95+ / OSX.3+",
    EngineVersion: "1",
    CssGrade: "A",
  },
];

function DataTable() {
  return (
    <>
      {page1.map((data) => (
        <tr key={data.id}>
          <td>{data.RenderingEngine}</td>
          <td>{data.Browser}</td>
          <td>{data.Platform}</td>
          <td>{data.EngineVersion}</td>
          <td>{data.CssGrade}</td>
        </tr>
      ))}
    </>
  );
}

export default DataTable;
