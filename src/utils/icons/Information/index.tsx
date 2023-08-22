const Information = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117 49"
      height="44"
      width="114"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <defs>
        <style type="text/css"></style>
      </defs>
      <circle cx="22" cy="23" r="22" fill="#fff"></circle>
      <path
        style={{ stroke: "#222", strokeWidth: "9", strokeLinecap: "round" }}
        d="m 22,23 v 13"
      ></path>
      <path
        style={{ stroke: "#fff", strokeWidth: "4", strokeLinejoin: "round" }}
        d="m 4,43 3,-6 4,3 z"
      ></path>
      <circle r="4.5" cy="11" cx="22" fill="#222"></circle>
      <g fill="#fff">
        <text x="47" y="22">
          <tspan className="text-white text-sm" y="18">
            Acesso à
          </tspan>
          <tspan className="text-white text-sm" x="47" y="31">
            Informação
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Information;
